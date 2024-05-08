import { postRouter } from "~/server/api/routers/post";
import {
  createCallerFactory,
  createTRPCRouter,
  publicProcedure,
} from "~/server/api/trpc";

import type { LandingPage } from "strapi-types/types/api/landing-page";
import type { Offering } from "strapi-types/types/api/offering";

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
    const res = await ctx.strapi.get<{ data: Offering[] }>(
      "offerings?populate[squared_image][fields][0]=url&fields[0]=title&fields[1]=description&fields[2]=starting_date&fields[3]=ending_date&fields[4]=starting_time&fields[5]=ending_time&fields[6]=instructor&pagination[pageSize]=10&pagination[page]=1&status=active&locale[0]=en",
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
