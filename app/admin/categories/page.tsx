"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Pencil,
  Trash2,
  MoreVertical,
  Plus,
  Search,
  Tag,
  Hash,
  BookOpen,
  Folder,
} from "lucide-react";

// Form schema for category
const categoryFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  slug: z.string().min(2, "Slug must be at least 2 characters"),
  description: z.string().optional(),
});

export default function AdminCategories() {
  const [categories, setCategories] = useState([
    {
      id: 1,
      name: "Tutorial",
      slug: "tutorial",
      description: "Step-by-step guides to learn new skills",
      postsCount: 12,
    },
    {
      id: 2,
      name: "React",
      slug: "react",
      description: "Everything about React and React ecosystem",
      postsCount: 8,
    },
    {
      id: 3,
      name: "TypeScript",
      slug: "typescript",
      description: "TypeScript tutorials and best practices",
      postsCount: 5,
    },
    {
      id: 4,
      name: "CSS",
      slug: "css",
      description: "CSS tips, tricks, and advanced techniques",
      postsCount: 7,
    },
    {
      id: 5,
      name: "Tools",
      slug: "tools",
      description: "Developer tools and productivity tips",
      postsCount: 4,
    },
    {
      id: 6,
      name: "Development",
      slug: "development",
      description: "General web development topics",
      postsCount: 10,
    },
    {
      id: 7,
      name: "Security",
      slug: "security",
      description: "Web security tips and best practices",
      postsCount: 3,
    },
    {
      id: 8,
      name: "Animation",
      slug: "animation",
      description: "Web animations and interactive experiences",
      postsCount: 2,
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState<any>(null);
  const [isEditOpen, setIsEditOpen] = useState(false);

  // Initialize form
  const form = useForm<z.infer<typeof categoryFormSchema>>({
    resolver: zodResolver(categoryFormSchema),
    defaultValues: {
      name: "",
      slug: "",
      description: "",
    },
  });

  // Handle category form submission
  function onSubmit(values: z.infer<typeof categoryFormSchema>) {
    if (editingCategory) {
      // Update existing category
      setCategories(
        categories.map((cat) =>
          cat.id === editingCategory.id ? { ...cat, ...values } : cat
        )
      );
      setIsEditOpen(false);
    } else {
      // Add new category
      setCategories([
        ...categories,
        {
          id: categories.length + 1,
          ...values,
          postsCount: 0,
        },
      ]);
      setIsAddOpen(false);
    }

    form.reset();
  }

  // Handle delete category
  const handleDeleteCategory = (id: number) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this category?"
    );
    if (confirmDelete) {
      setCategories(categories.filter((cat) => cat.id !== id));
    }
  };

  // Handle edit category
  const handleEditCategory = (category: any) => {
    setEditingCategory(category);
    form.reset({
      name: category.name,
      slug: category.slug,
      description: category.description || "",
    });
    setIsEditOpen(true);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Categories</h1>
          <p className="text-gray-600">Manage your blog categories</p>
        </div>
        <Dialog open={isAddOpen} onOpenChange={setIsAddOpen}>
          <DialogTrigger asChild>
            <Button className="bg-cyan-500 hover:bg-cyan-600 text-white">
              <Plus className="h-4 w-4 mr-2" />
              New Category
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Category</DialogTitle>
              <DialogDescription>
                Create a new category for your blog posts.
              </DialogDescription>
            </DialogHeader>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="e.g. JavaScript"
                          {...field}
                          onChange={(e) => {
                            field.onChange(e);
                            // Auto-generate slug from name
                            const slug = e.target.value
                              .toLowerCase()
                              .replace(/\s+/g, "-")
                              .replace(/[^a-z0-9-]/g, "");
                            form.setValue("slug", slug);
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="slug"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Slug</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Hash className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                          <Input className="pl-10" {...field} />
                        </div>
                      </FormControl>
                      <FormDescription>
                        Used in URLs, auto-generated from name
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description (Optional)</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Brief description of this category"
                          {...field}
                          value={field.value || ""}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <DialogFooter className="mt-6">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => {
                      form.reset();
                      setIsAddOpen(false);
                    }}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    className="bg-cyan-500 hover:bg-cyan-600 text-white"
                  >
                    Add Category
                  </Button>
                </DialogFooter>
              </form>
            </Form>
          </DialogContent>
        </Dialog>

        {/* Edit Category Dialog */}
        <Dialog open={isEditOpen} onOpenChange={setIsEditOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit Category</DialogTitle>
              <DialogDescription>
                Update the details of this category.
              </DialogDescription>
            </DialogHeader>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="e.g. JavaScript"
                          {...field}
                          onChange={(e) => {
                            field.onChange(e);
                            // Don't auto-update slug when editing
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="slug"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Slug</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Hash className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                          <Input className="pl-10" {...field} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description (Optional)</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Brief description of this category"
                          {...field}
                          value={field.value || ""}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <DialogFooter className="mt-6">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => {
                      form.reset();
                      setEditingCategory(null);
                      setIsEditOpen(false);
                    }}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    className="bg-cyan-500 hover:bg-cyan-600 text-white"
                  >
                    Update Category
                  </Button>
                </DialogFooter>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Search */}
      <Card className="p-4 mb-6 border-gray-200">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search categories..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </Card>

      {/* Categories grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {categories
          .filter((cat) =>
            cat.name.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((category) => (
            <Card key={category.id} className="p-4 border-gray-200 relative">
              <div className="absolute top-4 right-4">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem
                      onClick={() => handleEditCategory(category)}
                    >
                      <Pencil className="mr-2 h-4 w-4" />
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="text-red-600"
                      onClick={() => handleDeleteCategory(category.id)}
                    >
                      <Trash2 className="mr-2 h-4 w-4" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div className="mb-2 flex items-center">
                <Tag className="h-5 w-5 text-cyan-500 mr-2" />
                <h3 className="font-semibold text-lg">{category.name}</h3>
              </div>
              <p className="text-gray-500 text-sm mb-4">
                {category.description || "No description"}
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center text-gray-500 text-sm">
                  <Hash className="h-3 w-3 mr-1" />
                  {category.slug}
                </div>
                <div className="flex items-center">
                  <BookOpen className="h-4 w-4 text-gray-400 mr-1" />
                  <span className="text-sm text-gray-600">
                    {category.postsCount}{" "}
                    {category.postsCount === 1 ? "post" : "posts"}
                  </span>
                </div>
              </div>
            </Card>
          ))}
      </div>

      {/* Category posts count */}
      <Card className="p-6 border-gray-200">
        <h2 className="text-lg font-semibold mb-4">Categories Overview</h2>
        <div className="space-y-4">
          {categories
            .filter((cat) =>
              cat.name.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .sort((a, b) => b.postsCount - a.postsCount)
            .map((category) => (
              <div key={category.id}>
                <div className="flex justify-between items-center mb-1">
                  <div className="flex items-center">
                    <Folder className="h-4 w-4 text-gray-400 mr-2" />
                    <span className="font-medium">{category.name}</span>
                  </div>
                  <span className="text-gray-500 text-sm">
                    {category.postsCount}{" "}
                    {category.postsCount === 1 ? "post" : "posts"}
                  </span>
                </div>
                <div className="relative pt-1">
                  <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
                    <div
                      style={{
                        width: `${Math.min(
                          (category.postsCount / 12) * 100,
                          100
                        )}%`,
                      }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-cyan-500"
                    ></div>
                  </div>
                </div>
                <Separator className="mt-4" />
              </div>
            ))}
        </div>
      </Card>
    </div>
  );
}
