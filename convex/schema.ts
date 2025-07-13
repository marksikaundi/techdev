import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  blogs: defineTable({
    title: v.string(),
    content: v.string(),
    userId: v.string(),
    userName: v.string(),
    imageUrl: v.optional(v.string()),
    published: v.boolean(),
    createdAt: v.number(),
    updatedAt: v.number(),
  }),
});
