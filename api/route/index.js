'use strict';
const todoListController = require('../controller/todoList');

module.exports = (app) => {
  app.route('/todoitems').get(todoListController.getAll);
  app.route('/todoitems').post(todoListController.create);
  app.route('/todoitems/:id').get(todoListController.get);
  app.route('/todoitems/:id').put(todoListController.update);
  app.route('/todoitems/:id').delete(todoListController.delete);

  app.use((req, res) => {
    res.status(404).json({url: req.originalUrl, error: 'not found'});
  });
};