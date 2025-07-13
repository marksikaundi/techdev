# TechDev Blog Platform

A modern tech blog platform with admin dashboard for content management. Built with Next.js, Clerk Authentication, and Convex database.

## Features

- 🔒 Authentication with Clerk
- 📝 Blog management system
- 👤 Admin dashboard
- 🎨 Modern UI with Tailwind CSS and Radix UI
- 🔄 Real-time updates with Convex

## Tech Stack

- **Frontend**: Next.js 15, React 19, Tailwind CSS
- **Authentication**: Clerk
- **Database**: Convex
- **Styling**: Tailwind CSS, Radix UI components
- **Form Handling**: React Hook Form with Zod validation

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/yourusername/techdev.git
   cd techdev
   ```

2. Install dependencies

   ```bash
   pnpm install
   ```

3. Set up environment variables

   - Copy `.env.example` to `.env.local`
   - Fill in your Clerk and Convex credentials

4. Start the development servers

   Start the Convex development server:

   ```bash
   npx convex dev
   ```

   In a new terminal, start the Next.js development server:

   ```bash
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Admin Dashboard

The admin dashboard is protected and only accessible to authenticated users:

- Access at: `/admin/dashboard`
- Features:
  - Blog creation and management
  - User statistics
  - Analytics (coming soon)

## Authentication

This project uses Clerk for authentication:

- Sign Up: `/auth/sign-up`
- Sign In: `/auth/sign-in`
- Sign Out: `/auth/sign-out`

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Clerk Documentation](https://clerk.com/docs)
- [Convex Documentation](https://docs.convex.dev)
