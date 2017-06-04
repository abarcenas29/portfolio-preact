const fallback = require('express-history-api-fallback')
const expressStaticGzip = require('express-static-gzip')
const express = require('express')
const app = express()

// serve compress js/css files for bandwidth saving
app.use('/', expressStaticGzip('./build', {
  enableBrotli: true
}))

app.use(express.static('build'))
app.use(fallback('index.html', { root: 'build' }))

app.listen(3100, () => {
  console.log(`http://localhost:3100`)
})
