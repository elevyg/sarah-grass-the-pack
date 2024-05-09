"use strict";

/**
 * offering controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::offering.offering",
  ({ strapi }) => ({
    async findOne(ctx) {
      const { id } = ctx.params;

      const query = {
        filters: { slug: id },
        ...ctx.query,
      };

      const offering = await strapi.entityService.findMany(
        "api::offering.offering",
        query
      );

      const sanitizedEntity = await this.sanitizeOutput(offering);

      return this.transformResponse(sanitizedEntity[0]);
    },
  })
);
