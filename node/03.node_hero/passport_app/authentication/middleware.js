function authenticationMiddleware() {
  return function (req, res, next) {
    console.log('authenticationMiddleware: req ' + req.path + ' is protected and is currently authenticated: ' + req.isAuthenticated())
    if (req.isAuthenticated()) {
      return next()
    }
    res.redirect('/')
  }
}

module.exports = authenticationMiddleware
