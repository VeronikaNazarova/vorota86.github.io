/* slide */

let slideIndex = 1;
showSlides(slideIndex);

function plusSlide() {
    showSlides(slideIndex += 1);
}

function minusSlide() {
    showSlides(slideIndex -= 1);  
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName('banner__img');
  const dots = document.getElementsByClassName('banner__slide-dots_item');
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
      slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

const timer = setInterval(function() {
  slideIndex++;
  showSlides(slideIndex);
}, 5000);


/* gallery */

const photoGates = document.querySelector('.photo__sliding-gates');
const photoGarage = document.querySelector('.photo__garage-doors');

document.querySelector('.sliding-gates').addEventListener('click', (e)=> {
  e.preventDefault();
  photoGates.style.display = 'grid';
  photoGarage.style.display = 'none';
})

document.querySelector('.garage-doors').addEventListener('click', (e)=> {
  e.preventDefault();
  photoGates.style.display = 'none';
  photoGarage.style.display = 'grid';
})

document.querySelector('.swing-gates').addEventListener('click', (e)=> {
  e.preventDefault();
  photoGates.style.display = 'none';
  photoGarage.style.display = 'none';
})

document.querySelector('.sectional-doors').addEventListener('click', (e)=> {
  e.preventDefault();
  photoGates.style.display = 'none';
  photoGarage.style.display = 'none';
})

document.querySelector('.fences').addEventListener('click', (e)=> {
  e.preventDefault();
  photoGates.style.display = 'none';
  photoGarage.style.display = 'none';
})

document.querySelector('.awnings').addEventListener('click', (e)=> {
  e.preventDefault();
  photoGates.style.display = 'none';
  photoGarage.style.display = 'none';
})
