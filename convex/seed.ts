import { mutation } from "./_generated/server";
import { v } from "convex/values";

// Seed initial data for the website
export const seedInitialData = mutation({
  args: {},
  handler: async (ctx) => {
    const now = new Date().toISOString();
    const results = {
      categories: [] as string[],
      posts: [] as string[],
      users: [] as string[],
    };

    // Check if data already exists to prevent duplicates
    const existingCategories = await ctx.db.query("categories").collect();
    const existingPosts = await ctx.db.query("posts").collect();
    const existingUsers = await ctx.db.query("users").collect();

    if (existingCategories.length === 0) {
      // Create categories
      const categories = [
        {
          name: "Tutorial",
          slug: "tutorial",
          description: "Step-by-step guides to learn new skills",
        },
        {
          name: "React",
          slug: "react",
          description: "Everything about React and React ecosystem",
        },
        {
          name: "TypeScript",
          slug: "typescript",
          description: "TypeScript tutorials and best practices",
        },
        {
          name: "CSS",
          slug: "css",
          description: "CSS tips, tricks, and advanced techniques",
        },
        {
          name: "Tools",
          slug: "tools",
          description: "Developer tools and productivity tips",
        },
        {
          name: "Development",
          slug: "development",
          description: "General web development topics",
        },
        {
          name: "Security",
          slug: "security",
          description: "Web security tips and best practices",
        },
        {
          name: "Animation",
          slug: "animation",
          description: "Web animations and interactive experiences",
        },
      ];

      for (const category of categories) {
        const id = await ctx.db.insert("categories", category);
        results.categories.push(id);
      }
    }

    if (existingUsers.length === 0) {
      // Create users
      const users = [
        {
          name: "Mark Sikaundi",
          email: "mark@webdevinsights.com",
          role: "Admin",
          status: "Active",
          lastLogin: now,
          avatar: undefined,
        },
        {
          name: "Jane Doe",
          email: "jane@example.com",
          role: "Editor",
          status: "Active",
          lastLogin: now,
          avatar: undefined,
        },
        {
          name: "John Smith",
          email: "john@example.com",
          role: "Author",
          status: "Active",
          lastLogin: now,
          avatar: undefined,
        },
      ];

      for (const user of users) {
        const id = await ctx.db.insert("users", user);
        results.users.push(id);
      }
    }

    if (existingPosts.length === 0) {
      // Create posts
      const posts = [
        {
          title: "Getting Started with Next.js: A Complete Guide for Beginners",
          slug: "getting-started-with-nextjs",
          excerpt:
            "Learn the fundamentals of Next.js and start building modern React applications.",
          content: `Next.js has become one of the most popular React frameworks for building modern web applications. With its powerful features like server-side rendering, static site generation, and built-in routing, Next.js provides an excellent developer experience while ensuring optimal performance for your users.

## What is Next.js?

Next.js is a React framework that enables server-side rendering, static site generation, and other advanced features to improve performance and developer experience. Created by Vercel, Next.js has gained significant popularity in the React community due to its robust features and ease of use.

Some of the key features of Next.js include:

- Server-side rendering (SSR)
- Static site generation (SSG)
- Incremental static regeneration (ISR)
- File-based routing
- API routes
- Built-in CSS and Sass support
- Image optimization
- Fast refresh

## Getting Started

To create a new Next.js app, you can use the create-next-app command:

\`\`\`bash
npx create-next-app@latest my-next-app
\`\`\`

This will set up a new Next.js project with all the necessary dependencies and a basic project structure.`,
          featuredImage: "/next.svg",
          category: "tutorial",
          status: "published",
          tags: "nextjs,react,tutorial,beginners",
          author: "Mark Sikaundi",
          views: 1204,
          publishedAt: now,
          updatedAt: now,
        },
        {
          title: "5 Essential VS Code Extensions for JavaScript Developers",
          slug: "vs-code-extensions-for-javascript-developers",
          excerpt:
            "Boost your productivity with these must-have VS Code extensions for JavaScript development.",
          content: `Visual Studio Code has become the editor of choice for many JavaScript developers thanks to its excellent performance, flexibility, and extensive ecosystem of extensions. In this article, we'll explore five essential VS Code extensions that can significantly improve your JavaScript development workflow.

## 1. ESLint

ESLint is a static code analysis tool that helps you identify and fix problems in your JavaScript code. It enforces coding standards, catches common mistakes, and can automatically fix many issues for you.

## 2. Prettier

Prettier is an opinionated code formatter that supports JavaScript, TypeScript, CSS, HTML, and many other languages. It ensures consistent code style across your project and team.

## 3. JavaScript (ES6) Code Snippets

This extension provides a rich set of snippets for JavaScript in ES6 syntax, allowing you to quickly scaffold common patterns and structures.

## 4. Import Cost

Import Cost displays the size of imported packages inline in your code, helping you keep an eye on your bundle size as you develop.

## 5. GitLens

While not specifically for JavaScript, GitLens supercharges Git capabilities in VS Code and helps you understand code better by showing who wrote each line, when it was changed, and why.`,
          featuredImage: "/file.svg",
          category: "tools",
          status: "published",
          tags: "vscode,javascript,tools,extensions",
          author: "Jane Doe",
          views: 986,
          publishedAt: now,
          updatedAt: now,
        },
        {
          title: "Understanding React Hooks: From useState to useEffect",
          slug: "understanding-react-hooks",
          excerpt:
            "A comprehensive guide to React's most commonly used Hooks and how to use them effectively.",
          content: `React Hooks revolutionized how we write React components by allowing us to use state and other React features without writing classes. In this guide, we'll explore the most commonly used Hooks and how they can improve your React applications.

## useState

The \`useState\` Hook allows you to add state to your functional components. It returns a stateful value and a function to update it.

\`\`\`jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
\`\`\`

## useEffect

The \`useEffect\` Hook lets you perform side effects in functional components. It serves the same purpose as \`componentDidMount\`, \`componentDidUpdate\`, and \`componentWillUnmount\` in React classes.

\`\`\`jsx
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate
  useEffect(() => {
    // Update the document title using the browser API
    document.title = \`You clicked \${count} times\`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
\`\`\`

## useContext

\`useContext\` makes it easier to consume React context in your components without nesting multiple Consumer components.

## useReducer

\`useReducer\` is an alternative to \`useState\` when you have complex state logic. It's particularly useful when the next state depends on the previous state.

## useCallback and useMemo

These Hooks help optimize performance by memoizing functions and values to prevent unnecessary re-renders.`,
          featuredImage: "/window.svg",
          category: "react",
          status: "published",
          tags: "react,hooks,javascript,frontend",
          author: "Mark Sikaundi",
          views: 1547,
          publishedAt: now,
          updatedAt: now,
        },
        {
          title: "The Complete Guide to Tailwind CSS in 2025",
          slug: "complete-guide-to-tailwind-css",
          excerpt:
            "Learn how to use Tailwind CSS effectively in your web projects, from installation to advanced features.",
          content: `Tailwind CSS has revolutionized the way developers approach styling in web applications. Unlike traditional CSS frameworks that provide pre-designed components, Tailwind offers low-level utility classes that let you build completely custom designs without leaving your HTML.

## Getting Started with Tailwind CSS

Installing Tailwind has become even simpler in 2025. You can now use the CLI to set up Tailwind in your project:

\`\`\`bash
npm install -D tailwindcss
npx tailwindcss init
\`\`\`

Then, create your configuration files and start using Tailwind's utility classes in your HTML:

\`\`\`html
<div class="bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring-1 ring-gray-900/5 shadow-xl">
  <h3 class="text-xl font-medium text-gray-900 dark:text-white">Tailwind CSS</h3>
  <p class="text-gray-500 dark:text-gray-400 mt-2">
    A utility-first CSS framework for rapid UI development.
  </p>
  <button class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
    Learn More
  </button>
</div>
\`\`\`

## New Features in 2025

Tailwind CSS has introduced several new features in 2025 that make it even more powerful:

1. **Enhanced Dark Mode Support**: Better control over dark mode styles with more granular customization options.
2. **Animation Utilities**: Built-in animation classes for common transitions and effects.
3. **Container Queries**: In addition to responsive design based on viewport width, Tailwind now supports container queries.
4. **Improved Performance**: The build process has been optimized for even smaller CSS output.`,
          featuredImage: "/vercel.svg",
          category: "css",
          status: "published",
          tags: "css,tailwind,frontend,web-design",
          author: "John Smith",
          views: 852,
          publishedAt: now,
          updatedAt: now,
        },
        {
          title: "Building a Full-Stack Application with Next.js and Convex",
          slug: "building-with-nextjs-and-convex",
          excerpt:
            "Learn how to create a modern full-stack application using Next.js for the frontend and Convex for the backend.",
          content: `In this tutorial, we'll build a complete full-stack application using Next.js for the frontend and Convex as our backend database and API layer. This combination provides a powerful, yet simple foundation for building modern web applications.

## What is Convex?

Convex is a backend platform that combines a database, backend functions, and real-time subscriptions to make building dynamic web apps easier. It's designed to work seamlessly with frontend frameworks like Next.js.

## Setting Up Your Project

Let's start by creating a new Next.js project and adding Convex:

\`\`\`bash
npx create-next-app@latest my-fullstack-app
cd my-fullstack-app
npm install convex
npx convex init
\`\`\`

## Creating Your Data Model

With Convex, you define your data model in TypeScript. Create a schema.ts file in your convex folder:

\`\`\`typescript
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  tasks: defineTable({
    text: v.string(),
    completed: v.boolean(),
    userId: v.string(),
  }),
});
\`\`\`

## Writing Backend Functions

Now, let's create some functions to interact with our data:

\`\`\`typescript
// convex/tasks.ts
import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const get = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("tasks").collect();
  },
});

export const create = mutation({
  args: { text: v.string() },
  handler: async (ctx, args) => {
    const userId = "user-123"; // In a real app, this would come from authentication
    return await ctx.db.insert("tasks", {
      text: args.text,
      completed: false,
      userId,
    });
  },
});
\`\`\`

## Connecting the Frontend

In your Next.js app, you can now use the Convex client to access your backend:

\`\`\`jsx
'use client';

import { useState } from "react";
import { useMutation, useQuery } from "convex/react";
import { api } from "../convex/_generated/api";

export default function TaskList() {
  const tasks = useQuery(api.tasks.get);
  const createTask = useMutation(api.tasks.create);
  const [newTaskText, setNewTaskText] = useState("");

  const handleCreateTask = async () => {
    if (newTaskText.trim() === "") return;
    await createTask({ text: newTaskText });
    setNewTaskText("");
  };

  return (
    <div>
      <h1>Task List</h1>
      <div>
        <input
          value={newTaskText}
          onChange={(e) => setNewTaskText(e.target.value)}
          placeholder="New task..."
        />
        <button onClick={handleCreateTask}>Add</button>
      </div>
      <ul>
        {tasks?.map((task) => (
          <li key={task._id}>
            {task.text} - {task.completed ? "Completed" : "Pending"}
          </li>
        ))}
      </ul>
    </div>
  );
}
\`\`\`

This is just the beginning! With Convex and Next.js, you can build real-time, collaborative applications with minimal backend code.`,
          featuredImage: "/window.svg",
          category: "development",
          status: "draft",
          tags: "nextjs,convex,fullstack,react",
          author: "Mark Sikaundi",
          views: 0,
          publishedAt: undefined,
          updatedAt: now,
        },
      ];

      for (const post of posts) {
        const id = await ctx.db.insert("posts", post);
        results.posts.push(id);
      }
    }

    return results;
  },
});
