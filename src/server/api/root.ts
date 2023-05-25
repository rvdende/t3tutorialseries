import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { exampleRouter } from "~/server/api/routers/example";
import { z } from "zod";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,

  somefancy: createTRPCRouter({
    morelayers: publicProcedure
      .input(z.object({ userinput: z.string() }))
      .mutation(({ input }) => {
        console.log("recieved data!");
        return { serverresult: ["foo", input.userinput] };
      }),
  }),
});

// export type definition of API
export type AppRouter = typeof appRouter;
