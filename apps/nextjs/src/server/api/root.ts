import {
  createCallerFactory,
  createTRPCRouter,
  publicProcedure,
} from "~/server/api/trpc";

import type { LandingPage } from "strapi-types/types/api/landing-page";
import type { OfferingPage } from "strapi-types/types/api/offering-page";
import type { Offering } from "strapi-types/types/api/offering";
import qs from "qs";
import { z } from "zod";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
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
  getOfferingPageTexts: publicProcedure.query(async ({ ctx }) => {
    const res = await ctx.strapi.get<{ data: OfferingPage }>("offering-page");
    return res.data.data;
  }),
  getOfferings: publicProcedure.query(async ({ ctx }) => {
    const query = qs.stringify({
      populate: {
        square_image: {
          fields: ["url", "formats"],
        },
        instructors: {
          fields: ["full_name"],
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
      status: "active",
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
        },
      });
      const res = await ctx.strapi.get<{ data: Offering }>(
        `offerings/${input}?` + query,
      );
      return res.data.data;
    }),
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
