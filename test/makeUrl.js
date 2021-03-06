const t = require('tap')
const makeUrl = require('../lib/makeUrl')

t.test('makeUrl', t => {
  t.comment('function that gets params from commander and make mongo url string from them')

  t.test('with user and pass', t => {
    const url = makeUrl({
      username: 'me',
      password: 'pass',
      host: 'localhost',
      port: 27017,
      db: 'logs'
    })
    t.ok(url, 'url ok')
    t.equal(url, 'mongodb://me:pass@localhost:27017/logs', 'url should be right')
    t.end()
  })

  t.test('without user and pass', t => {
    const url = makeUrl({
      host: 'localhost',
      port: 27017,
      db: 'logs'
    })
    t.ok(url, 'url ok')
    t.equal(url, 'mongodb://localhost:27017/logs', 'url should are right')
    t.end()
  })

  t.end()
})
