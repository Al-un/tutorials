const config = {}

config.redisStore = {
    url: process.env.REDIS_STORE_URI,
    secret: process.env.REDIS_STORE_SECRET
}
// config.redisStore = {
//     url: 'redis://localhost',
//     secret: 'my-super-strong-secret'
// }

module.exports = config