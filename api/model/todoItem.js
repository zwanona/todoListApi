'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoItemSchema = new Schema({
    name: {type: String, required: true},
    status: {type: String, enum: ['todo', 'inProgress', 'done'], default: 'todo', required: true}
  },
  {timestamps: true}
);

module.exports = TodoItemSchema;