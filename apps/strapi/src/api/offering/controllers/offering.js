"use strict";

/**
 * offering controller
 */

const { createCoreController } = require("@strapi/strapi").factories;
const { sanitize } = require("@strapi/utils");

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

      const contentType = strapi.contentType("api::offering.offering");

      const sanitizedEntity = await sanitize.contentAPI.output(
        offering,
        contentType
      );
      console.log("OFFERING!", sanitizedEntity);

      return this.transformResponse(sanitizedEntity[0]);
    },
  })
);
