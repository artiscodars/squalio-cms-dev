'use strict';

/**
 * on-demand router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::on-demand.on-demand');
