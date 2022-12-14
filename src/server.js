const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars').engine


// Initializations
const app = express()


// Settings
app.set('port', process.env.PORT || 4000)
app.set('views', path.join(__dirname + 'views'))
app.engine('.hbs', exphbs({
    defaultLayout : 'main',
    layoutsDir : path.join(app.get('views'), 'layouts'),
    partialsDir : path.join(app.get('views'),'partials'),
    extname: '.hbs'
}))

// Middlewares
app.use(express.urlencoded({extended: false}))

// Global variables


// Routes
app.get('/', (req, res)=>{
    res.send('Hello World')
} )

// Static files
app.use(express.static(path.join(__dirname + 'public')))


//___________
module.exports = app