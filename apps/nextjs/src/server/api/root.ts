import { postRouter } from "~/server/api/routers/post";
import {
  createCallerFactory,
  createTRPCRouter,
  publicProcedure,
} from "~/server/api/trpc";

import type { LandingPage } from "strapi-types/types/api/landing-page";
import type { Offering } from "strapi-types/types/api/offering";
import qs from "qs";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  post: postRouter,
  getLanding: publicProcedure.query(async ({ ctx }) => {
    const res = await ctx.strapi.get<{ data: LandingPage }>("landing-page");
    return res.data.data;
  }),
  getOfferings: publicProcedure.query(async ({ ctx }) => {
    const query = qs.stringify({
      populate: {
        squared_image: {
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
