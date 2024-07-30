import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksAccordion extends Schema.Component {
  collectionName: 'components_accordion';
  info: {
    displayName: 'Accordion';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    title_display: Attribute.Enumeration<['h1', 'h2', 'h3', 'hidden']> &
      Attribute.DefaultTo<'h2'>;
    accordions: Attribute.Component<'elements.description-list-item', true>;
    background: Attribute.Enumeration<
      ['Transparent', 'White', 'Light grey', 'Dark', 'Primary', 'Secondary']
    > &
      Attribute.DefaultTo<'Transparent'>;
    width: Attribute.String;
  };
}

export interface BlocksBanner extends Schema.Component {
  collectionName: 'components_blocks_banners';
  info: {
    displayName: 'Banner';
    description: '';
    icon: 'monitor';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    title_tag: Attribute.Enumeration<['h1', 'h2', 'h3', 'h4']>;
    image: Attribute.Media;
    buttons: Attribute.Component<'elements.button', true>;
    width: Attribute.Enumeration<['Boxed', 'Full']> &
      Attribute.DefaultTo<'Boxed'>;
    description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'custom';
        }
      >;
    template: Attribute.Enumeration<
      ['Big centred', 'Big left aligned', 'Small']
    >;
    hide_title: Attribute.Boolean;
    description_font_size: Attribute.Enumeration<['small', 'middle', 'large']> &
      Attribute.DefaultTo<'large'>;
    logo: Attribute.Media;
  };
}

export interface BlocksButtonGroup extends Schema.Component {
  collectionName: 'components_blocks_button_groups';
  info: {
    displayName: 'Button group';
    description: '';
    icon: 'cursor';
  };
  attributes: {
    buttons: Attribute.Component<'elements.button', true>;
    title: Attribute.String & Attribute.Required;
    description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'custom';
        }
      >;
    background: Attribute.Enumeration<
      ['Transparent', 'White', 'Light grey', 'Dark', 'Primary', 'Secondary']
    > &
      Attribute.DefaultTo<'Transparent'>;
    width: Attribute.String;
    title_display: Attribute.Enumeration<['h1', 'h2', 'h3', 'hidden']> &
      Attribute.DefaultTo<'h2'>;
    template: Attribute.Enumeration<
      ['Centred', 'Left aligned', 'Right aligned']
    >;
    subtitle: Attribute.String;
    subtitle_display: Attribute.Enumeration<
      ['h2', 'h3', 'div', 'p', 'price', 'hidden']
    >;
  };
}

export interface BlocksCode extends Schema.Component {
  collectionName: 'components_blocks_codes';
  info: {
    displayName: 'code';
    description: '';
  };
  attributes: {
    code: Attribute.Text;
    placement: Attribute.Enumeration<['head', 'body', 'footer']>;
    title: Attribute.String;
  };
}

export interface BlocksContactForm extends Schema.Component {
  collectionName: 'components_blocks_contact_forms';
  info: {
    displayName: 'Contact form';
    description: '';
  };
  attributes: {
    form_rows: Attribute.Component<'elements.form-row', true> &
      Attribute.Required;
    title: Attribute.String & Attribute.Required;
    post_endpoint: Attribute.String;
    success_message: Attribute.String & Attribute.Required;
    redirect_url: Attribute.String;
    submit_button_name: Attribute.String & Attribute.Required;
    security_key: Attribute.String;
    hidden_fields: Attribute.Component<'elements.hidden-fields', true>;
    privacy_policy: Attribute.Relation<
      'blocks.contact-form',
      'oneToOne',
      'api::page.page'
    >;
    description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'custom';
        }
      >;
    image: Attribute.Media;
    title_display: Attribute.Enumeration<['h1', 'h2', 'h3', 'hidden']> &
      Attribute.DefaultTo<'h2'>;
    background: Attribute.Enumeration<
      ['Transparent', 'White', 'Light grey', 'Dark', 'Primary', 'Secondary']
    > &
      Attribute.DefaultTo<'Transparent'>;
    width: Attribute.String;
    form_template: Attribute.Enumeration<
      [
        'Content on the right (2/3)',
        'Content on the left (2/3)',
        'Content on the right (1/2)',
        'Content on the left (1/2)',
        'Content below title',
        'Content below form',
        'Event form',
        'Form decorated'
      ]
    > &
      Attribute.DefaultTo<'Content on the left (1/2)'>;
    submit_email: Attribute.String;
    advanced_settings: Attribute.JSON;
  };
}

export interface BlocksContentBlock extends Schema.Component {
  collectionName: 'components_blocks_content_blocks';
  info: {
    displayName: 'Content block';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    content_block: Attribute.Relation<
      'blocks.content-block',
      'oneToOne',
      'api::content-block.content-block'
    >;
    disabled: Attribute.Relation<
      'blocks.content-block',
      'oneToMany',
      'api::page.page'
    >;
    template: Attribute.Enumeration<['White box']>;
  };
}

export interface BlocksCookieScripts extends Schema.Component {
  collectionName: 'components_blocks_cookie_scripts';
  info: {
    displayName: 'Cookie scripts';
    description: '';
  };
  attributes: {
    script: Attribute.Text;
    title: Attribute.String;
    slug: Attribute.String;
    placement: Attribute.Enumeration<['head', 'body', 'footer']>;
    cookie_names: Attribute.String;
  };
}

export interface BlocksDataSet extends Schema.Component {
  collectionName: 'components_blocks_data_sets';
  info: {
    displayName: 'Data set';
    icon: 'dashboard';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    background: Attribute.Enumeration<
      [
        'Transparent',
        'White',
        'Light grey',
        'Dark',
        'Dark decorated',
        'Primary',
        'Secondary'
      ]
    >;
  };
}

export interface BlocksDescriptionList extends Schema.Component {
  collectionName: 'components_blocks_description_lists';
  info: {
    displayName: 'Description list';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    descriptions: Attribute.Component<'elements.description-list-item', true>;
    background: Attribute.Enumeration<
      ['Transparent', 'White', 'Light grey', 'Dark', 'Primary', 'Secondary']
    > &
      Attribute.DefaultTo<'Transparent'>;
    width: Attribute.String;
    columns: Attribute.Integer;
    title_display: Attribute.Enumeration<['h1', 'h2', 'h3', 'hidden']> &
      Attribute.DefaultTo<'h2'>;
    template: Attribute.Enumeration<['Centred', 'Left aligned']>;
  };
}

export interface BlocksDescription extends Schema.Component {
  collectionName: 'components_blocks_descriptions';
  info: {
    displayName: 'Description';
    description: '';
    icon: 'file';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'custom';
        }
      >;
    background: Attribute.Enumeration<
      ['Transparent', 'White', 'Light grey', 'Dark', 'Primary', 'Secondary']
    > &
      Attribute.DefaultTo<'Transparent'>;
    width: Attribute.String;
    title_display: Attribute.Enumeration<['h1', 'h2', 'h3', 'hidden']> &
      Attribute.DefaultTo<'h2'>;
    template: Attribute.Enumeration<['Centered', 'Left aligned']>;
  };
}

export interface BlocksGallery extends Schema.Component {
  collectionName: 'components_blocks_galleries';
  info: {
    displayName: 'Gallery';
    description: '';
    icon: 'picture';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    images: Attribute.Media;
    description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'custom';
        }
      >;
    background: Attribute.Enumeration<
      ['Transparent', 'White', 'Light grey', 'Dark', 'Primary', 'Secondary']
    > &
      Attribute.DefaultTo<'Transparent'>;
    width: Attribute.String;
    columns: Attribute.Integer;
    title_display: Attribute.Enumeration<['h1', 'h2', 'h3', 'hidden']> &
      Attribute.DefaultTo<'h2'>;
  };
}

