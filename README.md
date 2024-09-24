# Todo App

This is a simple Todo Application built using Node.js, Express, MongoDB, and EJS as the templating engine. The app allows users to add, update, delete, and filter tasks, with both server-side and client-side validation.

## Features

- **Add Todo**: Create new tasks with a name, description, and date/time.
- **Update Todo**: Edit task details or mark/unmark a task as done.
- **Delete Todo**: Remove tasks from the list.
- **Filter Tasks**: Filter tasks by status: All, Done, and Upcoming (not yet marked as done or time passed).
- **Validation**: Client-side and server-side validation for adding and updating tasks.
- **Database**: Todos are stored in MongoDB, with fields for name, description, and date/time.

## Tech Stack

- **Node.js**: Backend JavaScript runtime environment.
- **Express.js**: Web framework for Node.js to create the API and routing logic.
- **MongoDB**: NoSQL database for storing todo items.
- **Mongoose**: ODM library for MongoDB to interact with the database.
- **EJS**: Templating engine used to render dynamic HTML pages.
- **AJAX**: Used for filtering todos asynchronously without reloading the entire page.
- **ES6**: Modern JavaScript features used throughout the project.

## Installation

### Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/RockyPukar1/proshore-todolkist-task.git
   cd todo-app
   ```

2. **Move the sample.env to .env**

   ```bash
   cp sample.env .env
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

4. **Start the project**

   ```bash
   npm start
   ```