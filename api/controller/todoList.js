'use strict';
const todoItem = require('../model/todoItem');
const mongoose = require('mongoose');
const TodoItem = mongoose.model('TodoItem', todoItem);

function respond(err, result, res) {
  if (err) {
    return res.status(500).json({error: err});
  }
  return res.json(result);
}

const todoListController = {
  getAll: (req, res) => {
    TodoItem.find({}, (err, todoItems) => {
      return respond(err, todoItems, res);
    });
  },
  create: (req, res) => {
    const newTodoItem = new TodoItem(req.body);
    newTodoItem.save((err, savedTodoItem) => {
      return respond(err, savedTodoItem, res);
    });
  },
  get: (req, res) => {
    TodoItem.findById(req.params.id, (err, todoItem) => {
      return respond(err, todoItem, res);
    });
  },
  update: (req, res) => {
    TodoItem.findByIdAndUpdate(req.params.id, req.body, (err, todoItem) => {
      return respond(err, todoItem, res);
    });
  },
  delete: (req, res) => {
    TodoItem.findByIdAndRemove(req.params.id, (err, todoItem) => {
      return respond(err, todoItem, res);
    });
  }
};

module.exports = todoListController;