export interface BlocksIconBoxes extends Schema.Component {
  collectionName: 'components_blocks_icon_boxes';
  info: {
    displayName: 'Icon boxes';
    description: '';
    icon: 'grid';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    title_display: Attribute.Enumeration<['h1', 'h2', 'h3', 'hidden']> &
      Attribute.DefaultTo<'h2'>;
    icon_boxes: Attribute.Component<'elements.icon-box', true>;
    description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'custom';
        }
      >;
    background: Attribute.Enumeration<
      [
        'Transparent',
        'White',
        'Light grey',
        'Dark',
        'Dark Blurred',
        'Primary',
        'Secondary'
      ]
    > &
      Attribute.DefaultTo<'Transparent'>;
    iconbox_template: Attribute.Enumeration<
      ['To the left', 'Centered', 'To the right']
    > &
      Attribute.DefaultTo<'Centered'>;
    columns: Attribute.Integer;
    width: Attribute.String;
    template: Attribute.Enumeration<
      [
        'Dark decorated cube',
        'Highlights list raised on light gray',
        'Highlights list raised on white'
      ]
    >;
  };
}

export interface BlocksImageAndPostsList extends Schema.Component {
  collectionName: 'components_blocks_image_and_posts_lists';
  info: {
    displayName: 'Image and posts list';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    image: Attribute.Media;
    template: Attribute.Enumeration<['ImageLeft', 'ImageRight']>;
    title_display: Attribute.Enumeration<['h1', 'h2', 'h3', 'hidden']>;
    source: Attribute.String;
    base_slug: Attribute.String;
    query_params: Attribute.String;
    show_more_button: Attribute.String;
    show_more_button_url: Attribute.String;
    description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'custom';
        }
      >;
    image_width: Attribute.String;
    width: Attribute.String;
    background: Attribute.Enumeration<
      ['Transparent', 'White', 'Light grey', 'Dark', 'Primary', 'Secondary']
    >;
  };
}

export interface BlocksImageBoxes extends Schema.Component {
  collectionName: 'components_blocks_image_boxes';
  info: {
    displayName: 'Image boxes';
    icon: 'landscape';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    image_boxes: Attribute.Component<'elements.image-box', true>;
    description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'custom';
        }
      >;
    background: Attribute.Enumeration<
      ['Transparent', 'White', 'Light grey', 'Dark', 'Primary', 'Secondary']
    > &
      Attribute.DefaultTo<'Transparent'>;
    width: Attribute.String;
    columns: Attribute.Integer;
    title_display: Attribute.Enumeration<['h1', 'h2', 'h3', 'hidden']> &
      Attribute.DefaultTo<'h2'>;
    template: Attribute.Enumeration<
      [
        'Title centred',
        'Title and description centred',
        'Frame special',
        'Event agenda',
        'Highlights raised list'
      ]
    >;
    link_type: Attribute.Enumeration<['box', 'title', 'button']>;
    button_name: Attribute.String;
    box_template: Attribute.Enumeration<
      ['Left aligned', 'Centred', 'Image on the left', 'Image on the right']
    >;
  };
}

export interface BlocksImage extends Schema.Component {
  collectionName: 'components_blocks_image';
  info: {
    displayName: 'Image';
    icon: 'dashboard';
  };
  attributes: {
    title: Attribute.String;
    image: Attribute.Media;
    background: Attribute.Enumeration<
      ['Transparent', 'White', 'Light grey', 'Dark', 'Primary', 'Secondary']
    > &
      Attribute.DefaultTo<'Transparent'>;
    width: Attribute.String;
    title_display: Attribute.Enumeration<['h1', 'h2', 'h3', 'hidden']> &
      Attribute.DefaultTo<'h2'>;
  };
}

export interface BlocksLogoGroup extends Schema.Component {
  collectionName: 'components_blocks_logo_groups';
  info: {
    displayName: 'Logo group';
    description: '';
    icon: 'apps';
  };
  attributes: {
    logos: Attribute.Component<'elements.logo', true>;
    title: Attribute.String & Attribute.Required;
    title_display: Attribute.Enumeration<['h1', 'h2', 'h3', 'hidden']> &
      Attribute.DefaultTo<'h2'>;
    description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'custom';
        }
      >;
    background: Attribute.Enumeration<
      ['Transparent', 'White', 'Light grey', 'Dark', 'Primary', 'Secondary']
    > &
      Attribute.DefaultTo<'Transparent'>;
    width: Attribute.String;
  };
}

export interface BlocksNumbers extends Schema.Component {
  collectionName: 'components_blocks_numbers';
  info: {
    displayName: 'Numbers';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'custom';
        }
      >;
    numbers: Attribute.Component<'elements.numbers-item', true>;
    background: Attribute.Enumeration<
      [
        'Transparent',
        'White',
        'Light grey',
        'Dark',
        'Dark Blurred',
        'Primary',
        'Secondary'
      ]
    > &
      Attribute.DefaultTo<'Transparent'>;
    width: Attribute.String;
    columns: Attribute.Integer;
    title_display: Attribute.Enumeration<['h1', 'h2', 'h3', 'hidden']> &
      Attribute.DefaultTo<'h2'>;
    template: Attribute.Enumeration<
      [
        'Centred',
        'Title centred',
        'Numbers centred',
        'Left aligned',
        'Timeline'
      ]
    >;
  };
}

export interface BlocksPostsSwiper extends Schema.Component {
  collectionName: 'components_blocks_posts_swiper';
  info: {
    displayName: 'Posts Swiper';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'custom';
        }
      >;
    show_more_button: Attribute.String;
    source: Attribute.String & Attribute.Required;
    base_slug: Attribute.String & Attribute.Required;
    query_params: Attribute.String;
    show_more_button_url: Attribute.String;
    content_filter: Attribute.Component<'elements.content-filter-option', true>;
    advanced_settings: Attribute.JSON;
    locale: Attribute.String;
    background: Attribute.Enumeration<
      ['Transparent', 'White', 'Light grey', 'Dark', 'Primary', 'Secondary']
    > &
      Attribute.DefaultTo<'Transparent'>;
    width: Attribute.String;
    columns: Attribute.Integer;
    title_display: Attribute.Enumeration<['h1', 'h2', 'h3', 'hidden']> &
      Attribute.DefaultTo<'h2'>;
    template: Attribute.Enumeration<['Vendors special']>;
  };
}

export interface BlocksPosts extends Schema.Component {
  collectionName: 'components_blocks_posts';
  info: {
    displayName: 'posts';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    paginator: Attribute.Boolean & Attribute.DefaultTo<false>;
    image_position: Attribute.Enumeration<
      ['image to the left', 'image to the right']
    >;
    show_more_button: Attribute.String;
    date: Attribute.Boolean;
    source: Attribute.String & Attribute.Required;
    base_slug: Attribute.String & Attribute.Required;
    query_params: Attribute.String;
    show_more_button_url: Attribute.String;
    content_filter: Attribute.Component<'elements.content-filter-option', true>;
    advanced_settings: Attribute.JSON;
    show_filter: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    locale: Attribute.String;
    fallback_page: Attribute.Relation<
      'blocks.posts',
      'oneToOne',
      'api::page.page'
    >;
    description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'custom';
        }
      >;
    background: Attribute.Enumeration<
      ['Transparent', 'White', 'Light grey', 'Dark', 'Primary', 'Secondary']
    > &
      Attribute.DefaultTo<'Transparent'>;
    width: Attribute.String;
    columns: Attribute.Integer;
    title_display: Attribute.Enumeration<['h1', 'h2', 'h3', 'hidden']> &
      Attribute.DefaultTo<'h2'>;
  };
}

export interface BlocksQuote extends Schema.Component {
  collectionName: 'components_blocks_quotes';
  info: {
    displayName: 'Quote';
    description: '';
    icon: 'quote';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    background: Attribute.Enumeration<
      ['Transparent', 'White', 'Light grey', 'Dark', 'Primary', 'Secondary']
    > &
      Attribute.DefaultTo<'Transparent'>;
    width: Attribute.String;
    title_display: Attribute.Enumeration<['h1', 'h2', 'h3', 'hidden']> &
      Attribute.DefaultTo<'h2'>;
    description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'custom';
        }
      >;
  };
}

