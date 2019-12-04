
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

var slideIndex = 1
showSlides(slideIndex)

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
function showSlides(n){
    var i;
    var slides = document.getElementsByClassName('mySlides')
    var dots = document.getElementsByClassName('dot')
    if(n>slides.length){slideIndex = 1}
    if(n<1){slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }

 