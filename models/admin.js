const mongoose = require('mongoose');

const { Schema } = mongoose;

const todoSchema = new Schema({
  title: { type: String, required: true, length: 70 },
  isComplete: { type: Boolean, default: 'false' },
  user: { type: Schema.ObjectId, required: 'true', ref: 'user' },
}, { timestamps: true });

const TodoModel = mongoose.model('todo', todoSchema);

module.exports = TodoModel;
