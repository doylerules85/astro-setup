import { defineAction } from "astro:actions";
import db from "../db";
import { usersTable } from "../db/schema";
import { z } from "zod";
export const server = {
  createUser: defineAction({
    accept: "form",
    input: z.object({
      name: z.string(),
      age: z.number(),
      email: z.string(),
    }),
    handler: async (input, context) => {
      return await db
        .insert(usersTable)
        .values({
          name: input.name,
          age: input.age,
          email: input.email,
        })
        .returning();
    },
  }),
};
