import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

// Define the schema for the database
export default defineSchema({
  // Posts table
  posts: defineTable({
    title: v.string(),
    slug: v.string(),
    excerpt: v.string(),
    content: v.string(),
    featuredImage: v.optional(v.string()),
    category: v.string(),
    status: v.string(), // "published", "draft", "scheduled"
    tags: v.optional(v.string()),
    author: v.string(),
    views: v.optional(v.number()),
    publishedAt: v.optional(v.string()),
    updatedAt: v.optional(v.string()),
  })
    .index("by_slug", ["slug"])
    .index("by_status", ["status"])
    .index("by_category", ["category"]),

  // Categories table
  categories: defineTable({
    name: v.string(),
    slug: v.string(),
    description: v.optional(v.string()),
  })
    .index("by_slug", ["slug"]),

  // Users table
  users: defineTable({
    name: v.string(),
    email: v.string(),
    role: v.string(), // "admin", "editor", "author", "subscriber"
    status: v.string(), // "active", "inactive", "pending"
    lastLogin: v.optional(v.string()),
    avatar: v.optional(v.string()),
  })
    .index("by_email", ["email"]),

  // Analytics table
  analytics: defineTable({
    pageId: v.string(),
    pageTitle: v.string(),
    pageUrl: v.string(), 
    views: v.number(),
    uniqueVisitors: v.number(),
    date: v.string(),
  })
    .index("by_date", ["date"])
    .index("by_pageUrl", ["pageUrl"]),

  // Comments table
  comments: defineTable({
    postId: v.id("posts"),
    author: v.string(),
    authorEmail: v.string(),
    content: v.string(),
    status: v.string(), // "approved", "pending", "spam"
    date: v.string(),
  })
    .index("by_postId", ["postId"])
    .index("by_status", ["status"]),
});
