'use strict';

/**
 * cookie-script service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cookie-script.cookie-script');
