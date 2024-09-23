# Todo App

A simple Todo application built using **Next.js** and **Tailwind CSS**. This app allows users to manage their todos with features like adding new todos, updating the task name, marking tasks as completed/undo, and deleting tasks.

## Features

- Display a list of all todos.
- Add a new todo.
- Mark a todo as completed or undo.
- Update the name of a todo.
- Delete a todo.

## Tech Stack

- **Frontend**: Next.js, Tailwind CSS
- **Backend**: Next.js API Routes

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/nachiket-more/UpUnikSelf-exercise
   cd UpUnikSelf-exercise
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

The app will be running at http://localhost:3000

## API Endpoints
The app includes a backend with four main routes for managing todos:

- GET /api/todos: Fetch all todos.
- POST /api/todos: Create a new todo.
- PATCH /api/todos/:id: Update an existing todo (e.g., mark as completed, edit task name).
- DELETE /api/todos/:id: Delete a todo.

## Usage
- View Todos: All current todos will be displayed on the homepage.
- Add Todo: Use the input form at the top to add a new todo.
- Mark as Completed/Undo: Click on the checkbox to mark a task as completed or undo it.
- Edit Task Name: Click on the edit button to modify the task name.
- Delete Todo: Use the delete button to remove a todo from the list.