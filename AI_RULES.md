# AI Rules for Primo Safo App

## Tech Stack

- **Frontend Framework**: React with TypeScript for building the user interface, ensuring type safety and maintainability.
- **Build Tool**: Vite for fast development and optimized production builds.
- **Styling**: Tailwind CSS for utility-first styling, with custom CSS variables for design system consistency.
- **UI Components**: shadcn/ui library built on Radix UI primitives for accessible, customizable components.
- **Routing**: React Router for client-side navigation and page management.
- **State Management**: TanStack Query (React Query) for server state management, caching, and API interactions.
- **Icons**: Lucide React for consistent, scalable iconography throughout the app.
- **Forms**: React Hook Form with Zod for form validation and handling.
- **Notifications**: Sonner for toast notifications to provide user feedback.
- **Development**: ESLint for code linting and TypeScript for static type checking.

## Library Usage Rules

- **UI Components**: Always use shadcn/ui components (e.g., Button, Card, Input) for consistency. Do not create custom components unless a specific variant is needed that shadcn/ui doesn't provide.
- **Icons**: Use only Lucide React icons. Import them directly from 'lucide-react' and use them consistently across the app.
- **Styling**: Apply Tailwind CSS classes extensively for layout, spacing, colors, and responsiveness. Avoid inline styles or custom CSS unless absolutely necessary.
- **Forms**: Use React Hook Form for all form handling, paired with Zod for schema validation. Integrate with shadcn/ui form components.
- **API Calls**: Use TanStack Query for all data fetching, caching, and mutations. Avoid direct fetch calls or other libraries.
- **Routing**: Manage all routes in src/App.tsx using React Router. Keep routes simple and organized.
- **Notifications**: Use Sonner for all toast notifications. Import and use the toast utility functions for success, error, and loading states.
- **Dependencies**: Only add new dependencies if they are essential and not already covered by existing libraries. Prefer shadcn/ui and built-in React features.
- **File Structure**: Place pages in src/pages/, components in src/components/, and utilities in src/lib/ or src/utils/. Keep components small and focused.
- **Code Quality**: Ensure all code is TypeScript-compliant, follows ESLint rules, and uses the established naming conventions and patterns.