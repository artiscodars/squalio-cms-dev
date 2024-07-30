const slugify = require("slugify");
const MODEL_NAME = 'api::service.service';
const { ApplicationError } = require("@strapi/utils").errors;

module.exports = {
  async beforeCreate(event) {
    await generateSlugForCreation(event);
  },
  async beforeUpdate(event) {
    await generateSlugForUpdate(event);
  },
};

const generateSlugForCreation = async ({ params: { data } }) => {
  if (data.title) {
    data.slug = await generateUniqueSlug(data.title, data.locale);
    console.log('Generated slug:', data.slug);
  } else {
    console.error('Error: No title provided for slug generation!');
    throw new ApplicationError("Slug is required for creation!");
  }
};

const generateSlugForUpdate = async ({ params }) => {
  const { data, where: { id } } = params;
  const currentEntry = await strapi.db.query(MODEL_NAME).findOne({
    select: ['locale', 'slug'],
    where: { id }
  });

  if (data.title && !data.slug) {
    data.slug = await generateUniqueSlug(data.title, currentEntry.locale);
    console.log('Generated slug:', data.slug);
  } else if (data.slug && data.slug !== currentEntry.slug) {
    const isSlugUnique = await checkSlugUniqueness(data.slug, currentEntry.locale, id);
    if (!isSlugUnique) {
      console.log('Manually provided slug is not unique, generating a new one.');
      data.slug = await generateUniqueSlug(data.slug, currentEntry.locale);
    }
  } else if (!data.title && !data.slug && currentEntry.locale) {
    console.log('This is a localization update without a title. Keeping existing slug.');
  } else if (!data.title) {
    console.log('No title provided. Keeping existing slug.');
  }
};

const checkSlugUniqueness = async (slug, locale, currentEntryId) => {
  const existingEntry = await strapi.db.query(MODEL_NAME).findOne({
    select: ['id'],
    where: { slug, locale }
  });

  if (!existingEntry) return true;
  return existingEntry.id === currentEntryId;
};

const generateUniqueSlug = async (title, locale) => {
  let baseSlug = slugify(title, { lower: true });
  let uniqueSlug = baseSlug;
  let counter = 1;

  let existingEntry = await strapi.db.query(MODEL_NAME).findOne({
    select: ['id'],
    where: { slug: uniqueSlug, locale }
  });

  while (existingEntry) {
    uniqueSlug = `${baseSlug}-${counter++}`;
    existingEntry = await strapi.db.query(MODEL_NAME).findOne({
      select: ['id'],
      where: { slug: uniqueSlug, locale }
    });
  }

  return uniqueSlug;
};
