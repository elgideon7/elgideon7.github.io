var slideIndex = 1;
//mostrar los slides
function mostrarSlide(numeroSlide) {
  let i;
  const slides = document.getElementsByClassName("slide");
  const dots = document.getElementsByClassName('dot');

  if (numeroSlide > slides.length) { 
    slideIndex = 1 
  }
  if (numeroSlide < 1) { 
    slideIndex = slides.length 
  }
  //ocultar todas los slides
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.add('hidden');
  }
  //quitar el estado activo de los dots
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove('bg-lime-400');
    dots[i].classList.add('bg-gray-300');
  }
  //ver el slide activo
  slides[slideIndex - 1].classList.remove('hidden');
  //mostrar el dot activo
  dots[slideIndex - 1].classList.remove('bg-gray-300');
  dots[slideIndex - 1].classList.add('bg-lime-400');
}
//establecer un slide activo predeterminado
mostrarSlide(slideIndex);
//cambiar slide con los botones prev/next 
function moverSlide(cambiarSlide) {
  mostrarSlide(slideIndex += cambiarSlide);
}
//cambiar slide con dots
function moverSlideDots(n) {
  mostrarSlide(slideIndex = n);
}
// cambiar slide automatico
setInterval(function () {
  moverSlide(1);
}, 5000);