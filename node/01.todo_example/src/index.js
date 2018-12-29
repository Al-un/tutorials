/* eslint-disable no-console */
// https://eslint.org/docs/rules/linebreak-style
/*eslint linebreak-style: ["error", "windows"]*/

/* ====== V1: hello-word =======================================================
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
})
*/

/* ====== V2: eslint =========================================================== */

/* ====== V4: Todo ============================================================= */
const Todo = require('./Todo');
const bodyParser = require('body-parser');

/* ====== V5: Passport ========================================================= */
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const ADMIN = 'admin';
const ADMIN_PASSWORD = 'password';

/* ====== V6: JWT ============================================================== */
const jwt = require('jwt-simple');
const SECRET = 'mysecret';

/* ====== V7: Bearer =========================================================== */
const BearerStrategy = require('passport-http-bearer').Strategy;

/* ====== V8: DB =============================================================== */
const Sequelize = require('sequelize');
const TodoFactory = require('../models/todo');

/* ====== V3: express ========================================================== */
const express = require('express')

// V4
// app.listen(port, () => console.log('Example app listening on port ' + port + '!'))

// V8
const sequelize = new Sequelize('postgres://padawan:padawan@localhost/nodejs_tutorial');
sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully');
        const Todo = TodoFactory(sequelize, Sequelize);
        Todo.findAll().then(todo => console.log(todo));


        
        const app = express();
        const port = 3000;

        // V4
        app.use(bodyParser.json());
        app.use((req, res, next) => {
            res.setHeader('cache-control', 'private, max-age=0, no-cache, no-store, must-revalidate');
            res.setHeader('expires', '0');
            res.setHeader('pragma', 'no-cache');
            next();
        });

        // V5 / V6
        passport.use(new LocalStrategy((username, password, done) => {
            if (username === ADMIN && password === ADMIN_PASSWORD) {
                // done(null, 'TOKEN'); // V5
                done(null, jwt.encode({ username }, SECRET));
                return;
            }
            done(null, false);
        }));

        // V7
        passport.use(new BearerStrategy((token, done) => {
            try {
                const { username } = jwt.decode(token, SECRET);
                if (username === ADMIN) {
                    done(null, username);
                    return;
                }
                done(null, false);
            }
            catch (error) {
                done(null, false);
            }
        }));

        // V4 / V7
        app.get('/todos',
            passport.authenticate('bearer', { session: false }),
            (_, res) => {
                Todo.findAll().then((todos) => {
                    res.send(todos);
                });
            });
        app.post('/todos',
            passport.authenticate('bearer', { session: false }), (req, res) => {
                Todo.create({ note: req.body.note })
                    .then((todo) => {
                        res.send(todo);
                    });
            });
        app.delete('/todos/:id',
            passport.authenticate('bearer', { session: false }), (req, res) => {
                Todo.findById(req.params.id)
                    .then(todo => todo.destroy())
                    .then(() => res.send());
            });
        app.post(
            '/login',
            passport.authenticate('local', { session: false }),
            (req, res) => {
                res.send({
                    token: req.user
                })
            }
        )

        app.get('/', (req, res) => res.send('Hello World!'))

        app.listen(port, () => console.log('Example app listening on port ' + port + '!'))
    })
    .catch((err) => {
        console.error('Unable to connect to the database:', err);
    });