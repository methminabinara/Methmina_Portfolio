# Portfolio Website

## Overview

This is a professional software engineer portfolio website built as a single-page application (SPA). It showcases projects, technical skills, certifications, and professional services through a modern, responsive interface. The application features a dark-mode-first design inspired by developer tools like GitHub, Linear, and Vercel.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18 with TypeScript running in a single-page application model using Wouter for client-side routing.

**UI Component System**: Built on shadcn/ui components with Radix UI primitives, providing accessible, composable interface elements. The design system uses Tailwind CSS for styling with custom CSS variables for theming.

**State Management**: TanStack Query (React Query) handles server state and data fetching. Local UI state managed through React hooks and context (ThemeProvider).

**Theming**: Dark mode is the default theme with light mode support. Theme state persists to localStorage and is managed globally via React Context.

**Build System**: Vite serves as the development server and build tool, configured with React plugin and custom Replit plugins for development tooling.

### Backend Architecture

**Server Framework**: Express.js running on Node.js with TypeScript.

**Development/Production Split**: In development, Vite middleware integrates with Express for HMR (Hot Module Replacement). In production, Express serves pre-built static assets from the `dist/public` directory.

**Storage Layer**: Currently implements an in-memory storage interface (`MemStorage`) with a defined `IStorage` interface for future database integration. The interface is designed to be swapped with a database-backed implementation.

**API Design**: RESTful API pattern with `/api` prefix for all backend routes. Routes are registered through a centralized `registerRoutes` function.

### Data Storage

**Current Implementation**: In-memory storage using JavaScript Map for development/demo purposes.

**Schema Definition**: Database schemas defined using Drizzle ORM with PostgreSQL dialect. Schema includes user authentication tables with UUID primary keys.

**Migration Strategy**: Drizzle Kit configured for schema management with migrations output to `./migrations` directory.

**Planned Database**: Configured for PostgreSQL via Neon serverless driver (`@neondatabase/serverless`). Connection expects `DATABASE_URL` environment variable.

### Design System

**Typography**: Inter font family for headings and body text, JetBrains Mono for code/technical elements.

**Color System**: HSL-based color tokens with support for light and dark themes. Primary brand color is professional blue (215° hue). All colors defined as CSS custom properties for easy theming.

**Component Styling**: Utility-first approach with Tailwind CSS. Custom utilities for elevation effects (`hover-elevate`, `active-elevate-2`) create consistent interactive feedback.

**Spacing**: Consistent spacing scale based on 4px increments (4, 8, 12, 16, 20, 24, 32).

**Responsive Design**: Mobile-first breakpoints with max-width containers (`max-w-7xl`) for content.

### Authentication & Authorization

**Current State**: Basic user schema defined but no authentication implementation in place.

**User Schema**: Username/password fields with unique username constraint, UUID-based primary keys.

**Session Management**: Package `connect-pg-simple` included for PostgreSQL-backed session storage (not yet implemented).

## External Dependencies

### UI & Styling

- **Radix UI**: Comprehensive suite of unstyled, accessible UI primitives (accordion, dialog, dropdown, popover, toast, etc.)
- **shadcn/ui**: Pre-built component patterns built on Radix UI
- **Tailwind CSS**: Utility-first CSS framework with PostCSS for processing
- **class-variance-authority**: Component variant management
- **Embla Carousel**: Touch-friendly carousel component
- **React Icons**: Icon library (Simple Icons for brand logos)

### Data & Forms

- **TanStack Query**: Server state management and data synchronization
- **React Hook Form**: Form state management
- **Zod**: Schema validation
- **@hookform/resolvers**: Integration between React Hook Form and Zod

### Backend & Database

- **Drizzle ORM**: TypeScript ORM for SQL databases with type-safe query building
- **@neondatabase/serverless**: Neon Postgres serverless driver for edge/serverless environments
- **drizzle-zod**: Generate Zod schemas from Drizzle tables
- **connect-pg-simple**: PostgreSQL session store for Express

### Development Tools

- **Vite**: Fast development server and build tool
- **TypeScript**: Static type checking across client and server
- **ESBuild**: Fast JavaScript bundler for server-side production builds
- **@replit/vite-plugin-***: Replit-specific development tooling (cartographer, dev banner, error overlay)

### Routing

- **Wouter**: Lightweight client-side routing library (1.5KB alternative to React Router)

### Utilities

- **date-fns**: Modern date utility library
- **nanoid**: Compact URL-friendly unique ID generator
- **clsx** & **tailwind-merge**: Utility for conditional className construction