const mongoose = require('mongoose');

// Defining TaskSchema
const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'must have a name'],
    trim: true,
    maxlength: [20, 'name cannot exceed 20 characters'],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('Task', TaskSchema);
/*This line exports a Mongoose model based on the defined schema. The mongoose.model function is used to create a model named 'Task' based on the TaskSchema. This model can be used to interact with the MongoDB collection named 'tasks'. The exported model can be used for CRUD (Create, Read, Update, Delete) operations on tasks in the MongoDB database. */
