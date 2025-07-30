# Auto Clean Car Wash Website

## Overview

This is a dynamic full-stack website for "Auto Clean Car Wash" business built with React, Express, and TypeScript. The website features a modern, responsive design with interactive elements, real-time service booking, package comparison tools, and service time estimates. It provides separate services for 4-wheelers (cars) and 2-wheelers (motorcycles and scooters).

## User Preferences

Preferred communication style: Simple, everyday language.
Requirements: Dynamic website (not static or app) with separate 4-wheeler and 2-wheeler services.

## Recent Changes (January 29, 2025)

✓ Updated all business content with real Auto Clean Car Wash details
✓ Integrated actual business images and promotional materials
✓ Updated contact number to +91 92272 46360 throughout site
✓ Added real business location: Thaltej, Ahmedabad 380059
✓ Updated pricing to match actual business rates (₹399-₹999)
✓ Replaced hero background with actual car wash facility image
✓ Added business gallery section showcasing real facility and pricing
✓ Updated service times for automatic car wash system (8-30 minutes)
✓ Enhanced package names to Standard/Fine/Premium Wash
✓ Added "Transform Dirt Into Glow" tagline from business materials

### Latest Updates (January 29, 2025 - Evening)
✓ Changed working hours from 8:00 AM - 8:00 PM to 10:00 AM - 7:00 PM
✓ Removed Before/After gallery section from website
✓ Updated address to "Opp. Victory Lane, Near Padmawati Bunglows, Near Bhavin school, Thaltej, Ahmedabad"
✓ Revised About section for new business (removed 10 years experience claim)
✓ Simplified 2-wheeler services to only Basic Wash (₹99) and Basic Wash + Polish (₹199)
✓ Updated 4-wheeler packages: removed basic interior vacuum from Standard, simplified Fine wash features, added dashboard/tire polish to Premium
✓ Removed all instances of engine bay cleaning from services
✓ Updated social media to only Instagram and WhatsApp (removed Facebook, Twitter, email)
✓ Added real Instagram link: https://www.instagram.com/autocleancar.wash

## System Architecture

The application follows a monorepo structure with clear separation between client-side and server-side code:

- **Frontend**: React SPA with TypeScript, using Vite as the build tool
- **Backend**: Express.js server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for client-side routing

## Key Components

### Frontend Architecture
- **Component Library**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens and dark mode support
- **Form Handling**: React Hook Form with Zod validation
- **HTTP Client**: Custom fetch wrapper with error handling
- **Build Tool**: Vite with React plugin and development optimizations

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database ORM**: Drizzle with PostgreSQL dialect
- **Storage**: Abstracted storage interface with in-memory implementation for development
- **Middleware**: JSON parsing, URL encoding, request logging, and error handling
- **Development**: Vite middleware integration for SSR during development

### Database Schema
The application uses two main entities:
- **Users**: Basic user authentication structure (id, username, password)
- **Contact Forms**: Service booking requests with customer details and preferences

### Component Structure
- **Navigation**: Fixed header with smooth scrolling to sections
- **Hero Section**: Landing area with call-to-action buttons
- **Services Overview**: Display of car and motorcycle services
- **Package Comparison**: Pricing tiers for different service levels
- **Before/After Gallery**: Visual showcase of service quality
- **About Section**: Business information and statistics
- **Contact Section**: Booking form with validation
- **Footer**: Contact information and social links

## Data Flow

1. **Client Requests**: React components use TanStack Query for data fetching
2. **API Layer**: Express routes handle business logic and data validation
3. **Data Storage**: Drizzle ORM manages database interactions
4. **Response Handling**: Standardized JSON responses with error handling
5. **State Management**: React Query manages caching and synchronization

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React 18 with TypeScript
- **Component Library**: Radix UI primitives with shadcn/ui
- **Styling**: Tailwind CSS with PostCSS
- **Forms**: React Hook Form with Hookform/resolvers
- **Validation**: Zod for schema validation
- **HTTP Client**: TanStack Query for server state
- **Routing**: Wouter for lightweight routing
- **Build**: Vite with various plugins

### Backend Dependencies
- **Runtime**: Node.js with Express
- **Database**: PostgreSQL via Neon serverless
- **ORM**: Drizzle with Drizzle Kit for migrations
- **Validation**: Zod for request/response validation
- **Session**: Connect-pg-simple for PostgreSQL session storage
- **Development**: tsx for TypeScript execution

### Development Tools
- **TypeScript**: Strict type checking across the stack
- **ESBuild**: Production bundling for server code
- **Replit Integration**: Development banner and cartographer plugin

## Deployment Strategy

### Development
- **Client**: Vite dev server with HMR and error overlay
- **Server**: tsx with automatic restart on changes
- **Database**: Drizzle Kit for schema management and migrations
- **Integration**: Vite middleware serves client through Express in development

### Production
- **Client**: Static build served from Express server
- **Server**: Compiled JavaScript bundle with ESBuild
- **Database**: PostgreSQL connection via environment variables
- **Assets**: Static file serving for client build artifacts

### Environment Configuration
- **DATABASE_URL**: PostgreSQL connection string (required)
- **NODE_ENV**: Environment mode (development/production)
- **REPL_ID**: Replit-specific configuration for development features

The application is designed to be deployed on platforms like Replit, with automatic database provisioning and integrated development tools.