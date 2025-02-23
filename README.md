This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## About the Project

This project is a fake store using the [Fake Store API](https://fakestoreapi.com/), for the MySide Frontend Assessment.

Vercel Link: https://myside-frontend-nextjs-assessment.vercel.app/

## Project Folder Structure

```
/project-root
├── public               # Static assets
├── src
│   ├── /app                # Main application routes
│   ├── /components         # Reusable components
│   │   ├── /core           # Primitive components like Text, VStack, HStack, Input, etc.
│   │   ├── /custom         # Custom components that use the primitive components with more complex logic
│   ├── /providers          # Providers, for state management, context, etc.
│   ├── /mocks              # Mock data for testing
│   ├── /services           # Services - Base API Service Configuration and Endpoints
│   ├── /lib                # Library Utils (Styled Components, etc)
│   ├── /types              # TypeScript types
└── README.md           # Project documentation
```

## File and Folder Naming Conventions

- **index.tsx**: Main file for the component
- **styles.module.css**: Styles for pages
- **styles.ts**: Styles for components
- **types.ts**: Interface and types for the component
- **utils.ts**: Utility functions for the component
- **folders**: main folder (app, components, providers, mocks, pages, services, lib, types) uses kebab-case, and the sub-folders uses PascalCase.

## Libraries

This project uses the following libraries:

- [Next.js](https://nextjs.org) - Framework for server-rendered React applications.
- [React](https://reactjs.org) - JavaScript library for building user interfaces.
- [TypeScript](https://www.typescriptlang.org/) - A typed superset of JavaScript.
- [Jest](https://jestjs.io/) - JavaScript testing framework.
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) - Testing utilities for React.
- [Lucide](https://lucide.dev/) - Icon library.
- [Styled Components](https://styled-components.com/) - CSS-in-JS library.

## Technical Decisions

- **State Management**: **Context API**, Local State and Hooks.
- **Styling**: **CSS Modules** and **Styled Components**.
- **Routing**: **Next.js Routing**.
- **Testing**: **React Testing Library** and **Jest**.
- **API Calls**: **Fetch API** and **Dependency Injection** for mocking or customizing the API.

## What I Could Improve

- **Error Handling** - Add a better error handling strategy.
- **Theming** - Add a better theming strategy, with defined colors, fonts, etc.
- **State Management** - Use a better state management solution, like **Zustand** or **Redux**.
- **Styling** - Improve the css.modules organization, add default styles for both css modules and styled components.
- **Design** - Improve the design of the app, add animations, transitions, etc.
- **Testing** - Add more tests, both unit and integration, and more complex scenarions. I ran out of time to add more tests.
- **Documentation** - Add JSDoc to the code.

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

#### 1. Clone the repository

```bash
git clone https://github.com/lnormanha/myside-frontend-nextjs-assessment.git
```

#### 2. Update Setup (env etc)

To set up the environment, create a `.env` file in the root directory and add the following variables, following the `env.example` file:

```
NEXT_PUBLIC_API_URL=your_api_url
```

Make sure to replace the placeholders with your actual values.

#### 3. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

#### 4. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
