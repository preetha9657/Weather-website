
const geocode = (address, callbacks) =>{
    console.log(address)
    setTimeout(()=>{
        const data = {
            logitude: 80.237617,
            latitude: 13.067439
        }

        callbacks(data)
    }, 2000)
}

module.exports = geocode