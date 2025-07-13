import { query } from "./_generated/server";
import { v } from "convex/values";

export const getAllBlogs = query({
  handler: async (ctx) => {
    const blogs = await ctx.db.query("blogs").order("desc").collect();

    return blogs;
  },
});

export const getBlogsByUser = query({
  args: {
    userId: v.string(),
  },
  handler: async (ctx, args) => {
    const blogs = await ctx.db
      .query("blogs")
      .filter((q) => q.eq(q.field("userId"), args.userId))
      .order("desc")
      .collect();

    return blogs;
  },
});

export const getBlogById = query({
  args: {
    id: v.id("blogs"),
  },
  handler: async (ctx, args) => {
    const blog = await ctx.db.get(args.id);
    return blog;
  },
});

export const getPublishedBlogs = query({
  handler: async (ctx) => {
    const blogs = await ctx.db
      .query("blogs")
      .filter((q) => q.eq(q.field("published"), true))
      .order("desc")
      .collect();

    return blogs;
  },
});
