'use strict';

/**
 * on-demand controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::on-demand.on-demand');
