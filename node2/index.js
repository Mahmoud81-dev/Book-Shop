const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.static('public'))
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/todosData', {useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection

db.on('error', function(err) {
    console.log(err)
})

db.on('open', function() {
    console.log('Connection established ...')
})

const todoSchema = new mongoose.Schema({
    task: String,
    description: String,
    price: String,
    image: String
})

const cartSchema = new mongoose.Schema({
    task: String,
    description: String,
    price: String,
    image: String
})

const Todo = mongoose.model('Todo', todoSchema)

const cart = mongoose.model('cart', cartSchema)

app.get('/add', function(req, res) {
    const newTask = req.query.task
    const newdesc = req.query.description
    const newprice = req.query.price
    const newimg = req.query.image
    const newTodo = new Todo({
        task: newTask,
        description: newdesc,
        price: newprice,
        image: newimg
        })
    newTodo.save()
    res.redirect('/')
})

app.get('/addTocart', function(req, res) {
    const newTask = req.query.task
    const newdesc = req.query.description
    const newprice = req.query.price
    const newimg = req.query.image
    const newTodo = new cart({
        task: newTask,
        description: newdesc,
        price: newprice,
        image: newimg
        })
    newTodo.save()
    res.redirect('/')
})

app.get('/todos', function(req, res) {
    Todo.find(function(err, todos) {
        res.send(todos)
    })
})

app.get('/carts', function(req, res) {
    cart.find(function(err, todos) {
        res.send(todos)
    })
})

app.get('/addTodo', function(req, res) {
    const newTask = req.query.task
    const newdesc = req.query.description
    const newprice = req.query.price
    const newimg = req.query.image
    const newTodo = new Todo({
        task: newTask,
        description: newdesc,
        price: newprice,
        image: newimg
    })
    newTodo.save()
    res.send(true)
})

app.get('/update', function(req, res) {
    const newTask = req.query.task
    const newdesc = req.query.description
    const newprice = req.query.price
    const newimg = req.query.image
    Todo.findByIdAndUpdate({_id: req.query.id}, {
        task: newTask,
        description: newdesc,
        price: newprice,
        image: newimg
    }).then(result => console.log('don'))
    .catch()
})

app.get("/delete/:id", function (req, res) {
    
    Todo.deleteOne({ _id: req.params.id })
      .then(() => {})
      .catch((error) => {})
      res.redirect('/')
  });


  app.get("/deletecart/:id", function (req, res) {
    cart.deleteOne({ _id: req.params.id })
      .then(() => {})
      .catch((error) => {})
     
  });


app.listen(80)