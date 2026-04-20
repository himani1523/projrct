# Task Manager Backend

A Node.js/Express API server for the Task Manager application.

## Features

- ✅ RESTful API for task management
- ✅ MongoDB database integration
- ✅ CORS enabled for frontend communication
- ✅ CRUD operations (Create, Read, Update, Delete)
- ✅ Task status management (Pending/Completed)

## Tech Stack

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **CORS** - Cross-origin resource sharing

## API Endpoints

### Tasks
- `GET /api/tasks` - Get all tasks
- `POST /api/tasks` - Create a new task
- `PUT /api/tasks/:id` - Update a task
- `DELETE /api/tasks/:id` - Delete a task

### Task Schema
```json
{
  "title": "String",
  "description": "String",
  "status": "Pending" | "Completed",
  "createdAt": "Date"
}
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (running locally or connection string)

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Make sure MongoDB is running on `mongodb://127.0.0.1:27017/taskdb`

3. Start the server:
   ```bash
   npm start
   ```

   For development with auto-restart:
   ```bash
   npm run dev
   ```

4. The API will be available at `http://localhost:5000`

## Environment Variables

Create a `.env` file in the root directory:

```
MONGODB_URI=mongodb://127.0.0.1:27017/taskdb
PORT=5000
```

## Project Structure

```
backend/
├── config/
│   └── db.js          # Database connection
├── controllers/
│   └── taskcontroller.js  # Business logic (currently unused)
├── model/
│   └── task.js        # Task data model
├── routes/
│   └── taskRoutes.js  # API routes
├── server.js          # Main server file
└── package.json
```