export interface BlocksSlideshow extends Schema.Component {
  collectionName: 'components_blocks_slideshows';
  info: {
    displayName: 'Slideshow';
    description: '';
    icon: 'slideshow';
  };
  attributes: {
    slides: Attribute.Component<'elements.slide', true>;
    title: Attribute.String & Attribute.Required;
    background: Attribute.Enumeration<
      ['Transparent', 'White', 'Light grey', 'Dark', 'Primary', 'Secondary']
    > &
      Attribute.DefaultTo<'Transparent'>;
    width: Attribute.String;
    title_display: Attribute.Enumeration<['h1', 'h2', 'h3', 'hidden']> &
      Attribute.DefaultTo<'h2'>;
  };
}

export interface BlocksSubmenuMega extends Schema.Component {
  collectionName: 'components_blocks_mega_submenu';
  info: {
    displayName: 'Mega submenu';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    path: Attribute.String;
    target: Attribute.Enumeration<['self', 'blank']> &
      Attribute.DefaultTo<'self'>;
    columns: Attribute.Component<'elements.mega-submenu-columns', true>;
  };
}

export interface BlocksSubmenuTree extends Schema.Component {
  collectionName: 'components_blocks_tree_submenu';
  info: {
    displayName: 'Tree submenu';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    path: Attribute.String;
    target: Attribute.Enumeration<['self', 'blank']> &
      Attribute.DefaultTo<'self'>;
    tree: Attribute.Component<'elements.tree', true>;
  };
}

export interface BlocksTable extends Schema.Component {
  collectionName: 'components_blocks_tables';
  info: {
    displayName: 'table';
    icon: 'apps';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    table_params: Attribute.Component<'elements.table-params'> &
      Attribute.Required;
    table_columns: Attribute.Component<'elements.table-header-columns', true>;
    table_rows_groups: Attribute.Component<'elements.table-rows-group', true>;
    background: Attribute.Enumeration<
      ['Transparent', 'White', 'Light grey', 'Dark', 'Primary', 'Secondary']
    > &
      Attribute.DefaultTo<'Transparent'>;
    width: Attribute.String;
    title_display: Attribute.Enumeration<['h1', 'h2', 'h3', 'hidden']> &
      Attribute.DefaultTo<'h2'>;
  };
}

export interface BlocksTeam extends Schema.Component {
  collectionName: 'components_blocks_teams';
  info: {
    displayName: 'Team';
    icon: 'user';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'custom';
        }
      >;
    members: Attribute.Component<'elements.member', true>;
    background: Attribute.Enumeration<
      ['Transparent', 'White', 'Light grey', 'Dark', 'Primary', 'Secondary']
    > &
      Attribute.DefaultTo<'Transparent'>;
    width: Attribute.String;
    columns: Attribute.Integer;
    title_display: Attribute.Enumeration<['h1', 'h2', 'h3', 'hidden']> &
      Attribute.DefaultTo<'h2'>;
  };
}

export interface BlocksTestimonials extends Schema.Component {
  collectionName: 'components_blocks_testimonials';
  info: {
    displayName: 'Testimonials';
    description: '';
    icon: 'heart';
  };
  attributes: {
    testimonials: Attribute.Component<'elements.testimonial', true>;
    title: Attribute.String & Attribute.Required;
    background: Attribute.Enumeration<
      ['Transparent', 'White', 'Light grey', 'Dark', 'Primary', 'Secondary']
    > &
      Attribute.DefaultTo<'Transparent'>;
    width: Attribute.String;
    title_display: Attribute.Enumeration<['h1', 'h2', 'h3', 'hidden']> &
      Attribute.DefaultTo<'h2'>;
  };
}

export interface BlocksTextAndImage extends Schema.Component {
  collectionName: 'components_blocks_text_and_images';
  info: {
    displayName: 'Text & Image';
    description: '';
    icon: 'write';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    title_display: Attribute.Enumeration<['h1', 'h2', 'h3', 'hidden']> &
      Attribute.DefaultTo<'h2'>;
    image: Attribute.Media;
    image_width: Attribute.String;
    buttons: Attribute.Component<'elements.button', true>;
    description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'custom';
        }
      >;
    template: Attribute.Enumeration<
      [
        'ImageLeft',
        'ImageRight',
        'ImageLeftBelowTitle',
        'ImageRightBelowTitle',
        'ImageAboveTitle',
        'ImageBelowTitle',
        'ImageBelowDescription',
        'Dark decorated cube'
      ]
    > &
      Attribute.DefaultTo<'ImageLeft'>;
    background: Attribute.Enumeration<
      [
        'Transparent',
        'White',
        'Light grey',
        'Dark',
        'Dark Blurred',
        'Primary',
        'Secondary'
      ]
    > &
      Attribute.DefaultTo<'Transparent'>;
    width: Attribute.String;
    advanced_settings: Attribute.JSON;
  };
}

export interface BlocksTextAndVideo extends Schema.Component {
  collectionName: 'components_blocks_text_and_video';
  info: {
    displayName: 'Text & Video';
    description: '';
    icon: 'write';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    title_display: Attribute.Enumeration<['h1', 'h2', 'h3', 'hidden']> &
      Attribute.DefaultTo<'h2'>;
    youtube_id: Attribute.String & Attribute.Required;
    buttons: Attribute.Component<'elements.button', true>;
    description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'custom';
        }
      >;
    template: Attribute.Enumeration<
      [
        'VideoLeft',
        'VideoRight',
        'VideoLeftBelowTitle',
        'VideoRightBelowTitle',
        'VideoAboveTitle',
        'VideoBelowTitle',
        'VideoBelowDescription'
      ]
    > &
      Attribute.DefaultTo<'VideoLeft'>;
    background: Attribute.Enumeration<
      ['Transparent', 'White', 'Light grey', 'Dark', 'Primary', 'Secondary']
    > &
      Attribute.DefaultTo<'Transparent'>;
    width: Attribute.String;
    video_width: Attribute.String;
  };
}

export interface BlocksText extends Schema.Component {
  collectionName: 'components_blocks_texts';
  info: {
    displayName: 'Text';
    icon: 'feather';
    description: '';
  };
  attributes: {
    description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'custom';
        }
      >;
    background: Attribute.Enumeration<
      ['Transparent', 'White', 'Light grey', 'Dark', 'Primary', 'Secondary']
    > &
      Attribute.DefaultTo<'Transparent'>;
    width: Attribute.String;
  };
}

export interface BlocksVideoGallery extends Schema.Component {
  collectionName: 'components_blocks_video_galleries';
  info: {
    displayName: 'Video gallery';
    icon: 'play';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'custom';
        }
      >;
    videos: Attribute.Component<'elements.video-gallery-item', true>;
    background: Attribute.Enumeration<
      ['Transparent', 'White', 'Light grey', 'Dark', 'Primary', 'Secondary']
    > &
      Attribute.DefaultTo<'Transparent'>;
    width: Attribute.String;
    columns: Attribute.Integer;
    title_display: Attribute.Enumeration<['h1', 'h2', 'h3', 'hidden']> &
      Attribute.DefaultTo<'h2'>;
  };
}

export interface ElementsButtonWithoutLink extends Schema.Component {
  collectionName: 'components_elements_button_no_link';
  info: {
    displayName: 'Button without link';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    design: Attribute.Enumeration<
      [
        'primary',
        'secondary',
        'info',
        'success',
        'danger',
        'warning',
        'primary outline',
        'secondary outline',
        'info outline',
        'success outline',
        'danger outline',
        'warning outline',
        'link primary',
        'link secondary',
        'link info',
        'link success',
        'link danger',
        'link warning'
      ]
    >;
    size: Attribute.Enumeration<['small', 'normal', 'middle', 'large']>;
    align: Attribute.Enumeration<['left', 'center', 'right']>;
    popup_link: Attribute.Relation<
      'elements.button-without-link',
      'oneToOne',
      'api::content-block.content-block'
    >;
  };
}

