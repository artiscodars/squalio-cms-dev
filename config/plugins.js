module.exports = {
  upload: {
    config: {
      provider: "strapi-provider-upload-bunnynet",
      providerOptions: {
        api_key: process.env.BUNNY_API_KEY,
        storage_zone: process.env.BUNNY_STORAGE_ZONE,
        pull_zone: process.env.BUNNY_PULL_ZONE,
      },
    },
    actionOptions: {
      upload: {},
      delete: {},
    },
  },
  meilisearch: {
    config: {
      page: {
        entriesQuery: {
          locale: 'all'
        }
      },
      blog: {
        entriesQuery: {
          locale: 'all'
        }
      },
      vendor: {
        entriesQuery: {
          locale: 'all'
        }
      },
      vacancy: {
        entriesQuery: {
          locale: 'all'
        }
      },
      post: {
        entriesQuery: {
          locale: 'all'
        }
      },
      product: {
        entriesQuery: {
          locale: 'all'
        }
      },
      // more content types here...
    }
  },
'sitemap': {
    enabled: true,
    config: {
      cron: '0 0 * * *',
      limit: 45000,
      xsl: false,
      autoGenerate: true,
      caching: true,
      allowedFields: ['id', 'uid', 'slug'],
      excludedTypes: [],
    },
  },
  ckeditor: {
    defaultConfig: {
      allowedContent: true,
    },
  },
  seo: {
    enabled: true,
  },
  'strapi-plugin-populate-deep': {
    config: {
      defaultDepth: 9, // Default is 5
    }
  },
};
