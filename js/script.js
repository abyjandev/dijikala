let slideIndex = 0;

showSlid(slideIndex);

function plusSlides(n) {
  showSlid((slideIndex += n));
}
function mineslides(n) {
  showSlid((slideIndex -= n));
}

function currentSlide(n) {
  showSlid((slideIndex = n));
}

function showSlid() {
  let i;
  let slides = document.getElementsByClassName("slidshow");
  let dots = document.getElementsByClassName("dot");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  if (slideIndex < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  // if (slideIndex < slides.length) {
  //   slideIndex++;
  //   setTimeout(showSlid, 2000);
  // } else {
  //   slideIndex = 0;
  //   slideIndex++;
  //   setTimeout(showSlid, 2000);
  // }
}