export interface ElementsButton extends Schema.Component {
  collectionName: 'components_elements_buttons';
  info: {
    displayName: 'Button';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    design: Attribute.Enumeration<
      [
        'primary',
        'secondary',
        'info',
        'success',
        'danger',
        'warning',
        'primary outline',
        'secondary outline',
        'info outline',
        'success outline',
        'danger outline',
        'warning outline',
        'link primary',
        'link secondary',
        'link info',
        'link success',
        'link danger',
        'link warning'
      ]
    >;
    link: Attribute.String;
    target: Attribute.Enumeration<['new-tab', 'anchor']>;
    size: Attribute.Enumeration<['small', 'normal', 'middle', 'large']>;
    popup_link: Attribute.Relation<
      'elements.button',
      'oneToOne',
      'api::content-block.content-block'
    >;
  };
}

export interface ElementsContentFilterOption extends Schema.Component {
  collectionName: 'components_elements_content_filter_options';
  info: {
    displayName: 'Content filter option';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    advanced_settings: Attribute.JSON;
    type: Attribute.Enumeration<['text', 'select']> & Attribute.Required;
    field: Attribute.String & Attribute.Required;
    placeholder: Attribute.String;
  };
}

export interface ElementsDescriptionListItem extends Schema.Component {
  collectionName: 'components_elements_description_list_items';
  info: {
    displayName: 'Description list item';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'custom';
        }
      >;
    title: Attribute.String;
  };
}

export interface ElementsFooterDescription extends Schema.Component {
  collectionName: 'components_elements_footer_descriptions';
  info: {
    displayName: 'Footer description';
    icon: 'feather';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'custom';
        }
      >;
  };
}

export interface ElementsFooterMenu extends Schema.Component {
  collectionName: 'components_elements_footer_menus';
  info: {
    displayName: 'Footer menu';
    icon: 'bulletList';
  };
  attributes: {
    title: Attribute.String;
    tree: Attribute.Component<'elements.tree', true>;
  };
}

export interface ElementsFormRow extends Schema.Component {
  collectionName: 'components_elements_form_rows';
  info: {
    displayName: 'Form row';
    description: '';
  };
  attributes: {
    type: Attribute.Enumeration<
      [
        'text',
        'textarea',
        'tel',
        'email',
        'number',
        'checkbox',
        'radio',
        'date',
        'datetime-local',
        'time',
        'file',
        'title'
      ]
    > &
      Attribute.Required;
    placeholder: Attribute.String;
    name: Attribute.String;
    label: Attribute.String;
    mandatory: Attribute.Boolean;
    field_description: Attribute.String;
    default_value: Attribute.String;
  };
}

export interface ElementsHiddenFields extends Schema.Component {
  collectionName: 'components_elements_hidden_fields';
  info: {
    displayName: 'hidden_field';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    value: Attribute.String;
  };
}

export interface ElementsIconBox extends Schema.Component {
  collectionName: 'components_elements_icon_box';
  info: {
    displayName: 'Icon box';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    icon: Attribute.String;
    link_type: Attribute.Enumeration<['none', 'button', 'title']>;
    link: Attribute.String;
    link_title: Attribute.String;
    description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'custom';
        }
      >;
  };
}

export interface ElementsImageBox extends Schema.Component {
  collectionName: 'components_elements_image_boxes';
  info: {
    displayName: 'Image box';
    icon: 'landscape';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    link: Attribute.String;
    image: Attribute.Media;
    open_in_new_tab: Attribute.Boolean;
    description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'custom';
        }
      >;
    helper_icon: Attribute.Media;
    background_color: Attribute.String;
  };
}

