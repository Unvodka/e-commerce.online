const express = require('express');
const app = express();
const morgan = require('morgan');
const bcrypt = require('bcrypt')
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
const methodOverride = require('method-override')
const mongoose = require('mongoose');
require('dotenv').config();


const initializePassport = require('./passport-config')
initializePassport(
  passport,
  email => users.find(user => user.email === email),
  id => users.find(user => user.id === id)
)

//MIDDLEWARES
 
app.use(morgan('dev'));
app.use(morgan('combined'));
app.use(express.urlencoded({extended: true}));  
app.use(flash())
app.use(session({
  secret: 'sessionSecret',
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize())
app.use(methodOverride('_method'))
app.use('/public', express.static('public'))
app.use(express.json());

//ROUTES

app.get('/', (req, res, next) => {
  res.render(`<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>e-commerce.online</title>
  </head>
  <body>
    
    <form action="/info/get" method='GET'>
      <input type="submit" value='GET'>
    </form>
  
    <form action="/info/add" method='POST'>
      <label for="add">ADD:</label>
      <input type="text" name="add" id="add">
      <input type="submit" value='ADD'>
    </form>
  
    <form action="/info/delete" mehtod='POST'>
      <label for="delete">DELETE:</label>
      <input type="text" name="delete" id="DELETE">
      <input type="submit" value='DELETE'>
    </form>
  
    <form action="/info/update" mehtod='POST'>
      <label for="oldValue">old Value:</label>
      <input type="text" name="oldValue" id="oldValue">
      <label for="newValue">new Value:</label>
      <input type="text" name='newValue' id='newValue'>
      <input type="text" value="UPDATE">
    </form>
  
  
  </body>
  </html>`)
})

app.get('/register', (req, res, next) => {
  res.send(`
  `)
});

app.post('/info/add', (req, res, next) => {
  try {
    
  } catch(error) {
    console.log(error);
  }
})
  
app.delete('/info/delete', (req, res, next) => {
  try {
    
  } catch(error) {
    console.log(error)
  }
})

app.delete('/info/update', (req, res, next) => {
  try {
    
  } catch(error) {
    console.log(error)
  }
})

mongoose.connect(process.env.DB_CONNECT, 
  { useNewUrlParser: true } , 
  () => { console.log('Connected to DB') })

const port = process.env.PORT;
app.listen(port, () => console.log(`Server listening on port ${port}`));