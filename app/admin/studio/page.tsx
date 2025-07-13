"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  LayoutGrid,
  Plus,
  Pencil,
  Trash2,
  MoveHorizontal,
  Calendar,
  Users,
  CheckCircle2,
  Clock,
  Save,
  Loader2,
} from "lucide-react";
import { toast } from "sonner";

// Schema for task creation/editing
const taskSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
  priority: z.enum(["low", "medium", "high"]),
  dueDate: z.string().optional(),
  assignee: z.string().optional(),
});

// Schema for board creation/editing
const boardSchema = z.object({
  title: z.string().min(1, "Board title is required"),
  description: z.string().optional(),
});

type Task = z.infer<typeof taskSchema> & {
  id: string;
  status: string;
  createdAt: Date;
};

type Board = z.infer<typeof boardSchema> & {
  id: string;
  tasks: Task[];
};

export default function StudioPage() {
  // Get boards from Convex
  const planningBoardsData = useQuery(api.planning.getPlanningBoards);

  // Convex mutations
  const savePlanningStudioMutation = useMutation(
    api.planning.savePlanningStudio
  );
  const createPlanningBoardMutation = useMutation(
    api.planning.createPlanningBoard
  );
  const updatePlanningBoardMutation = useMutation(
    api.planning.updatePlanningBoard
  );
  const deletePlanningBoardMutation = useMutation(
    api.planning.deletePlanningBoard
  );
  const createPlanningTaskMutation = useMutation(
    api.planning.createPlanningTask
  );
  const updatePlanningTaskMutation = useMutation(
    api.planning.updatePlanningTask
  );
  const deletePlanningTaskMutation = useMutation(
    api.planning.deletePlanningTask
  );

  // Local state for UI
  const [boards, setBoards] = useState<Board[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [activeTask, setActiveTask] = useState<Task | null>(null);
  const [isAddingBoard, setIsAddingBoard] = useState(false);
  const [isAddingTask, setIsAddingTask] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [currentBoardId, setCurrentBoardId] = useState<string | null>(null);

  // Initialize boards from Convex data
  useEffect(() => {
    if (planningBoardsData) {
      try {
        const formattedBoards = planningBoardsData.map((board) => ({
          id: board._id.toString(),
          title: board.title,
          description: board.description || "",
          tasks: Array.isArray(board.tasks)
            ? board.tasks.map((task) => ({
                id: task._id.toString(),
                title: task.title,
                description: task.description || "",
                priority: task.priority as "low" | "medium" | "high",
                status: task.status,
                dueDate: task.dueDate || "",
                assignee: task.assignee || "",
                createdAt: new Date(task.createdAt),
              }))
            : [],
        }));

        // Only update if data has changed to prevent infinite render loop
        if (JSON.stringify(formattedBoards) !== JSON.stringify(boards)) {
          setBoards(formattedBoards);
        }
      } catch (error) {
        console.error("Error formatting board data:", error);
        toast("There was a problem loading your planning boards.");
      }
    }
  }, [planningBoardsData, toast]);

  // Set up sensors for drag and drop
  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 300,
        tolerance: 8,
      },
    })
  );

  // Forms for creating/editing tasks and boards
  const taskForm = useForm<z.infer<typeof taskSchema>>({
    resolver: zodResolver(taskSchema),
    defaultValues: {
      title: "",
      description: "",
      priority: "medium",
      dueDate: "",
      assignee: "",
    },
  });

  const boardForm = useForm<z.infer<typeof boardSchema>>({
    resolver: zodResolver(boardSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  // Save all boards and tasks to Convex
  const saveAllData = async () => {
    try {
      setIsSaving(true);

      // Format data for Convex
      const boardsData = boards.map((board) => ({
        id: board.id,
        title: board.title,
        description: board.description || "",
        tasks: board.tasks.map((task) => ({
          id: task.id,
          title: task.title,
          description: task.description || "",
          priority: task.priority,
          status: task.status,
          dueDate: task.dueDate || "",
          assignee: task.assignee || "",
        })),
      }));

      if (boardsData.length === 0) {
        toast("Create at least one board before saving.");
        setIsSaving(false);
        return;
      }

      const result = await savePlanningStudioMutation({ boards: boardsData });

      if (result && result.boardIds) {
        toast("Changes saved successfully.");
      }
    } catch (error) {
      console.error("Error saving data:", error);
      toast("Something went wrong. Please try again.");
    } finally {
      setIsSaving(false);
    }
  };

  // Handle task drag operations
  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;
    const task = findTaskById(active.id as string);
    if (task) {
      setActiveTask(task);
    }
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    setActiveTask(null);

    if (!over) return;

    // If task is dropped over a different board
    if (active.id !== over.id) {
      const activeTaskId = active.id as string;
      const overBoardId = over.id as string;

      // Find the task and move it to the new board
      const task = findTaskById(activeTaskId);
      if (task) {
        // Remove task from its current board
        const updatedBoards = boards.map((board) => ({
          ...board,
          tasks: board.tasks.filter((t) => t.id !== activeTaskId),
        }));

        // Add task to the new board
        const targetBoardIndex = updatedBoards.findIndex(
          (b) => b.id === overBoardId
        );
        if (targetBoardIndex !== -1) {
          updatedBoards[targetBoardIndex].tasks.push({
            ...task,
            status: updatedBoards[targetBoardIndex].title
              .toLowerCase()
              .replace(/\s+/g, "-"),
          });
          setBoards(updatedBoards);
        }
      }
    }
  };

  // Helper to find a task by ID across all boards
  const findTaskById = (taskId: string): Task | undefined => {
    for (const board of boards) {
      const task = board.tasks.find((t) => t.id === taskId);
      if (task) return task;
    }
    return undefined;
  };

  // Add a new board
  const onAddBoard = async (data: z.infer<typeof boardSchema>) => {
    try {
      const newBoard: Board = {
        id: `temp-${Date.now()}`, // Temporary ID until saved
        title: data.title,
        description: data.description || "",
        tasks: [],
      };

      // Update local state
      setBoards([...boards, newBoard]);

      // Close dialog and reset form
      setIsAddingBoard(false);
      boardForm.reset();

      // Show toast
      toast("Save changes to persist your new board to the database.");
    } catch (error) {
      console.error("Error adding board:", error);
      toast("Something went wrong. Please try again.");
    }
  };

  // Add a new task
  const onAddTask = async (data: z.infer<typeof taskSchema>) => {
    if (!currentBoardId) return;

    try {
      const newTask: Task = {
        id: `temp-task-${Date.now()}`, // Temporary ID until saved
        title: data.title,
        description: data.description || "",
        priority: data.priority,
        status: "to-do",
        dueDate: data.dueDate || "",
        assignee: data.assignee || "",
        createdAt: new Date(),
      };

      const updatedBoards = boards.map((board) =>
        board.id === currentBoardId
          ? { ...board, tasks: [...board.tasks, newTask] }
          : board
      );

      // Update local state
      setBoards(updatedBoards);

      // Close dialog and reset form
      setIsAddingTask(false);
      setCurrentBoardId(null);
      taskForm.reset();

      // Show toast
      toast("Save changes to persist your new task to the database.");
    } catch (error) {
      console.error("Error adding task:", error);
      toast("Something went wrong. Please try again.");
    }
  };

  // Edit an existing task
  const onEditTask = async (data: z.infer<typeof taskSchema>) => {
    if (!editingTask) return;

    try {
      const updatedBoards = boards.map((board) => ({
        ...board,
        tasks: board.tasks.map((task) =>
          task.id === editingTask.id
            ? {
                ...task,
                title: data.title,
                description: data.description || "",
                priority: data.priority,
                dueDate: data.dueDate || "",
                assignee: data.assignee || "",
              }
            : task
        ),
      }));

      // Update local state
      setBoards(updatedBoards);

      // Close dialog and reset form
      setEditingTask(null);
      taskForm.reset();

      // Show toast
      toast("Save changes to persist your task updates to the database.");
    } catch (error) {
      console.error("Error updating task:", error);
      toast("Something went wrong. Please try again.");
    }
  };

  // Delete a task
  const onDeleteTask = async (taskId: string) => {
    try {
      const updatedBoards = boards.map((board) => ({
        ...board,
        tasks: board.tasks.filter((task) => task.id !== taskId),
      }));

      // Update local state
      setBoards(updatedBoards);

      // Show toast
      toast("Save changes to persist this deletion to the database.");
    } catch (error) {
      console.error("Error deleting task:", error);
      toast("Something went wrong. Please try again.");
    }
  };

  // Delete a board
  const onDeleteBoard = async (boardId: string) => {
    try {
      // Update local state
      setBoards(boards.filter((board) => board.id !== boardId));

      // Show toast
      toast("Save changes to persist this deletion to the database.");
    } catch (error) {
      console.error("Error deleting board:", error);
      toast("Something went wrong. Please try again.");
    }
  };

  // Reset and prepare forms for editing
  const prepareTaskForEdit = (task: Task) => {
    taskForm.reset({
      title: task.title,
      description: task.description || "",
      priority: task.priority,
      dueDate: task.dueDate || "",
      assignee: task.assignee || "",
    });
    setEditingTask(task);
  };

  // Get priority badge color
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800";
      case "medium":
        return "bg-yellow-100 text-yellow-800";
      case "low":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  // If data is still loading from Convex
  if (!planningBoardsData && boards.length === 0) {
    return (
      <div className="flex items-center justify-center h-[80vh]">
        <div className="flex flex-col items-center space-y-4">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="text-muted-foreground">Loading planning studio...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Planning Studio</h1>
          <p className="text-muted-foreground">
            Organize your tasks and projects
          </p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" onClick={saveAllData} disabled={isSaving}>
            {isSaving ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Saving...
              </>
            ) : (
              <>
                <Save className="mr-2 h-4 w-4" />
                Save Changes
              </>
            )}
          </Button>
          <Button onClick={() => setIsAddingBoard(true)}>
            <Plus className="mr-2 h-4 w-4" /> Add Board
          </Button>
        </div>
      </div>

      {/* Kanban Board Container */}
      <DndContext
        sensors={sensors}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {boards.map((board) => (
            <Card key={board.id} id={board.id} className="h-full">
              <CardHeader className="p-4 border-b flex flex-row justify-between items-center">
                <div>
                  <CardTitle>{board.title}</CardTitle>
                  <CardDescription>{board.description}</CardDescription>
                </div>
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setCurrentBoardId(board.id);
                      setIsAddingTask(true);
                    }}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onDeleteBoard(board.id)}
                  >
                    <Trash2 className="h-4 w-4 text-red-500" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-4 h-[500px] overflow-y-auto">
                <SortableContext
                  items={board.tasks.map((task) => task.id)}
                  strategy={verticalListSortingStrategy}
                >
                  {board.tasks.map((task) => (
                    <div
                      key={task.id}
                      id={task.id}
                      className="mb-3 p-3 bg-white rounded-lg shadow border border-gray-200 cursor-move"
                    >
                      <div className="flex justify-between items-start">
                        <h3 className="font-medium">{task.title}</h3>
                        <div className="flex space-x-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => prepareTaskForEdit(task)}
                          >
                            <Pencil className="h-3 w-3" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => onDeleteTask(task.id)}
                          >
                            <Trash2 className="h-3 w-3 text-red-500" />
                          </Button>
                        </div>
                      </div>
                      {task.description && (
                        <p className="text-sm text-gray-600 mt-1">
                          {task.description}
                        </p>
                      )}
                      <div className="mt-3 flex flex-wrap gap-2">
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${getPriorityColor(
                            task.priority
                          )}`}
                        >
                          {task.priority}
                        </span>
                        {task.dueDate && (
                          <span className="text-xs flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
                            <Calendar className="h-3 w-3" />
                            {new Date(task.dueDate).toLocaleDateString()}
                          </span>
                        )}
                        {task.assignee && (
                          <span className="text-xs flex items-center gap-1 px-2 py-1 bg-purple-100 text-purple-800 rounded-full">
                            <Users className="h-3 w-3" />
                            {task.assignee}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </SortableContext>
              </CardContent>
              <CardFooter className="p-4 border-t">
                <div className="text-sm text-gray-500">
                  {board.tasks.length} task{board.tasks.length !== 1 ? "s" : ""}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Drag Overlay */}
        <DragOverlay>
          {activeTask && (
            <div className="p-3 bg-white rounded-lg shadow border border-gray-200 w-72">
              <div className="flex justify-between items-start">
                <h3 className="font-medium">{activeTask.title}</h3>
              </div>
              {activeTask.description && (
                <p className="text-sm text-gray-600 mt-1">
                  {activeTask.description}
                </p>
              )}
              <div className="mt-3 flex flex-wrap gap-2">
                <span
                  className={`text-xs px-2 py-1 rounded-full ${getPriorityColor(
                    activeTask.priority
                  )}`}
                >
                  {activeTask.priority}
                </span>
              </div>
            </div>
          )}
        </DragOverlay>
      </DndContext>

      {/* Add Board Dialog */}
      <Dialog open={isAddingBoard} onOpenChange={setIsAddingBoard}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Board</DialogTitle>
            <DialogDescription>
              Create a new board to organize your tasks
            </DialogDescription>
          </DialogHeader>
          <Form {...boardForm}>
            <form
              onSubmit={boardForm.handleSubmit(onAddBoard)}
              className="space-y-4"
            >
              <FormField
                control={boardForm.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter board title" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={boardForm.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description (Optional)</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter board description"
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <DialogFooter>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setIsAddingBoard(false);
                    boardForm.reset();
                  }}
                >
                  Cancel
                </Button>
                <Button type="submit">Create Board</Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>

      {/* Add/Edit Task Dialog */}
      <Dialog
        open={isAddingTask || editingTask !== null}
        onOpenChange={(open) => {
          if (!open) {
            setIsAddingTask(false);
            setEditingTask(null);
            taskForm.reset();
          }
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {editingTask ? "Edit Task" : "Add New Task"}
            </DialogTitle>
            <DialogDescription>
              {editingTask
                ? "Update task details"
                : "Create a new task for your project"}
            </DialogDescription>
          </DialogHeader>
          <Form {...taskForm}>
            <form
              onSubmit={taskForm.handleSubmit(
                editingTask ? onEditTask : onAddTask
              )}
              className="space-y-4"
            >
              <FormField
                control={taskForm.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter task title" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={taskForm.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description (Optional)</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter task description"
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={taskForm.control}
                  name="priority"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Priority</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select priority" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="low">Low</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="high">High</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={taskForm.control}
                  name="dueDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Due Date (Optional)</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={taskForm.control}
                name="assignee"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Assignee (Optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter assignee name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <DialogFooter>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setIsAddingTask(false);
                    setEditingTask(null);
                    taskForm.reset();
                  }}
                >
                  Cancel
                </Button>
                <Button type="submit">
                  {editingTask ? "Update Task" : "Create Task"}
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
