const express = require('express')
const nunjucks = require('nunjucks')

const app = express()
nunjucks.configure('views', {
  autoescape: true,
  express: app,
  watch: true
})
app.set('view engine', 'njk')
app.use(express.urlencoded({ extended: false }))

const checkAge = (req, res, next) => {
  let { age } = req.query

  if (!age) return res.redirect('/')

  return next()
}

app.get('/', (req, res) => {
  return res.render('form')
})

app.post('/check', (req, res) => {
  let { age } = req.body
  let route = age > 18 ? `/major?age=${age}` : `/minor?age=${age}`

  return res.redirect(route)
})

app.get('/major', checkAge, (req, res) => {
  return res.send(`Você é maior de idade e possui ${req.query.age} anos`)
})

app.get('/minor', checkAge, (req, res) => {
  return res.send(`Você é menor de idade e possui ${req.query.age} anos`)
})

app.listen(3000)
