// Importing dependencies
const express = require('express');
const app = express();

// Routing
const tasks = require('./routes/tasks'); // imports the tasks route module from the './routes'  directory

// Database Connection
const connectDB = require('./db/connect');

// Environment Configuration
require('dotenv').config(); // Loads environment variables from  a '.env' file into 'process.env'.It is used to store sensiteve info eg. database connection strings

const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

// middleware
app.use(express.static('./public'));
app.use(express.json());

// routes
app.use('/api/v1/tasks', tasks); // mount the 'tasks' router at the path '/api/v1/tasks'

// Routes for Task Management:
// app.get('/api/v1/tasks')         - get all the tasks
// app.post('/api/v1/tasks')        - create a new task
// app.get('/api/v1/tasks/:id')     - get single task
// app.patch('/api/v1/tasks/:id')   - update task
// app.delete('/api/v1/tasks/:id')  - delete task

app.use(notFound);
app.use(errorHandlerMiddleware);

const port = 7000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI); // connect to the MongoDB using the connection function with the URI  in the environment variables
    app.listen(port, () => {
      console.log(`App is running at http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
