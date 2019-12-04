const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utiles/geocode')
const forecast = require('./utiles/forecast')

const app = express()
const port = process.env.PORT || 3000

//Define paths for express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewPath = path.join(__dirname, '../templets/views')
const partialsPath = path.join(__dirname, '../templets/partials')

//Setup handlebar engin  and views location
app.set('view engine', 'hbs')
app.set('views', viewPath)
hbs.registerPartials(partialsPath)

//Setup directory to server
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title:'Sexy Six',
        name:'Created by Preetham'
    })
})

app.get('/about', (req, res) =>{
    res.render('about',{
        title:'About',
        name:'Created by Preetham'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'Coming soon Wait for the Bang',
        title:'Help Page',
        name:'Created by Preetham'
    })
})



app.get('/weather', (req, res) => {
    
    if(!req.query.address){
        return res.send({
            error:'You must provide an address'
        })
    }
    geocode(req.query.address, ({logitude, latitude} ={}) =>{
        forecast(logitude, latitude,(error, success) =>{
            if(!error){
                res.send({
                    temperature: success,
                    address: req.query.address
                })

            }else{
                res.render('error', {
                    title:'404 Error',
                    message: error,
                    name:'Created by Preetham'
                })
            }
        })
    })

   
    // res.send({
    //     forecast:'it is sowing',
    //     location:'Chennai',
    //     address: req.query.address
    // })
})
//app.com
//app.com/about
//app.com/help
app.get('/help/*', (req, res) => {
    res.render('error', {
        title:'404 Error',
        message:'Help articale not found',
        name:'Created by Preetham'
    })
})

app.get('*', (req, res) =>{
    res.render('error',{
        title:'404 Error',
        message:'Page Not Found',
        name:'Created by Preetham'
    })
})

app.listen(port, () =>{
    console.log('Server starts running on port: '+ port)
})