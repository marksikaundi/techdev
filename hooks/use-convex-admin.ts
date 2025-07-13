"use client";

import { useQuery, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";

export function usePostsAdmin() {
  // Get all posts with optional filtering
  const getPosts = useQuery(api.queries.getPosts, {
    searchQuery: "",
  });
  
  // Get a single post by ID
  const getPost = (id: Id<"posts">) => useQuery(api.queries.getPost, { id });
  
  // Create a new post
  const createPost = useMutation(api.mutations.createPost);
  
  // Update an existing post
  const updatePost = useMutation(api.mutations.updatePost);
  
  // Delete a post
  const deletePost = useMutation(api.mutations.deletePost);
  
  return {
    posts: getPosts || [],
    getPost,
    createPost,
    updatePost,
    deletePost,
  };
}

export function useCategoriesAdmin() {
  // Get all categories
  const getCategories = useQuery(api.queries.getCategories, {});
  
  // Get post counts by category
  const getPostCountByCategory = useQuery(api.queries.getPostCountByCategory, {});
  
  // Create a new category
  const createCategory = useMutation(api.mutations.createCategory);
  
  // Update an existing category
  const updateCategory = useMutation(api.mutations.updateCategory);
  
  // Delete a category
  const deleteCategory = useMutation(api.mutations.deleteCategory);
  
  return {
    categories: getCategories || [],
    categoryCounts: getPostCountByCategory || [],
    createCategory,
    updateCategory,
    deleteCategory,
  };
}

export function useUsersAdmin() {
  // Get all users
  const getUsers = useQuery(api.queries.getUsers, {});
  
  // Create a new user
  const createUser = useMutation(api.mutations.createUser);
  
  // Update an existing user
  const updateUser = useMutation(api.mutations.updateUser);
  
  // Delete a user
  const deleteUser = useMutation(api.mutations.deleteUser);
  
  return {
    users: getUsers || [],
    createUser,
    updateUser,
    deleteUser,
  };
}

export function useCommentsAdmin() {
  // Get comments for a specific post
  const getComments = (postId: Id<"posts">) => 
    useQuery(api.queries.getComments, { postId });
  
  // Add a comment
  const addComment = useMutation(api.mutations.addComment);
  
  // Update a comment's status
  const updateCommentStatus = useMutation(api.mutations.updateCommentStatus);
  
  // Delete a comment
  const deleteComment = useMutation(api.mutations.deleteComment);
  
  return {
    getComments,
    addComment,
    updateCommentStatus,
    deleteComment,
  };
}

export function useSeedData() {
  // Seed initial data for testing
  const seedInitialData = useMutation(api.seed.seedInitialData);
  
  return {
    seedInitialData,
  };
}