export interface ElementsListItem extends Schema.Component {
  collectionName: 'components_elements_list_items';
  info: {
    displayName: 'List item';
    icon: 'bulletList';
  };
  attributes: {
    background_color: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    margin: Attribute.String;
    margin_unit: Attribute.Enumeration<['px', 'percent', 'em', 'rem', 'vw']> &
      Attribute.DefaultTo<'px'>;
    padding: Attribute.String;
    padding_unit: Attribute.Enumeration<['px', 'percent', 'em', 'rem', 'vw']> &
      Attribute.DefaultTo<'px'>;
    border_radius: Attribute.Integer;
    border_width: Attribute.Integer;
    border_color: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface ElementsLogo extends Schema.Component {
  collectionName: 'components_elements_logos';
  info: {
    displayName: 'Logo';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
    link: Attribute.String;
    title: Attribute.String;
  };
}

export interface ElementsMegaSubmenuColumns extends Schema.Component {
  collectionName: 'components_elements_megamenu_columns';
  info: {
    displayName: 'Megamenu columns';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    title_url: Attribute.String;
    column_source: Attribute.String;
    hide_title: Attribute.Boolean;
    query_params: Attribute.String;
    column_type: Attribute.Enumeration<['tree', 'query']> &
      Attribute.Required &
      Attribute.DefaultTo<'tree'>;
    tree: Attribute.Component<'elements.tree', true>;
  };
}

export interface ElementsMember extends Schema.Component {
  collectionName: 'components_elements_members';
  info: {
    displayName: 'Member';
    icon: 'user';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    email: Attribute.Email;
    phone: Attribute.String;
    social_links: Attribute.Component<'elements.social-link', true>;
    image: Attribute.Media;
    position: Attribute.String;
    description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'custom';
        }
      >;
  };
}

export interface ElementsNumbersItem extends Schema.Component {
  collectionName: 'components_elements_numbers_items';
  info: {
    displayName: 'Numbers list item';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    number: Attribute.String;
    title: Attribute.String;
    icon: Attribute.String;
  };
}

export interface ElementsSlide extends Schema.Component {
  collectionName: 'components_elements_slides';
  info: {
    displayName: 'Slide';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media;
    link: Attribute.String;
    link_type: Attribute.Enumeration<['button', 'text', 'slide']>;
    link_text: Attribute.String;
  };
}

export interface ElementsSocialLink extends Schema.Component {
  collectionName: 'components_elements_social_link';
  info: {
    displayName: 'Social link';
    icon: 'emotionHappy';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    icon: Attribute.String;
    url: Attribute.String;
    color: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface ElementsSocialMenu extends Schema.Component {
  collectionName: 'components_elements_social_menus';
  info: {
    displayName: 'Social menu';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    social_links: Attribute.Component<'elements.social-link', true>;
    column: Attribute.Integer;
  };
}

export interface ElementsTableHeaderColumns extends Schema.Component {
  collectionName: 'components_elements_table_header_columns';
  info: {
    displayName: 'Table column';
    icon: 'apps';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    button_name: Attribute.String;
    text_before_price: Attribute.String;
    subtitle: Attribute.String;
    text_after_price: Attribute.String;
    price: Attribute.String;
    old_price: Attribute.String;
    button_url: Attribute.Relation<
      'elements.table-header-columns',
      'oneToOne',
      'api::page.page'
    >;
  };
}

export interface ElementsTableParams extends Schema.Component {
  collectionName: 'components_elements_table_settings';
  info: {
    displayName: 'Table params';
    icon: 'apps';
    description: '';
  };
  attributes: {
    currency: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'\u20AC'>;
    button_position: Attribute.Enumeration<['top', 'bottom']> &
      Attribute.DefaultTo<'bottom'>;
    price_position: Attribute.Enumeration<['top', 'bottom']> &
      Attribute.DefaultTo<'bottom'>;
    featured_column: Attribute.Integer;
  };
}

export interface ElementsTablePriceRow extends Schema.Component {
  collectionName: 'components_elements_table_price_rows';
  info: {
    displayName: 'Table price row';
    icon: 'apps';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    row_title_caption: Attribute.String;
  };
}

export interface ElementsTableRow extends Schema.Component {
  collectionName: 'components_elements_table_rows';
  info: {
    displayName: 'Table row';
    icon: 'apps';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    column_values: Attribute.String;
  };
}

export interface ElementsTableRowsGroup extends Schema.Component {
  collectionName: 'components_elements_table_rows_groups';
  info: {
    displayName: 'Table rows group';
    icon: 'apps';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    table_rows: Attribute.Component<'elements.table-row', true>;
    hide_group_title: Attribute.Boolean;
    subtitle: Attribute.String;
    price: Attribute.String;
    text_before_price: Attribute.String;
    text_after_price: Attribute.String;
    old_price: Attribute.String;
    price_position: Attribute.Enumeration<
      ['in title row', 'above rows', 'below rows']
    >;
  };
}

export interface ElementsTestimonial extends Schema.Component {
  collectionName: 'components_elements_testimonials';
  info: {
    displayName: 'Testimonial';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
    description: Attribute.Text;
    link: Attribute.String;
    signature: Attribute.String;
    company_name: Attribute.String;
    position: Attribute.String;
  };
}

export interface ElementsTreeLevelOne extends Schema.Component {
  collectionName: 'components_elements_sub_children';
  info: {
    displayName: 'Tree level one';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    path: Attribute.String;
    target: Attribute.Enumeration<['self', 'blank']> &
      Attribute.DefaultTo<'self'>;
    level_two: Attribute.Component<'elements.tree-level-two', true>;
  };
}

export interface ElementsTreeLevelTwo extends Schema.Component {
  collectionName: 'components_elements_tree_level_twos';
  info: {
    displayName: 'Tree level two';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    path: Attribute.String;
    target: Attribute.Enumeration<['self', 'blank']> &
      Attribute.DefaultTo<'self'>;
  };
}

export interface ElementsTree extends Schema.Component {
  collectionName: 'components_elements_menu_children';
  info: {
    displayName: 'Tree';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    path: Attribute.String;
    level_one: Attribute.Component<'elements.tree-level-one', true>;
    target: Attribute.Enumeration<['self', 'blank']> &
      Attribute.DefaultTo<'self'>;
  };
}

export interface ElementsVideoGalleryItem extends Schema.Component {
  collectionName: 'components_elements_video_gallery_items';
  info: {
    displayName: 'Video gallery item';
    icon: 'play';
  };
  attributes: {
    title: Attribute.String;
    youtube_id: Attribute.String;
    description: Attribute.Text;
  };
}

export interface SettingsBlocksBanner extends Schema.Component {
  collectionName: 'components_settings_blocks_banners';
  info: {
    displayName: 'banner';
    description: '';
  };
  attributes: {
    viewport: Attribute.Enumeration<['desktop', 'tablet', 'mobile']> &
      Attribute.Required &
      Attribute.DefaultTo<'desktop'>;
    title: Attribute.Component<'settings-fields.text'>;
    description: Attribute.Component<'settings-fields.text'>;
    buttons: Attribute.Component<'settings-fields.buttons-holder'>;
    image: Attribute.Component<'settings-fields.image'>;
    min_height: Attribute.Float;
    min_height_unit: Attribute.Enumeration<
      ['px', 'percent', 'em', 'rem', 'vh']
    >;
    content_vertical_align: Attribute.Enumeration<['top', 'middle', 'bottom']>;
  };
}

export interface SettingsBlocksBox extends Schema.Component {
  collectionName: 'components_settings_boxes';
  info: {
    displayName: 'Image boxes';
    icon: 'apps';
    description: '';
  };
  attributes: {
    viewport: Attribute.Enumeration<['desktop', 'tablet', 'mobile']> &
      Attribute.Required &
      Attribute.DefaultTo<'desktop'>;
    title: Attribute.Component<'settings-fields.text'>;
    description: Attribute.Component<'settings-fields.text'>;
    image_boxes: Attribute.Component<'settings-list-item.image-boxes-list'>;
  };
}

export interface SettingsBlocksButtonGroup extends Schema.Component {
  collectionName: 'components_settings_blocks_button_groups';
  info: {
    displayName: 'Button group';
    icon: 'apps';
    description: '';
  };
  attributes: {
    viewport: Attribute.Enumeration<['desktop', 'tablet', 'mobile']> &
      Attribute.Required &
      Attribute.DefaultTo<'desktop'>;
    title: Attribute.Component<'settings-fields.text'>;
    description: Attribute.Component<'settings-fields.text'>;
  };
}

export interface SettingsBlocksContactForm extends Schema.Component {
  collectionName: 'components_settings_blocks_contact_forms';
  info: {
    displayName: 'Contact form';
    description: '';
  };
  attributes: {
    viewport: Attribute.Enumeration<['desktop', 'tablet', 'menu']> &
      Attribute.Required &
      Attribute.DefaultTo<'desktop'>;
    description_position: Attribute.Enumeration<['left', 'center', 'right']>;
    title: Attribute.Component<'settings-fields.text'>;
    description: Attribute.Component<'settings-fields.text'>;
    form: Attribute.Component<'settings-blocks.form'>;
  };
}

export interface SettingsBlocksDescriptionList extends Schema.Component {
  collectionName: 'components_settings_blocks_desc_lists';
  info: {
    displayName: 'Description list';
    description: '';
  };
  attributes: {
    viewport: Attribute.Enumeration<['desktop', 'tablet', 'mobile']> &
      Attribute.Required &
      Attribute.DefaultTo<'desktop'>;
    title: Attribute.Component<'settings-fields.text'>;
    descriptions: Attribute.Component<'settings-list-item.description-list'>;
  };
}

export interface SettingsBlocksDescription extends Schema.Component {
  collectionName: 'components_settings_blocks_descriptions';
  info: {
    displayName: 'description';
    icon: 'apps';
  };
  attributes: {
    viewport: Attribute.Enumeration<['desktop', 'tablet', 'mobile']> &
      Attribute.Required &
      Attribute.DefaultTo<'desktop'>;
    title: Attribute.Component<'settings-fields.text'>;
    description: Attribute.Component<'settings-fields.text'>;
  };
}

export interface SettingsBlocksForm extends Schema.Component {
  collectionName: 'components_settings_blocks_forms';
  info: {
    displayName: 'Form';
    icon: 'check';
    description: '';
  };
  attributes: {
    field_background: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    field_border_width: Attribute.Float;
    field_border_color: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    field_border_radius: Attribute.Float & Attribute.DefaultTo<5>;
    field_border_radius_unit: Attribute.Enumeration<['px', 'em', 'rem']> &
      Attribute.DefaultTo<'px'>;
    label_text_size: Attribute.Float;
    label_text_size_unit: Attribute.Enumeration<['px', 'em', 'rem']>;
    label_color: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    asterisk_color: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    row_gap: Attribute.Integer & Attribute.DefaultTo<4>;
    column_gap: Attribute.Integer & Attribute.DefaultTo<4>;
    columns: Attribute.Integer & Attribute.DefaultTo<1>;
    submit_button_align: Attribute.Enumeration<['left', 'center', 'right']> &
      Attribute.DefaultTo<'left'>;
    submit_button_size: Attribute.Enumeration<['small', 'normal', 'big']> &
      Attribute.DefaultTo<'normal'>;
    submit_button_color: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface SettingsBlocksGallerySettings extends Schema.Component {
  collectionName: 'components_style_gallery_settings';
  info: {
    displayName: 'gallery';
    icon: 'apps';
    description: '';
  };
  attributes: {
    viewport: Attribute.Enumeration<['desktop', 'tablet', 'mobile']> &
      Attribute.Required &
      Attribute.DefaultTo<'desktop'>;
    title: Attribute.Component<'settings-fields.text'>;
    description: Attribute.Component<'settings-fields.text'>;
  };
}

export interface SettingsBlocksIconBoxes extends Schema.Component {
  collectionName: 'components_settings_icon_boxes';
  info: {
    displayName: 'Icon boxes';
    icon: 'apps';
    description: '';
  };
  attributes: {
    viewport: Attribute.Enumeration<['desktop', 'tablet', 'mobile']> &
      Attribute.Required &
      Attribute.DefaultTo<'desktop'>;
    title: Attribute.Component<'settings-fields.text'>;
    description: Attribute.Component<'settings-fields.text'>;
    icon_boxes: Attribute.Component<'settings-list-item.icon-boxes-list'>;
  };
}

export interface SettingsBlocksImage extends Schema.Component {
  collectionName: 'components_settings_blocks_image';
  info: {
    displayName: 'Featured image';
  };
  attributes: {
    viewport: Attribute.Enumeration<['desktop', 'tablet', 'mobile']> &
      Attribute.Required &
      Attribute.DefaultTo<'desktop'>;
    image: Attribute.Component<'settings-fields.image'>;
  };
}

export interface SettingsBlocksLogoGroup extends Schema.Component {
  collectionName: 'components_settings_blocks_logo_groups';
  info: {
    displayName: 'Logo group';
    description: '';
  };
  attributes: {
    viewport: Attribute.Enumeration<['desktop', 'tablet', 'mobile']> &
      Attribute.Required &
      Attribute.DefaultTo<'desktop'>;
    title: Attribute.Component<'settings-fields.text'>;
    description: Attribute.Component<'settings-fields.text'>;
  };
}

export interface SettingsBlocksPosts extends Schema.Component {
  collectionName: 'components_settings_blocks_posts';
  info: {
    displayName: 'posts';
  };
  attributes: {
    viewport: Attribute.Enumeration<['desktop', 'tablet', 'mobile']> &
      Attribute.Required &
      Attribute.DefaultTo<'desktop'>;
    title: Attribute.Component<'settings-fields.text'>;
    description: Attribute.Component<'settings-fields.text'>;
  };
}

export interface SettingsBlocksQuote extends Schema.Component {
  collectionName: 'components_settings_blocks_quotes';
  info: {
    displayName: 'Quote';
    description: '';
  };
  attributes: {
    viewport: Attribute.Enumeration<['desktop', 'tablet', 'mobile']> &
      Attribute.Required &
      Attribute.DefaultTo<'desktop'>;
    title: Attribute.Component<'settings-fields.text'>;
    description: Attribute.Component<'settings-fields.text'>;
  };
}

export interface SettingsBlocksRedirect extends Schema.Component {
  collectionName: 'components_settings_blocks_redirects';
  info: {
    displayName: 'redirect';
  };
  attributes: {
    old: Attribute.String;
    new: Attribute.String;
    type: Attribute.Integer;
  };
}

export interface SettingsBlocksSlide extends Schema.Component {
  collectionName: 'components_settings_blocks_slides';
  info: {
    displayName: 'slide';
    description: '';
  };
  attributes: {
    title_settings: Attribute.Component<'settings-fields.text'>;
    description_settings: Attribute.Component<'settings-fields.text'>;
  };
}

export interface SettingsBlocksSlideshow extends Schema.Component {
  collectionName: 'components_settings_blocks_slideshows';
  info: {
    displayName: 'slideshow';
    description: '';
  };
  attributes: {
    viewport: Attribute.Enumeration<['desktop', 'tablet', 'mobile']> &
      Attribute.Required &
      Attribute.DefaultTo<'desktop'>;
    title_settings: Attribute.Component<'settings-fields.text'>;
    slideshow_speed: Attribute.Integer;
    slideshow_animation: Attribute.Enumeration<['slide-horizontal', 'fade']>;
    slideshow_arrows: Attribute.String;
    slideshow_navigation: Attribute.String;
    slideshow_arrows_color: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    slideshow_navigation_active_color: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    slideshow_navigation_inactive_color: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    slide_settings: Attribute.Component<'settings-blocks.slide'>;
  };
}

export interface SettingsBlocksTable extends Schema.Component {
  collectionName: 'components_settings_blocks_tables';
  info: {
    displayName: 'table';
    description: '';
  };
  attributes: {
    viewport: Attribute.Enumeration<['desktop', 'tablet', 'mobile']> &
      Attribute.Required &
      Attribute.DefaultTo<'desktop'>;
    title: Attribute.Component<'settings-fields.text'>;
  };
}

export interface SettingsBlocksTeam extends Schema.Component {
  collectionName: 'components_settings_blocks_teams';
  info: {
    displayName: 'Team';
    icon: 'user';
  };
  attributes: {
    viewport: Attribute.Enumeration<['desktop', 'tablet', 'mobile']> &
      Attribute.Required &
      Attribute.DefaultTo<'desktop'>;
    title: Attribute.Component<'settings-fields.text'>;
    description: Attribute.Component<'settings-fields.text'>;
    members: Attribute.Component<'settings-list-item.member'>;
  };
}

export interface SettingsBlocksTestimonials extends Schema.Component {
  collectionName: 'components_settings_blocks_testimonials';
  info: {
    displayName: 'Testimonials';
    description: '';
  };
  attributes: {
    viewport: Attribute.Enumeration<['desktop', 'tablet', 'mobile']> &
      Attribute.Required &
      Attribute.DefaultTo<'desktop'>;
    title: Attribute.Component<'settings-fields.text'>;
    image: Attribute.Component<'settings-fields.image'>;
    description: Attribute.Component<'settings-fields.text'>;
  };
}

export interface SettingsBlocksTextAndImage extends Schema.Component {
  collectionName: 'components_settings_blocks_text_and_images';
  info: {
    displayName: 'Text & Image';
  };
  attributes: {
    viewport: Attribute.Enumeration<['desktop', 'tablet', 'mobile']> &
      Attribute.Required &
      Attribute.DefaultTo<'desktop'>;
    title: Attribute.Component<'settings-fields.text'>;
    description: Attribute.Component<'settings-fields.text'>;
    image: Attribute.Component<'settings-fields.image'>;
    buttons: Attribute.Component<'settings-fields.buttons-holder'>;
  };
}

export interface SettingsBlocksText extends Schema.Component {
  collectionName: 'components_settings_blocks_texts';
  info: {
    displayName: 'Text';
  };
  attributes: {
    viewport: Attribute.Enumeration<['desktop', 'tablet', 'mobile']> &
      Attribute.Required &
      Attribute.DefaultTo<'desktop'>;
    description: Attribute.Component<'settings-fields.text'>;
  };
}

export interface SettingsBlocksVideoList extends Schema.Component {
  collectionName: 'components_settings_blocks_video_list';
  info: {
    displayName: 'Video list';
    description: '';
  };
  attributes: {
    viewport: Attribute.Enumeration<['desktop', 'tablet', 'mobile']> &
      Attribute.Required &
      Attribute.DefaultTo<'desktop'>;
    title: Attribute.Component<'settings-fields.text'>;
    description: Attribute.Component<'settings-fields.text'>;
    videos: Attribute.Component<'settings-list-item.video-item'>;
  };
}

export interface SettingsFieldsButtonHover extends Schema.Component {
  collectionName: 'components_settings_fields_button_hover';
  info: {
    displayName: 'Button hover';
    icon: 'check';
    description: '';
  };
  attributes: {
    text_color: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    background: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    text_decoration: Attribute.Enumeration<['none', 'underline']>;
    font_weight: Attribute.Enumeration<
      [
        'normal',
        'semibold',
        'bold',
        'black',
        'x100',
        'x200',
        'x300',
        'x400',
        'x500',
        'x600',
        'x700',
        'x800',
        'x900'
      ]
    > &
      Attribute.DefaultTo<'normal'>;
    border_color: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface SettingsFieldsButtonNormal extends Schema.Component {
  collectionName: 'components_settings_fields_button_normal';
  info: {
    displayName: 'Button normal';
    icon: 'check';
    description: '';
  };
  attributes: {
    text_color: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    background: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    text_decoration: Attribute.Enumeration<['none', 'underline']>;
    text_transform: Attribute.Enumeration<
      ['none', 'uppercase', 'lowercase', 'capitalize']
    >;
    font_weight: Attribute.Enumeration<
      [
        'normal',
        'semibold',
        'bold',
        'black',
        'x300',
        'x400',
        'x500',
        'x600',
        'x700',
        'x800'
      ]
    > &
      Attribute.DefaultTo<'normal'>;
    margin: Attribute.String;
    margin_unit: Attribute.Enumeration<['px', 'percent', 'em', 'rem', 'vw']> &
      Attribute.DefaultTo<'px'>;
    padding: Attribute.String;
    padding_unit: Attribute.Enumeration<['px', 'percent', 'em', 'rem', 'vw']> &
      Attribute.DefaultTo<'px'>;
    border_radius: Attribute.String;
    border_width: Attribute.Integer;
    border_color: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    width: Attribute.String;
    width_unit: Attribute.Enumeration<['px', 'percent', 'em', 'rem', 'vw']> &
      Attribute.DefaultTo<'px'>;
  };
}

export interface SettingsFieldsButton extends Schema.Component {
  collectionName: 'components_settings_fields_buttons';
  info: {
    displayName: 'Button';
    icon: 'check';
    description: '';
  };
  attributes: {
    normal: Attribute.Component<'settings-fields.button-normal'>;
    hover: Attribute.Component<'settings-fields.button-hover'>;
  };
}

export interface SettingsFieldsButtonsHolder extends Schema.Component {
  collectionName: 'components_settings_fields_buttons_holder';
  info: {
    displayName: 'Buttons';
    icon: 'check';
    description: '';
  };
  attributes: {
    align: Attribute.Enumeration<['left', 'center', 'right']>;
  };
}

export interface SettingsFieldsIcon extends Schema.Component {
  collectionName: 'components_settings_fields_icons';
  info: {
    displayName: 'Icon';
    description: '';
  };
  attributes: {
    color: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    margin: Attribute.String;
    margin_unit: Attribute.Enumeration<['px', 'percent', 'em', 'rem', 'vw']> &
      Attribute.DefaultTo<'px'>;
    border_radius: Attribute.String;
    border_width: Attribute.Integer;
    border_color: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    align: Attribute.Enumeration<['left', 'center', 'right']>;
    width: Attribute.Float;
    width_unit: Attribute.Enumeration<['percent', 'px']> &
      Attribute.DefaultTo<'percent'>;
    padding: Attribute.String;
    padding_unit: Attribute.Enumeration<['px', 'percent', 'em', 'rem', 'vw']>;
  };
}

export interface SettingsFieldsImage extends Schema.Component {
  collectionName: 'components_style_images';
  info: {
    displayName: 'Image';
    icon: 'paint';
    description: '';
  };
  attributes: {
    margin: Attribute.String;
    border_radius: Attribute.String;
    border_width: Attribute.Integer;
    border_color: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    align: Attribute.Enumeration<['left', 'center', 'right']>;
    width_unit: Attribute.Enumeration<['percent', 'px']> &
      Attribute.DefaultTo<'percent'>;
    margin_unit: Attribute.Enumeration<['px', 'percent', 'em', 'rem', 'vw']> &
      Attribute.DefaultTo<'px'>;
    width: Attribute.Float;
    position: Attribute.Enumeration<['top', 'bottom', 'left', 'right']>;
  };
}

export interface SettingsFieldsText extends Schema.Component {
  collectionName: 'components_style_description_settings';
  info: {
    displayName: 'Text';
    icon: 'apps';
    description: '';
  };
  attributes: {
    font_size: Attribute.Float;
    font_size_unit: Attribute.Enumeration<
      ['px', 'percent', 'em', 'rem', 'vw']
    > &
      Attribute.DefaultTo<'px'>;
    color: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    text_align: Attribute.Enumeration<['left', 'center', 'right']>;
    line_height: Attribute.Decimal;
    font_weight: Attribute.Enumeration<
      [
        'normal',
        'semibold',
        'bold',
        'black',
        'x300',
        'x400',
        'x500',
        'x600',
        'x700',
        'x800'
      ]
    > &
      Attribute.DefaultTo<'normal'>;
    margin: Attribute.String;
    margin_unit: Attribute.Enumeration<['px', 'percent', 'em', 'rem', 'vw']> &
      Attribute.DefaultTo<'px'>;
    padding: Attribute.String;
    padding_unit: Attribute.Enumeration<['px', 'percent', 'em', 'rem', 'vw']> &
      Attribute.DefaultTo<'px'>;
    text_transform: Attribute.Enumeration<
      ['none', 'uppercase', 'lowercase', 'capitalize']
    >;
  };
}

export interface SettingsLayoutContainer extends Schema.Component {
  collectionName: 'components_settings_fields_containers';
  info: {
    displayName: 'Container';
    icon: 'stack';
    description: '';
  };
  attributes: {
    layout: Attribute.Enumeration<['boxed', 'full-width']> &
      Attribute.DefaultTo<'boxed'>;
    background_color: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    background_gradient_start: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    background_gradient_end: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    background_image: Attribute.Media;
    background_image_size: Attribute.Enumeration<['cover', 'contain']>;
    background_image_position: Attribute.Enumeration<
      [
        'left top',
        'center top',
        'right top',
        'left center',
        'center center',
        'right center',
        'left bottom',
        'center bottom',
        'right bottom'
      ]
    >;
    background_gradient_direction: Attribute.Enumeration<
      ['vertical', 'horizontal', 'diagonal-left', 'diagonal-right']
    >;
    margin: Attribute.String;
    margin_unit: Attribute.Enumeration<['px', 'percent', 'em', 'rem', 'vw']> &
      Attribute.DefaultTo<'px'>;
    background_opacity: Attribute.Float;
    padding: Attribute.String;
    padding_unit: Attribute.Enumeration<['px', 'percent', 'em', 'rem', 'vw']> &
      Attribute.DefaultTo<'px'>;
  };
}

export interface SettingsLayoutLayoutSettings extends Schema.Component {
  collectionName: 'components_settings_layout_layout_settings';
  info: {
    displayName: 'Layout settings';
    icon: 'apps';
    description: '';
  };
  attributes: {
    viewport: Attribute.Enumeration<['desktop', 'tablet', 'mobile']> &
      Attribute.Required &
      Attribute.DefaultTo<'desktop'>;
    wrapper: Attribute.Component<'settings-layout.wrapper'>;
    container: Attribute.Component<'settings-layout.container'>;
    hide_title: Attribute.Boolean;
  };
}

export interface SettingsLayoutList extends Schema.Component {
  collectionName: 'components_elements_lists';
  info: {
    displayName: 'List layout';
    icon: 'bulletList';
  };
  attributes: {
    viewport: Attribute.Enumeration<['desktop', 'tablet', 'mobile']> &
      Attribute.Required &
      Attribute.DefaultTo<'desktop'>;
    columns: Attribute.Integer;
    columns_gap: Attribute.Float;
    rows_gap: Attribute.Float;
    columns_gap_unit: Attribute.Enumeration<
      ['px', 'percent', 'em', 'rem', 'vh', 'vw']
    >;
    rows_gap_unit: Attribute.Enumeration<
      ['px', 'percent', 'em', 'rem', 'vh', 'vw']
    >;
    list_item: Attribute.Component<'elements.list-item'>;
  };
}

export interface SettingsLayoutWrapper extends Schema.Component {
  collectionName: 'components_style_block_styles';
  info: {
    displayName: 'Wrapper';
    icon: 'cog';
    description: '';
  };
  attributes: {
    background_color: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    background_gradient_start: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    background_gradient_end: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    background_image: Attribute.Media;
    background_image_size: Attribute.Enumeration<['cover', 'contain']>;
    background_image_position: Attribute.Enumeration<
      [
        'left top',
        'center top',
        'right top',
        'left center',
        'center center',
        'right center',
        'left bottom',
        'center bottom',
        'right bottom'
      ]
    >;
    background_gradient_direction: Attribute.Enumeration<
      ['vertical', 'horizontal', 'diagonal-left', 'diagonal-right']
    >;
    margin: Attribute.String;
    margin_unit: Attribute.Enumeration<['px', 'percent', 'em', 'rem', 'vw']> &
      Attribute.DefaultTo<'px'>;
    background_opacity: Attribute.Float;
    padding: Attribute.String;
    padding_unit: Attribute.Enumeration<['px', 'percent', 'em', 'rem', 'vw']> &
      Attribute.DefaultTo<'px'>;
  };
}

export interface SettingsListItemDescriptionList extends Schema.Component {
  collectionName: 'settings_list_item_description_lists';
  info: {
    displayName: 'Description list';
  };
  attributes: {
    description: Attribute.Component<'settings-fields.text'>;
  };
}

export interface SettingsListItemIconBoxesList extends Schema.Component {
  collectionName: 'settings_list_item_icon_boxes';
  info: {
    displayName: 'Icon boxes';
  };
  attributes: {
    description: Attribute.Component<'settings-fields.text'>;
    title: Attribute.Component<'settings-fields.text'>;
    subtitle: Attribute.Component<'settings-fields.text'>;
    icon: Attribute.Component<'settings-fields.icon'>;
    button: Attribute.Component<'settings-fields.button'>;
  };
}

export interface SettingsListItemImageBoxesList extends Schema.Component {
  collectionName: 'settings_list_item_image_boxes';
  info: {
    displayName: 'Image boxes';
  };
  attributes: {
    title: Attribute.Component<'settings-fields.text'>;
    description: Attribute.Component<'settings-fields.text'>;
    image: Attribute.Component<'settings-fields.image'>;
  };
}

export interface SettingsListItemMember extends Schema.Component {
  collectionName: 'components_settings_blocks_members';
  info: {
    displayName: 'Member';
    icon: 'user';
    description: '';
  };
  attributes: {
    title: Attribute.Component<'settings-fields.text'>;
    position: Attribute.Component<'settings-fields.text'>;
    description: Attribute.Component<'settings-fields.text'>;
    social_icon: Attribute.Component<'settings-fields.icon'>;
    image: Attribute.Component<'settings-fields.image'>;
  };
}

export interface SettingsListItemVideoItem extends Schema.Component {
  collectionName: 'settings_list_video_items';
  info: {
    displayName: 'Video item';
    icon: 'slideshow';
  };
  attributes: {
    title: Attribute.Component<'settings-fields.text'>;
    description: Attribute.Component<'settings-fields.text'>;
  };
}

export interface SettingsRedirect extends Schema.Component {
  collectionName: 'components_settings_redirects';
  info: {
    displayName: 'redirect';
    description: '';
  };
  attributes: {
    old: Attribute.String & Attribute.Required;
    new: Attribute.String & Attribute.Required;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
    description: '';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']>;
    title: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.accordion': BlocksAccordion;
      'blocks.banner': BlocksBanner;
      'blocks.button-group': BlocksButtonGroup;
      'blocks.code': BlocksCode;
      'blocks.contact-form': BlocksContactForm;
      'blocks.content-block': BlocksContentBlock;
      'blocks.cookie-scripts': BlocksCookieScripts;
      'blocks.data-set': BlocksDataSet;
      'blocks.description-list': BlocksDescriptionList;
      'blocks.description': BlocksDescription;
      'blocks.gallery': BlocksGallery;
      'blocks.icon-boxes': BlocksIconBoxes;
      'blocks.image-and-posts-list': BlocksImageAndPostsList;
      'blocks.image-boxes': BlocksImageBoxes;
      'blocks.image': BlocksImage;
      'blocks.logo-group': BlocksLogoGroup;
      'blocks.numbers': BlocksNumbers;
      'blocks.posts-swiper': BlocksPostsSwiper;
      'blocks.posts': BlocksPosts;
      'blocks.quote': BlocksQuote;
      'blocks.slideshow': BlocksSlideshow;
      'blocks.submenu-mega': BlocksSubmenuMega;
      'blocks.submenu-tree': BlocksSubmenuTree;
      'blocks.table': BlocksTable;
      'blocks.team': BlocksTeam;
      'blocks.testimonials': BlocksTestimonials;
      'blocks.text-and-image': BlocksTextAndImage;
      'blocks.text-and-video': BlocksTextAndVideo;
      'blocks.text': BlocksText;
      'blocks.video-gallery': BlocksVideoGallery;
      'elements.button-without-link': ElementsButtonWithoutLink;
      'elements.button': ElementsButton;
      'elements.content-filter-option': ElementsContentFilterOption;
      'elements.description-list-item': ElementsDescriptionListItem;
      'elements.footer-description': ElementsFooterDescription;
      'elements.footer-menu': ElementsFooterMenu;
      'elements.form-row': ElementsFormRow;
      'elements.hidden-fields': ElementsHiddenFields;
      'elements.icon-box': ElementsIconBox;
      'elements.image-box': ElementsImageBox;
      'elements.list-item': ElementsListItem;
      'elements.logo': ElementsLogo;
      'elements.mega-submenu-columns': ElementsMegaSubmenuColumns;
      'elements.member': ElementsMember;
      'elements.numbers-item': ElementsNumbersItem;
      'elements.slide': ElementsSlide;
      'elements.social-link': ElementsSocialLink;
      'elements.social-menu': ElementsSocialMenu;
      'elements.table-header-columns': ElementsTableHeaderColumns;
      'elements.table-params': ElementsTableParams;
      'elements.table-price-row': ElementsTablePriceRow;
      'elements.table-row': ElementsTableRow;
      'elements.table-rows-group': ElementsTableRowsGroup;
      'elements.testimonial': ElementsTestimonial;
      'elements.tree-level-one': ElementsTreeLevelOne;
      'elements.tree-level-two': ElementsTreeLevelTwo;
      'elements.tree': ElementsTree;
      'elements.video-gallery-item': ElementsVideoGalleryItem;
      'settings-blocks.banner': SettingsBlocksBanner;
      'settings-blocks.box': SettingsBlocksBox;
      'settings-blocks.button-group': SettingsBlocksButtonGroup;
      'settings-blocks.contact-form': SettingsBlocksContactForm;
      'settings-blocks.description-list': SettingsBlocksDescriptionList;
      'settings-blocks.description': SettingsBlocksDescription;
      'settings-blocks.form': SettingsBlocksForm;
      'settings-blocks.gallery-settings': SettingsBlocksGallerySettings;
      'settings-blocks.icon-boxes': SettingsBlocksIconBoxes;
      'settings-blocks.image': SettingsBlocksImage;
      'settings-blocks.logo-group': SettingsBlocksLogoGroup;
      'settings-blocks.posts': SettingsBlocksPosts;
      'settings-blocks.quote': SettingsBlocksQuote;
      'settings-blocks.redirect': SettingsBlocksRedirect;
      'settings-blocks.slide': SettingsBlocksSlide;
      'settings-blocks.slideshow': SettingsBlocksSlideshow;
      'settings-blocks.table': SettingsBlocksTable;
      'settings-blocks.team': SettingsBlocksTeam;
      'settings-blocks.testimonials': SettingsBlocksTestimonials;
      'settings-blocks.text-and-image': SettingsBlocksTextAndImage;
      'settings-blocks.text': SettingsBlocksText;
      'settings-blocks.video-list': SettingsBlocksVideoList;
      'settings-fields.button-hover': SettingsFieldsButtonHover;
      'settings-fields.button-normal': SettingsFieldsButtonNormal;
      'settings-fields.button': SettingsFieldsButton;
      'settings-fields.buttons-holder': SettingsFieldsButtonsHolder;
      'settings-fields.icon': SettingsFieldsIcon;
      'settings-fields.image': SettingsFieldsImage;
      'settings-fields.text': SettingsFieldsText;
      'settings-layout.container': SettingsLayoutContainer;
      'settings-layout.layout-settings': SettingsLayoutLayoutSettings;
      'settings-layout.list': SettingsLayoutList;
      'settings-layout.wrapper': SettingsLayoutWrapper;
      'settings-list-item.description-list': SettingsListItemDescriptionList;
      'settings-list-item.icon-boxes-list': SettingsListItemIconBoxesList;
      'settings-list-item.image-boxes-list': SettingsListItemImageBoxesList;
      'settings-list-item.member': SettingsListItemMember;
      'settings-list-item.video-item': SettingsListItemVideoItem;
      'settings.redirect': SettingsRedirect;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
    }
  }
}
