
# Bettermode Articles

**Bettermode Articles** is a React.js application developed using Vite and TypeScript. The application integrates with a GraphQL API using Apollo Client and features user session management. End-to-end tests are written with Cypress.

## Table of Contents

1. [Project Setup](#project-setup)
2. [Configuration](#configuration)
3. [Running the Application](#running-the-application)
4. [Running Tests](#running-tests)
5. [Building for Production](#building-for-production)
6. [Accessing the Live Version](#accessing-the-live-version)
7. [Key Features](#key-features)

## Project Setup

### Prerequisites

Ensure that the following software is installed on your machine:

- **Node.js** (v20 or later)
- **npm**

### Installation

Follow these steps to set up the project locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/sina-developer/bettermode-articles.git
   ```

2. Navigate into the project directory:

   ```bash
   cd bettermode-articles
   ```

3. Install the dependencies:

   using npm:

   ```bash
   npm install
   ```

## Configuration

To configure the project, you need to create an `.env` file in the root directory of the project.

Set the environment variables inside the `.env` file to suit your project's configuration. For example:

   ```env
   VITE_GRAPHQL_API_URL=https://api.bettermode.com/
   VITE_API_TOKEN=session-token
   VITE_API_IMG_BASE_URL=https://tribe-s3-production.imgix.net/
   ```

The key environment variables you should configure:

- `VITE_GRAPHQL_API_URL`: The URL of the GraphQL API the application will use.
- `VITE_API_TOKEN`: A token used for managing user sessions.
- `VITE_API_IMG_BASE_URL`: The URL of the Image provider storage.

## Running the Application

To start the development server and run the application locally:

1. Run the following command:

   Using npm:

   ```bash
   npm run dev
   ```

2. By default, the application will be available at [http://localhost:5174](http://localhost:5174).

## Running Tests

End-to-end tests for this project are written using Cypress.

### Steps to Run Tests

1. Start the development server (if not already running):

   Using npm:

   ```bash
   npm run dev
   ```

2. In a new terminal window, run the Cypress tests:

   Using npm:

   ```bash
   npm run test
   ```

This will open the Cypress test runner, allowing you to execute your end-to-end tests.

## Building for Production

To build the application for production, follow these steps:

1. Run the build command:

   Using npm:

   ```bash
   npm run build
   ```

2. To preview the production build locally, run:

   Using npm:

   ```bash
   npm run preview
   ```

This will launch a local server to serve the production build for testing.

## Accessing the Live Version

A live version of the app is hosted at:

[https://bettermode-articles.vercel.app/](https://bettermode-articles.vercel.app/)

You can visit this URL to access the deployed version of the application.

## Key Features

- **Vite + TypeScript** for modern, fast development.
- **React.js** for building interactive user interfaces.
- **GraphQL** integration using **Apollo Client**.
- **User session management** for secure and personalized access.
- **Cypress** for writing and running end-to-end tests.
