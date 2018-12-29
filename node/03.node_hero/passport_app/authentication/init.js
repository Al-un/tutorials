const passport = require('passport')
const bcrypt = require('bcrypt')
const LocalStrategy = require('passport-local').Strategy

const authenticationMiddleware = require('./middleware')

// Generate Password
const saltRounds = 10
const myPlaintextPassword = 'password'
const salt = bcrypt.genSaltSync(saltRounds)
const passwordHash = bcrypt.hashSync(myPlaintextPassword, salt)

const user = {
  username: 'user',
  passwordHash,
  id: 1
}

function findUser(username, callback) {
  if (username === user.username) {
    return callback(null, user)
  }
  return callback(null)
}

passport.serializeUser(function (user, cb) {
  cb(null, user.username)
})

passport.deserializeUser(function (username, cb) {
  findUser(username, cb)
})

function initPassport() {
  passport.use(new LocalStrategy(
    (username, password, done) => {
      console.log('Attempt to authenticate ' + username + ':' + password);
      findUser(username, (err, user) => {
        if (err) {
          console.log('Error: ' + err);
          return done(err)
        }

        // User not found
        if (!user) {
          console.log('User not found')
          return done(null, false)
        }

        // Always use hashed passwords and fixed time comparison
        bcrypt.compare(password, user.passwordHash, (err, isValid) => {
          if (err) {
            console.log('Error: ' + err);
            return done(err)
          }
          if (!isValid) {
            console.log('not valid password: ' + password);
            return done(null, false)
          }
          console.log('authentication OK')
          return done(null, user)
        })
      })
    }
  ))

  passport.authenticationMiddleware = authenticationMiddleware
}

module.exports = initPassport
