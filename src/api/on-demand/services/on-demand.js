'use strict';

/**
 * on-demand service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::on-demand.on-demand');
