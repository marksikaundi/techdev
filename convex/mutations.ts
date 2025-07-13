import { mutation } from "./_generated/server";
import { v } from "convex/values";
import { Id } from "./_generated/dataModel";

// Create a new post
export const createPost = mutation({
  args: {
    title: v.string(),
    slug: v.string(),
    excerpt: v.string(),
    content: v.string(),
    featuredImage: v.optional(v.string()),
    category: v.string(),
    status: v.string(),
    tags: v.optional(v.string()),
    author: v.string(),
  },
  handler: async (ctx, args) => {
    const now = new Date().toISOString();
    
    // Check if a post with this slug already exists
    const existingPosts = await ctx.db
      .query("posts")
      .withIndex("by_slug", (q) => q.eq("slug", args.slug))
      .collect();
    
    if (existingPosts.length > 0) {
      throw new Error("A post with this slug already exists");
    }
    
    const postId = await ctx.db.insert("posts", {
      ...args,
      views: 0,
      publishedAt: args.status === "published" ? now : undefined,
      updatedAt: now,
    });
    
    return postId;
  },
});

// Update an existing post
export const updatePost = mutation({
  args: {
    id: v.id("posts"),
    title: v.optional(v.string()),
    slug: v.optional(v.string()),
    excerpt: v.optional(v.string()),
    content: v.optional(v.string()),
    featuredImage: v.optional(v.string()),
    category: v.optional(v.string()),
    status: v.optional(v.string()),
    tags: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const { id, ...fields } = args;
    
    // Get the current post data
    const post = await ctx.db.get(id);
    if (!post) {
      throw new Error("Post not found");
    }
    
    // Check for slug change and verify uniqueness
    if (fields.slug && fields.slug !== post.slug) {
      const existingPosts = await ctx.db
        .query("posts")
        .withIndex("by_slug", (q) => q.eq("slug", fields.slug as string))
        .collect();
      
      if (existingPosts.length > 0) {
        throw new Error("A post with this slug already exists");
      }
    }
    
    // Update publishedAt if status is changing to published
    const now = new Date().toISOString();
    const updates: any = { ...fields };
    
    if (fields.status === "published" && post.status !== "published") {
      updates.publishedAt = now;
    }
    
    // Always update updatedAt
    updates.updatedAt = now;
    
    await ctx.db.patch(id, fields);
    return id;
  },
});

// Delete a post
export const deletePost = mutation({
  args: { id: v.id("posts") },
  handler: async (ctx, args) => {
    // Delete the post
    await ctx.db.delete(args.id);
    
    // Delete associated comments
    const comments = await ctx.db
      .query("comments")
      .withIndex("by_postId", (q) => q.eq("postId", args.id))
      .collect();
    
    for (const comment of comments) {
      await ctx.db.delete(comment._id);
    }
    
    return args.id;
  },
});

// Increment post view count
export const incrementPostView = mutation({
  args: { id: v.id("posts") },
  handler: async (ctx, args) => {
    const post = await ctx.db.get(args.id);
    if (!post) {
      throw new Error("Post not found");
    }
    
    const currentViews = post.views || 0;
    await ctx.db.patch(args.id, { views: currentViews + 1 });
    
    return args.id;
  },
});

// Create a new category
export const createCategory = mutation({
  args: {
    name: v.string(),
    slug: v.string(),
    description: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    // Check if a category with this slug already exists
    const existingCategories = await ctx.db
      .query("categories")
      .withIndex("by_slug", (q) => q.eq("slug", args.slug))
      .collect();
    
    if (existingCategories.length > 0) {
      throw new Error("A category with this slug already exists");
    }
    
    const categoryId = await ctx.db.insert("categories", args);
    return categoryId;
  },
});

// Update an existing category
export const updateCategory = mutation({
  args: {
    id: v.id("categories"),
    name: v.optional(v.string()),
    slug: v.optional(v.string()),
    description: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const { id, ...fields } = args;
    
    // Get the current category data
    const category = await ctx.db.get(id);
    if (!category) {
      throw new Error("Category not found");
    }
    
    // Check for slug change and verify uniqueness
    if (fields.slug && fields.slug !== category.slug) {
      const existingCategories = await ctx.db
        .query("categories")
        .withIndex("by_slug", (q) => q.eq("slug", fields.slug as string))
        .collect();
      
      if (existingCategories.length > 0) {
        throw new Error("A category with this slug already exists");
      }
    }
    
    await ctx.db.patch(id, fields);
    return id;
  },
});

// Delete a category
export const deleteCategory = mutation({
  args: { id: v.id("categories") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
    return args.id;
  },
});

// Create a new user
export const createUser = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    role: v.string(),
    status: v.string(),
    avatar: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    // Check if a user with this email already exists
    const existingUsers = await ctx.db
      .query("users")
      .withIndex("by_email", (q) => q.eq("email", args.email))
      .collect();
    
    if (existingUsers.length > 0) {
      throw new Error("A user with this email already exists");
    }
    
    const userId = await ctx.db.insert("users", {
      ...args,
      lastLogin: "Never",
    });
    
    return userId;
  },
});

// Update an existing user
export const updateUser = mutation({
  args: {
    id: v.id("users"),
    name: v.optional(v.string()),
    email: v.optional(v.string()),
    role: v.optional(v.string()),
    status: v.optional(v.string()),
    avatar: v.optional(v.string()),
    lastLogin: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const { id, ...fields } = args;
    
    // Get the current user data
    const user = await ctx.db.get(id);
    if (!user) {
      throw new Error("User not found");
    }
    
    // Check for email change and verify uniqueness
    if (fields.email && fields.email !== user.email) {
      const existingUsers = await ctx.db
        .query("users")
        .withIndex("by_email", (q) => q.eq("email", fields.email as string))
        .collect();
      
      if (existingUsers.length > 0) {
        throw new Error("A user with this email already exists");
      }
    }
    
    await ctx.db.patch(id, fields);
    return id;
  },
});

// Delete a user
export const deleteUser = mutation({
  args: { id: v.id("users") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
    return args.id;
  },
});

// Record a user login
export const recordUserLogin = mutation({
  args: { id: v.id("users") },
  handler: async (ctx, args) => {
    const now = new Date().toISOString();
    await ctx.db.patch(args.id, { lastLogin: now });
    return args.id;
  },
});

// Add a comment to a post
export const addComment = mutation({
  args: {
    postId: v.id("posts"),
    author: v.string(),
    authorEmail: v.string(),
    content: v.string(),
    status: v.string(),
  },
  handler: async (ctx, args) => {
    const now = new Date().toISOString();
    
    const commentId = await ctx.db.insert("comments", {
      ...args,
      date: now,
    });
    
    return commentId;
  },
});

// Update a comment's status
export const updateCommentStatus = mutation({
  args: {
    id: v.id("comments"),
    status: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.id, { status: args.status });
    return args.id;
  },
});

// Delete a comment
export const deleteComment = mutation({
  args: { id: v.id("comments") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
    return args.id;
  },
});
