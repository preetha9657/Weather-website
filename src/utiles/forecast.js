const request = require('request')

// const url = 'https://api.darksky.net/forecast/ca6c4d544cb8dcb076847aa3dc5b5dd8/13.067439,80.237617?units=si'

// request({url:url, json: true},(error, response)=>{
//     if(error){
//         console.log('Unable to connect to weather service!')
//     }else if(response.body.error){
//         console.log('Unable to find Location')
//     }
//     else{
//   console.log(response.body.daily.data[0].summary+' it is currently '+response.body.currently.temperature+ ' degrees out. There is a '+ response.body.currently.precipProbability+ ' chance of rain.')
//     }
// })

const forecast = (logitude, latitude, callbacks) =>{

 
    const url = 'https://api.darksky.net/forecast/ca6c4d544cb8dcb076847aa3dc5b5dd8/'+latitude+','+logitude+'?units=si'
    const err=''
    const succ=''
    request({url, json:true},(error, {body}) =>{

        if(error){
           callbacks('unable to connect to weather service!', undefined)
        }else if(body.error){
           callbacks('unable to find location', undefined)
        }else{
           callbacks(undefined, body.daily.data[0].summary+' it is currently '+body.currently.temperature+ ' degrees out. There is a '+ body.currently.precipProbability+ ' chance of rain.' )
        }
        
    })
    
}

module.exports = forecast