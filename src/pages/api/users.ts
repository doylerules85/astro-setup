import type { APIRoute } from "astro";
import db from "../../db";
import { usersTable } from "../../db/schema";

export const GET: APIRoute = async ({ request, response }) => {
  const users = await db.select().from(usersTable);
  return new Response(JSON.stringify(users));
};

export const POST: APIRoute = async ({ request, response }) => {
  const { name, email } = await request.json();
  const user = await db.insert(usersTable).values({ name, email });
  return new Response(JSON.stringify(user));
};
