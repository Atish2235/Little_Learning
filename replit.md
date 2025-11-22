# Little Learnings Preschool Website

## Overview

A playful, engaging preschool website built for "Little Learnings Preschool" featuring a modern single-page application with contact form functionality. The site targets both children (with colorful, playful design) and parents (with professional, informative content) to showcase programs, facilities, and enrollment opportunities for ages 18 months to 6 years.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Routing**
- React 18+ with TypeScript for type-safe component development
- Wouter for lightweight client-side routing
- Single-page application (SPA) architecture with component-based structure

**UI Component System**
- shadcn/ui component library (Radix UI primitives with Tailwind styling)
- "New York" style variant from shadcn configuration
- Comprehensive set of pre-built components (buttons, cards, forms, dialogs, etc.)

**Styling Approach**
- Tailwind CSS for utility-first styling
- Custom design system with playful educational theme:
  - Primary color: Pink/Magenta (#ff1654 - 340° 95% 55%)
  - Secondary color: Turquoise (#00C8C8 - 190° 75% 50%)
  - Accent color: Yellow (#FFD11A - 45° 100% 60%)
- Custom fonts via Google Fonts:
  - Fredoka (primary): Rounded, friendly font for headings
  - Poppins (secondary): Professional font for body text
- Custom CSS variables for theming and consistent elevation/shadow system
- Hover and active state elevation effects for interactive elements

**State Management**
- TanStack Query (React Query) for server state management
- Local component state with React hooks
- Toast notifications for user feedback

### Backend Architecture

**Server Framework**
- Express.js application with TypeScript
- Dual-mode operation:
  - Development: Vite dev server with HMR
  - Production: Static file serving from built assets

**API Structure**
- RESTful endpoints under `/api` prefix
- POST `/api/contact` - Contact form submission with Zod validation
- Request logging middleware with timing information
- JSON body parsing with raw body preservation for webhooks

**Build System**
- Vite for frontend bundling and development
- esbuild for backend production bundling
- TypeScript compilation across entire stack
- Path aliases for cleaner imports (@/, @shared/, @assets/)

### Data Storage Solutions

**Database**
- PostgreSQL via Neon Database (serverless Postgres)
- Drizzle ORM for type-safe database operations
- Schema definition in shared directory for client/server type sharing
- Migration system via drizzle-kit

**Current Schema**
- Users table with UUID primary keys
- Username/password authentication structure (scaffolded but not actively used)

**In-Memory Fallback**
- MemStorage implementation for development/testing without database
- Implements IStorage interface for easy swapping

### Authentication & Authorization

**Current State**
- Basic user schema defined but authentication not implemented in contact flow
- Session infrastructure scaffolded (connect-pg-simple for session storage)
- Public website with no protected routes

### Page Structure & Components

**Page Architecture**
- Single home page (`/`) with multiple sections
- Sections as reusable components:
  - Navigation (fixed header with mobile menu)
  - Hero (full-height with background image and CTAs)
  - About (statistics and welcome message)
  - WhyChooseUs (feature grid)
  - Programs (age-based program cards)
  - Gallery (masonry-style image grid)
  - Testimonials (parent reviews)
  - Contact (form with location info)
  - Footer (links and social media)

**Design Implementation**
- Follows design_guidelines.md specification
- Responsive breakpoints: mobile-first with md/lg breakpoints
- Generous whitespace (py-16 to py-24 section padding)
- Animated elements (floating shapes, pulse effects, hover elevations)

## External Dependencies

### Third-Party Services

**Required Services**
- PostgreSQL Database (Neon recommended, DATABASE_URL environment variable)
- Email service integration needed for contact form functionality (currently logged only)

**Asset Requirements**
- Static images in `/attached_assets/generated_images/` directory
- Images include: hero, about section, programs, gallery, testimonials

### Key NPM Packages

**UI & Styling**
- @radix-ui/* - 20+ headless UI component primitives
- tailwindcss - Utility-first CSS framework
- class-variance-authority - Type-safe variant styling
- lucide-react - Icon library

**Backend & Database**
- express - Web server framework
- drizzle-orm - TypeScript ORM
- @neondatabase/serverless - Postgres client
- zod - Runtime type validation
- connect-pg-simple - PostgreSQL session store

**Development Tools**
- vite - Build tool and dev server
- tsx - TypeScript execution for Node.js
- @replit/* plugins - Replit-specific development enhancements

**State & Forms**
- @tanstack/react-query - Server state management
- react-hook-form - Form handling
- @hookform/resolvers - Validation resolver for Zod schemas

### Environment Configuration

**Required Environment Variables**
- `DATABASE_URL` - PostgreSQL connection string
- `NODE_ENV` - development/production mode flag

**Build Scripts**
- `dev` - Development server with hot reload
- `build` - Production build (client + server)
- `start` - Production server
- `db:push` - Push schema changes to database