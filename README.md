# MockMeet

> AI-powered mock interview platform with real-time video conferencing, intelligent agent interactions, and automated meeting summaries.

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://mock-meet.vercel.app)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-15.3-black)](https://nextjs.org/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## 🌟 Features

- **🎥 Real-time Video Calls**: High-quality video conferencing powered by Stream.io
- **🤖 AI Agents**: Customizable AI agents for mock interviews and practice sessions
- **📝 Auto Transcription**: Automatic meeting transcription with speaker detection
- **📊 AI Summaries**: GPT-4 powered meeting summaries with key takeaways
- **💬 Real-time Chat**: Integrated chat functionality during video calls
- **🎯 Agent Management**: Create and customize AI agents with specific instructions
- **📅 Meeting Management**: Schedule, track, and review all your mock interviews
- **🔐 Secure Authentication**: Email/password and OAuth (GitHub, Google) support
- **💳 Premium Features**: Subscription management via Polar with free tier available
- **🎨 Modern UI**: Beautiful, responsive interface built with Radix UI and Tailwind CSS

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v20 or higher)
- **PostgreSQL** database (Neon recommended)
- **API Keys** for:
  - OpenAI (GPT-4)
  - Stream.io (Video & Chat)
  - Polar (Payments)
  - Better Auth (Authentication)

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/Varshanth2025/MockMeet.git
cd MockMeet
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Set up the database**

```bash
# Push database schema
npm run db:push

# Open Drizzle Studio (optional)
npm run db:studio
```

4. **Run the development server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## 🏗️ Tech Stack

### Frontend
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: Radix UI, shadcn/ui
- **State Management**: TanStack Query, tRPC
- **Video**: Stream.io Video SDK
- **Chat**: Stream.io Chat SDK
- **Forms**: React Hook Form + Zod

### Backend
- **API**: tRPC (type-safe API layer)
- **Database**: PostgreSQL (Neon)
- **ORM**: Drizzle ORM
- **Authentication**: Better Auth (email + OAuth)
- **Payments**: Polar
- **Background Jobs**: Inngest
- **AI**: OpenAI GPT-4, Inngest Agent Kit

### Infrastructure
- **Deployment**: Vercel
- **Database**: Neon (Serverless Postgres)
- **Storage**: Stream.io (recordings & transcripts)

## 📁 Project Structure

```
MockMeet/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── (auth)/            # Authentication routes
│   │   ├── (dashboard)/       # Dashboard routes
│   │   ├── call/              # Video call routes
│   │   └── api/               # API routes (tRPC, webhooks)
│   ├── components/            # Reusable UI components
│   │   └── ui/                # shadcn/ui components
│   ├── db/                    # Database schema & config
│   ├── inngest/               # Background job functions
│   ├── lib/                   # Utility functions & SDK clients
│   ├── modules/               # Feature modules
│   │   ├── agents/           # Agent management
│   │   ├── auth/             # Authentication
│   │   ├── call/             # Video calling
│   │   ├── dashboard/        # Dashboard features
│   │   ├── home/             # Home page
│   │   ├── meetings/         # Meeting management
│   │   └── premium/          # Subscription features
│   ├── trpc/                 # tRPC setup & routers
│   └── __tests__/            # Test files
│       ├── unit/             # Unit tests
│       ├── integration/      # Integration tests
│       └── e2e/              # End-to-end tests
├── public/                    # Static assets
├── drizzle/                   # Database migrations
└── drizzle.config.ts         # Drizzle ORM config
```

## 🎯 Core Features Explained

### AI Agents

Create custom AI agents with specific instructions for different interview scenarios:

- **Customizable Instructions**: Define how the AI should interact
- **Avatar Generation**: Automatic avatar creation using DiceBear
- **Real-time Interaction**: AI responds during video calls using GPT-4

### Video Meetings

Powered by Stream.io for high-quality video conferencing:

- **HD Video & Audio**: Crystal clear communication
- **Screen Sharing**: Share your screen during interviews
- **Recording**: Automatic recording of all sessions
- **Transcription**: Real-time transcription with speaker detection

### Meeting Summaries

Automated AI-generated summaries using Inngest and GPT-4:

