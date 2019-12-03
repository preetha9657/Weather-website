
const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const msg1 = document.querySelector('#msg-1')
const msg2 = document.querySelector('#msg-2')


weatherForm.addEventListener('submit', (e) =>{
    e.preventDefault() //prevent browser refresh for every action
    const location = search.value
    console.log('testing!.'+location)
    msg1.textContent = 'Loading..'
    msg2.textContent = 'Loading..'
    fetch('/weather?address='+location).then((response) => {
    response.json().then((data) => {
        if(data.error){
            msg1.textContent = data.error
            msg2.textContent = ''
            console.log(data.error)
        }else
        msg1.textContent = data.temperature
        msg2.textContent = data.address
        console.log(data)
    })
})
})