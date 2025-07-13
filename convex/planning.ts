import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import { Id } from "./_generated/dataModel";

// =============== QUERIES ===============

// Get all planning boards with their tasks
export const getPlanningBoards = query({
  args: {},
  handler: async (ctx) => {
    // Get all boards ordered by their order property
    const boards = await ctx.db
      .query("planningBoards")
      .order("asc", "order")
      .collect();

    // For each board, get its tasks
    const boardsWithTasks = await Promise.all(
      boards.map(async (board) => {
        const tasks = await ctx.db
          .query("planningTasks")
          .withIndex("by_boardId", (q) => q.eq("boardId", board._id))
          .order("asc", "order")
          .collect();

        return {
          ...board,
          tasks,
        };
      })
    );

    return boardsWithTasks;
  },
});

// Get a specific board with its tasks
export const getPlanningBoard = query({
  args: { id: v.id("planningBoards") },
  handler: async (ctx, args) => {
    const board = await ctx.db.get(args.id);
    if (!board) {
      return null;
    }

    const tasks = await ctx.db
      .query("planningTasks")
      .withIndex("by_boardId", (q) => q.eq("boardId", args.id))
      .order("asc", "order")
      .collect();

    return {
      ...board,
      tasks,
    };
  },
});

// =============== MUTATIONS ===============

// Create a new planning board
export const createPlanningBoard = mutation({
  args: {
    title: v.string(),
    description: v.optional(v.string()),
    order: v.number(),
  },
  handler: async (ctx, args) => {
    const now = new Date().toISOString();

    const boardId = await ctx.db.insert("planningBoards", {
      title: args.title,
      description: args.description || "",
      order: args.order,
      createdAt: now,
      updatedAt: now,
    });

    return boardId;
  },
});

// Update a planning board
export const updatePlanningBoard = mutation({
  args: {
    id: v.id("planningBoards"),
    title: v.optional(v.string()),
    description: v.optional(v.string()),
    order: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const { id, ...fields } = args;
    const now = new Date().toISOString();

    // Check if board exists
    const board = await ctx.db.get(id);
    if (!board) {
      throw new Error("Board not found");
    }

    await ctx.db.patch(id, {
      ...fields,
      updatedAt: now,
    });

    return id;
  },
});

// Delete a planning board and all its tasks
export const deletePlanningBoard = mutation({
  args: { id: v.id("planningBoards") },
  handler: async (ctx, args) => {
    // Delete all tasks in the board
    const tasks = await ctx.db
      .query("planningTasks")
      .withIndex("by_boardId", (q) => q.eq("boardId", args.id))
      .collect();

    for (const task of tasks) {
      await ctx.db.delete(task._id);
    }

    // Delete the board
    await ctx.db.delete(args.id);

    return args.id;
  },
});

// Create a new planning task
export const createPlanningTask = mutation({
  args: {
    boardId: v.id("planningBoards"),
    title: v.string(),
    description: v.optional(v.string()),
    priority: v.string(),
    status: v.string(),
    dueDate: v.optional(v.string()),
    assignee: v.optional(v.string()),
    order: v.number(),
  },
  handler: async (ctx, args) => {
    const now = new Date().toISOString();

    const taskId = await ctx.db.insert("planningTasks", {
      ...args,
      description: args.description || "",
      dueDate: args.dueDate || "",
      assignee: args.assignee || "",
      createdAt: now,
      updatedAt: now,
    });

    return taskId;
  },
});

// Update a planning task
export const updatePlanningTask = mutation({
  args: {
    id: v.id("planningTasks"),
    boardId: v.optional(v.id("planningBoards")),
    title: v.optional(v.string()),
    description: v.optional(v.string()),
    priority: v.optional(v.string()),
    status: v.optional(v.string()),
    dueDate: v.optional(v.string()),
    assignee: v.optional(v.string()),
    order: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const { id, ...fields } = args;
    const now = new Date().toISOString();

    // Check if task exists
    const task = await ctx.db.get(id);
    if (!task) {
      throw new Error("Task not found");
    }

    await ctx.db.patch(id, {
      ...fields,
      updatedAt: now,
    });

    return id;
  },
});

// Delete a planning task
export const deletePlanningTask = mutation({
  args: { id: v.id("planningTasks") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
    return args.id;
  },
});

// Save the entire planning studio state at once
export const savePlanningStudio = mutation({
  args: {
    boards: v.array(
      v.object({
        id: v.string(),
        title: v.string(),
        description: v.optional(v.string()),
        tasks: v.array(
          v.object({
            id: v.string(),
            title: v.string(),
            description: v.optional(v.string()),
            priority: v.string(),
            status: v.string(),
            dueDate: v.optional(v.string()),
            assignee: v.optional(v.string()),
          })
        ),
      })
    ),
  },
  handler: async (ctx, args) => {
    const now = new Date().toISOString();
    const result = { boards: [] };

    // Delete all existing planning data
    const existingBoards = await ctx.db.query("planningBoards").collect();
    for (const board of existingBoards) {
      await ctx.db.delete(board._id);
    }

    // Create new boards and tasks
    for (let i = 0; i < args.boards.length; i++) {
      const board = args.boards[i];
      
      // Create the board
      const boardId = await ctx.db.insert("planningBoards", {
        title: board.title,
        description: board.description || "",
        order: i,
        createdAt: now,
        updatedAt: now,
      });
      
      // Create the tasks for this board
      const taskIds = [];
      for (let j = 0; j < board.tasks.length; j++) {
        const task = board.tasks[j];
        const taskId = await ctx.db.insert("planningTasks", {
          boardId,
          title: task.title,
          description: task.description || "",
          priority: task.priority,
          status: task.status,
          dueDate: task.dueDate || "",
          assignee: task.assignee || "",
          order: j,
          createdAt: now,
          updatedAt: now,
        });
        taskIds.push(taskId);
      }
      
      result.boards.push({
        id: boardId,
        taskIds,
      });
    }
    
    return result;
  },
});