- **Transcript Processing**: Parse and organize meeting transcripts
- **Speaker Attribution**: Identify who said what
- **Key Takeaways**: Extract important points and insights
- **Structured Format**: Organized into Overview and themed sections

### Premium Features

Subscription management via Polar:

- **Free Tier**: Limited agents and meetings
- **Premium Plans**: Unlimited access to all features
- **Billing Portal**: Easy subscription management

## 🧪 Testing

This project implements comprehensive testing using industry-standard tools and methodologies.

### Testing Stack

- **Unit Testing**: Vitest (Next.js recommended, faster than Jest)
- **Component Testing**: React Testing Library
- **E2E Testing**: Playwright (cross-browser support)
- **API Testing**: MSW (Mock Service Worker)
- **Type Safety**: TypeScript + Zod schema validation
- **Code Coverage**: Vitest Coverage
- **Visual Testing**: Playwright Visual Comparisons

### Setup Testing Environment

```bash
# Install testing dependencies
npm install -D vitest @testing-library/react @testing-library/jest-dom @vitejs/plugin-react
npm install -D playwright @playwright/test
npm install -D msw @testing-library/user-event
npm install -D @vitest/coverage-v8
```

### Running Tests

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run unit tests only
npm run test:unit

# Run integration tests
npm run test:integration

# Run E2E tests
npm run test:e2e

# Run E2E tests in UI mode (interactive)
npm run test:e2e:ui

# Generate coverage report
npm run test:coverage

# Type checking
npm run type-check
```

### Test Structure

#### 1. **Unit Tests** (`src/__tests__/unit/`)

Testing individual functions, utilities, and hooks in isolation.

#### 2. **Component Tests** (`src/__tests__/unit/components/`)

Testing React components with user interactions.

#### 3. **Integration Tests** (`src/__tests__/integration/`)

Testing API routes, database operations, and tRPC procedures.

#### 4. **E2E Tests** (`src/__tests__/e2e/`)

#### 5. **API Mocking** (MSW)

Mock external API calls for consistent testing.


### Testing Best Practices

1. **Follow AAA Pattern**: Arrange, Act, Assert
2. **Test User Behavior**: Focus on what users do, not implementation
3. **Use Data-testid Sparingly**: Prefer accessible queries (role, label, text)
4. **Mock External Dependencies**: APIs, databases, third-party services
5. **Test Edge Cases**: Empty states, errors, loading states
6. **Keep Tests Independent**: Each test should run in isolation
7. **Maintain High Coverage**: Aim for >80% code coverage
8. **Test Accessibility**: Use `axe-core` for a11y testing

### Coverage Goals

- **Statements**: > 80%
- **Branches**: > 75%
- **Functions**: > 80%
- **Lines**: > 80%

### Continuous Integration

Tests run automatically on:
- Pull requests
- Commits to main branch
- Pre-deployment checks

```yaml
# Example: .github/workflows/test.yml
name: Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm ci
      - run: npm run test:coverage
      - run: npm run test:e2e
```

## 📜 Available Scripts

```bash
# Development
npm run dev              # Start dev server
npm run dev:webhook      # Start dev server with ngrok webhook tunnel

# Build & Deploy
npm run build           # Build for production
npm run start           # Start production server

# Database
npm run db:push         # Push schema changes to database
npm run db:studio       # Open Drizzle Studio

# Testing
npm run test            # Run all tests
npm run test:watch      # Run tests in watch mode
npm run test:unit       # Run unit tests
npm run test:integration # Run integration tests
npm run test:e2e        # Run E2E tests
npm run test:coverage   # Generate coverage report
npm run type-check      # TypeScript type checking

# Code Quality
npm run lint            # Run ESLint
```

## 🔧 Configuration

### Database Schema

The app uses the following main tables:
- `user`: User accounts and profiles
- `session`: Authentication sessions
- `agents`: AI agent configurations
- `meetings`: Meeting records and metadata

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Write tests for your changes
4. Ensure all tests pass (`npm run test`)
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Live Demo**: [https://mock-meet.vercel.app](https://mock-meet.vercel.app)

**Repository**: [https://github.com/Varshanth2025/MockMeet](https://github.com/Varshanth2025/MockMeet)
