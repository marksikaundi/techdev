import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const createBlog = mutation({
  args: {
    title: v.string(),
    content: v.string(),
    userId: v.string(),
    userName: v.string(),
    imageUrl: v.optional(v.string()),
    published: v.boolean(),
  },
  handler: async (ctx, args) => {
    const now = Date.now();

    const blogId = await ctx.db.insert("blogs", {
      title: args.title,
      content: args.content,
      userId: args.userId,
      userName: args.userName,
      imageUrl: args.imageUrl,
      published: args.published,
      createdAt: now,
      updatedAt: now,
    });

    return blogId;
  },
});

export const updateBlog = mutation({
  args: {
    id: v.id("blogs"),
    title: v.optional(v.string()),
    content: v.optional(v.string()),
    imageUrl: v.optional(v.string()),
    published: v.optional(v.boolean()),
  },
  handler: async (ctx, args) => {
    const { id, ...rest } = args;

    const now = Date.now();

    await ctx.db.patch(id, {
      ...rest,
      updatedAt: now,
    });

    return id;
  },
});

export const deleteBlog = mutation({
  args: {
    id: v.id("blogs"),
  },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
    return args.id;
  },
});
