import {
  createCallerFactory,
  createTRPCRouter,
  publicProcedure,
} from "~/server/api/trpc";

import type { LandingPage } from "strapi-types/types/api/landing-page";
import type { OfferingPage } from "strapi-types/types/api/offering-page";
import type { Offering } from "strapi-types/types/api/offering";
import type { AboutPage } from "strapi-types/types/api/about-page";
import type { Footer } from "strapi-types/types/api/footer";
import qs from "qs";
import { z } from "zod";
import { type OfferingType } from "strapi-types/types/api/offering-type";

export const appRouter = createTRPCRouter({
  getLandingTexts: publicProcedure.query(async ({ ctx }) => {
    const query = qs.stringify({
      populate: ["journal_section_image"],
    });
    const res = await ctx.strapi.get<{ data: LandingPage }>(
      "landing-page?" + query,
    );
    return res.data.data;
  }),
  getAboutTexts: publicProcedure.query(async ({ ctx }) => {
    const query = qs.stringify({
      populate: ["main_image"],
    });
    const res = await ctx.strapi.get<{ data: AboutPage }>(
      "about-page?" + query,
    );
    return res.data.data;
  }),
  getOfferingPageTexts: publicProcedure.query(async ({ ctx }) => {
    const res = await ctx.strapi.get<{ data: OfferingPage }>("offering-page");
    return res.data.data;
  }),
  getOfferingTypes: publicProcedure.query(async ({ ctx }) => {
    const res = await ctx.strapi.get<{ data: OfferingType[] }>(
      "offering-types",
    );
    return res.data.data;
  }),
  getOfferings: publicProcedure
    .input(
      z
        .object({
          status: z.string().optional(),
          offeringTypeId: z.number().optional(),
        })
        .optional(),
    )
    .query(async ({ ctx, input }) => {
      const query = qs.stringify({
        populate: {
          square_image: {
            fields: ["url", "formats"],
          },
          instructors: {
            fields: ["full_name"],
          },
          offering_type: {
            fields: ["Name"],
          },
        },
        fields: [
          "title",
          "description",
          "starting_date",
          "ending_date",
          "starting_time",
          "ending_time",
          "days",
          "slug",
        ],
        pagination: {
          pageSize: 10,
          page: 1,
        },
        filters: {
          status: { $eq: input?.status },
          offering_type: {
            id: { $eq: input?.offeringTypeId },
          },
        },
        locale: ["en"],
      });

      const res = await ctx.strapi.get<{ data: Offering[] }>(
        "offerings?" + query,
      );
      return res.data.data;
    }),
  getOffering: publicProcedure
    .input(z.string())
    .query(async ({ ctx, input }) => {
      const query = qs.stringify({
        populate: {
          rectangle_image: {
            fields: ["url", "formats"],
          },
          instructors: {
            fields: "*",
          },
          offeringTypeInfo: {
            populate: true,
          },
          offering_type: {
            fields: "*",
          },
        },
      });
      const res = await ctx.strapi.get<{ data: Offering }>(
        `offerings/${input}?` + query,
      );

      return res.data.data;
    }),
  getOtherOfferings: publicProcedure
    .input(z.string())
    .query(async ({ ctx, input }) => {
      const query = qs.stringify({
        filters: {
          slug: {
            $ne: input,
          },
          status: { $eq: "active" },
        },
        populate: {
          offeringTypeInfo: {
            populate: true,
          },
          square_image: {
            fields: ["url", "formats"],
          },
          instructors: {
            fields: ["full_name"],
          },
        },
        fields: [
          "title",
          "subtitle",
          "starting_date",
          "ending_date",
          "starting_time",
          "ending_time",
          "days",
          "slug",
        ],
        pagination: {
          pageSize: 2,
          page: 1,
        },
        status: "active",
        locale: ["en"],
      });

      const res = await ctx.strapi.get<{ data: Offering[] }>(
        "offerings?" + query,
      );

      return res.data.data;
    }),

  getFooter: publicProcedure.query(
    async ({ ctx }) =>
      (await ctx.strapi.get<{ data: Footer }>("footer")).data.data,
  ),
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter);
