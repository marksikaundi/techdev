import { query } from "./_generated/server";
import { v } from "convex/values";

// Get all posts with optional filtering
export const getPosts = query({
  args: {
    status: v.optional(v.string()),
    category: v.optional(v.string()),
    searchQuery: v.optional(v.string()),
    limit: v.optional(v.number()),
    skip: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    let posts = await ctx.db.query("posts").collect();

    // Apply status filter if provided
    if (args.status) {
      posts = posts.filter((post) => post.status === args.status);
    }

    // Apply category filter if provided
    if (args.category) {
      posts = posts.filter((post) => post.category === args.category);
    }

    // Apply search query if provided
    if (args.searchQuery) {
      const searchLower = args.searchQuery.toLowerCase();
      posts = posts.filter(
        (post) =>
          post.title.toLowerCase().includes(searchLower) ||
          post.excerpt.toLowerCase().includes(searchLower) ||
          post.content.toLowerCase().includes(searchLower) ||
          post.tags?.toLowerCase().includes(searchLower)
      );
    }

    // Sort posts by publishedAt in descending order
    posts.sort((a, b) => {
      const dateA = a.publishedAt ? new Date(a.publishedAt).getTime() : 0;
      const dateB = b.publishedAt ? new Date(b.publishedAt).getTime() : 0;
      return dateB - dateA;
    });

    // Apply pagination if both limit and skip are provided
    if (args.limit !== undefined && args.skip !== undefined) {
      posts = posts.slice(args.skip, args.skip + args.limit);
    } else if (args.limit !== undefined) {
      posts = posts.slice(0, args.limit);
    }

    return posts;
  },
});

// Get a single post by ID
export const getPost = query({
  args: { id: v.id("posts") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});

// Get a single post by slug
export const getPostBySlug = query({
  args: { slug: v.string() },
  handler: async (ctx, args) => {
    const posts = await ctx.db
      .query("posts")
      .withIndex("by_slug", (q) => q.eq("slug", args.slug))
      .collect();

    return posts[0];
  },
});

// Get all categories
export const getCategories = query({
  args: {
    searchQuery: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    let categories = await ctx.db.query("categories").collect();

    // Apply search query if provided
    if (args.searchQuery) {
      const searchLower = args.searchQuery.toLowerCase();
      categories = categories.filter(
        (category) =>
          category.name.toLowerCase().includes(searchLower) ||
          category.description?.toLowerCase().includes(searchLower)
      );
    }

    // Sort categories alphabetically
    categories.sort((a, b) => a.name.localeCompare(b.name));

    return categories;
  },
});

// Get a single category by ID
export const getCategory = query({
  args: { id: v.id("categories") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});

// Get all users
export const getUsers = query({
  args: {
    searchQuery: v.optional(v.string()),
    role: v.optional(v.string()),
    status: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    let users = await ctx.db.query("users").collect();

    // Apply role filter if provided
    if (args.role) {
      users = users.filter((user) => user.role === args.role);
    }

    // Apply status filter if provided
    if (args.status) {
      users = users.filter((user) => user.status === args.status);
    }

    // Apply search query if provided
    if (args.searchQuery) {
      const searchLower = args.searchQuery.toLowerCase();
      users = users.filter(
        (user) =>
          user.name.toLowerCase().includes(searchLower) ||
          user.email.toLowerCase().includes(searchLower)
      );
    }

    return users;
  },
});

// Get a single user by ID
export const getUser = query({
  args: { id: v.id("users") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});

// Get analytics data
export const getAnalytics = query({
  args: {
    startDate: v.optional(v.string()),
    endDate: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    let analytics = await ctx.db.query("analytics").collect();

    // Apply date filters if provided
    if (args.startDate && args.endDate) {
      analytics = analytics.filter((record) => {
        const recordDate = new Date(record.date);
        const startDate = new Date(args.startDate!);
        const endDate = new Date(args.endDate!);
        return recordDate >= startDate && recordDate <= endDate;
      });
    }

    return analytics;
  },
});

// Get comments for a specific post
export const getComments = query({
  args: {
    postId: v.id("posts"),
    status: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    let comments = await ctx.db
      .query("comments")
      .withIndex("by_postId", (q) => q.eq("postId", args.postId))
      .collect();

    // Apply status filter if provided
    if (args.status) {
      comments = comments.filter((comment) => comment.status === args.status);
    }

    // Sort comments by date in descending order (newest first)
    comments.sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return dateB - dateA;
    });

    return comments;
  },
});

// Get post count by category
export const getPostCountByCategory = query({
  args: {},
  handler: async (ctx) => {
    const posts = await ctx.db.query("posts").collect();
    const categories = await ctx.db.query("categories").collect();

    const categoryCounts = categories.map((category) => {
      const count = posts.filter(
        (post) => post.category === category.slug
      ).length;
      return {
        id: category._id,
        name: category.name,
        slug: category.slug,
        count,
      };
    });

    return categoryCounts;
  },
});
