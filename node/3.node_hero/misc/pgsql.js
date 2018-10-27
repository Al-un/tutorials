'use strict'
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const pg = require('pg');
const pgCfg = {
    user: 'padawan',
    database: 'nodejs_tutorial',
    password: 'padawan',
    host: 'localhost',
    port: '5432'
}
const conString = 'postgres://padawan:padawan@localhost:5432/nodejs_tutorial';

app.post('/users', function (req, res, next) {
    const user = req.body;
    console.log("Receiving user: " + JSON.stringify(user));
    var pool = new pg.Pool(pgCfg);
    pool.connect(function (err, client, done) {
        // pg.connect(conString, function (err, client, done) {
        if (err) {
            return next(err);
        }

        client.query('INSERT INTO node_hero_users (name, age) VALUES ($1, $2);',
            [user.name, user.age],
            function (err, result) {
                if (err) {
                    return next(err);
                }
                done();
                res.sendStatus(200);
            })
    });
});

app.get('/users', function (req, res, next) {
    var pool = new pg.Pool(pgCfg);
    pool.connect(function (err, client, done) {
    // pg.connect(conString, function (err, client, done) {
        if (err) {
            return next(err);
        }
        client.query('SELECT id, name, age FROM node_hero_users;', [], function (err, result) {
            if (err) {
                return next(err);
            }
            done();
            console.log("Getting users: " + JSON.stringify(result.rows));
            res.json(result.rows);
        });
    })
})

app.get('/', (request, response) => {
    response.render('home', {
        name: 'John'
    })
})

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }

    console.log(`server is listening on ${port}`)
})