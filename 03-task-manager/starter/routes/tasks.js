const express = require('express');
const router = express.Router();

const {
  getAllTask,
  createTask,
  getTask,
  updateTask,
  deleteTask,
} = require('../controllers/task');

// Defining Routes:
router.route('/').get(getAllTask).post(createTask);
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);

/*
These lines define the routes for the tasks. The router.route() method is used to create route handlers for specific HTTP methods on the specified path.

For the root path (/):
GET requests will be handled by the getAllTask controller function.
POST requests will be handled by the createTask controller function.

For paths with a task ID (/:id):
GET requests will be handled by the getTask controller function.
PATCH requests will be handled by the updateTask controller function.
DELETE requests will be handled by the deleteTask controller function.
*/

module.exports = router;

/*By organizing routes and controllers separately, this code adheres to the concept of separation of concerns, making the codebase modular and easier to maintain. The controllers (../controllers/task) are responsible for handling the business logic, while the router (./routes/tasks) takes care of defining the routes and connecting them to the appropriate controller functions.
 */
