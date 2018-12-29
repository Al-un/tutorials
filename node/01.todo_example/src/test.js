/* eslint-disable no-console */
const Sequelize = require('sequelize');
const TodoFactory = require('../models/todo');

const sequelize = new Sequelize('postgres://padawan:padawan@localhost/nodejs_tutorial');
sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully');
        const Todo = TodoFactory(sequelize, Sequelize);
        Todo.findAll().then(todo => console.log(todo));
    })
    .catch((err) => {
        console.error('Unable to connect to the database:', err);
    });