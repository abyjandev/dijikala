// part slider-container
let slideIndex = 0;

showSlid(slideIndex);
story();

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

// part story-container

function story() {
  let story_status = document.getElementsByClassName("story-status");
  let content_story = document.querySelector(".story-content-main");
  let btn_close = document.querySelector(".icon-nav-cross");
  let time = document.querySelector(".time-active");
  let body = document.querySelector("body");

  for (let i = 0; i < story_status.length; i++) {
    let story = document.querySelectorAll(".story-prof")[i];
    story.addEventListener("click", function (e) {
      story_status[i].style.border = "0.2rem solid #a1a3a8";
      content_story.style.visibility = "visible";
      // content_story.style.boxshadow = "visible";
      time.style.width = "100%";
      time.style.transition = "all 5s linear ";
      body.style.backgroundColor = "#f0f0f1";
      e.preventDefault();
    });
  }
  btn_close.addEventListener("mouseover", function () {
    btn_close.style.cursor = "pointer";
  });
  btn_close.addEventListener("click", function () {
    content_story.style.visibility = "hidden";
    // transition: all 5s ease;
    time.style.transition = "0s";
    time.style.width = "0%";
    body.style.backgroundColor = "#fff";
  });
}
