
const images = document.querySelectorAll(".mySlides"),
  next = document.querySelector(".next"),
  prev = document.querySelector(".prev"),
  dots = document.getElementsByClassName("carousel-indicator"),
  container = document.getElementById("slideshow-container");

// Slide change

let current = 0;

function changeImage() {
  images.forEach(img => {
    img.classList.remove("show");
    img.style.display = "none";
  });

  images[current].classList.add("show");
  images[current].style.display = "block";

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  dots[current].className += " active";
}

// Calling first time
changeImage();


// Prev and next slide button
var myFunction = function() {
    current = this.getAttribute("data-slide-to");
    changeImage();
};

for (var i = 0; i < dots.length; i++) {
    dots[i].addEventListener('click', myFunction, false);
}


next.addEventListener("click", function() {
  current++;

  if (current > images.length - 1) {
    current = 0;
  } else if (current < 0) {
    current = images.length - 1;
  }

  changeImage();
});
prev.addEventListener("click", function() {
  current--;

  if (current > images.length - 1) {
    current = 0;
  } else if (current < 0) {
    current = images.length - 1;
  }

  changeImage();
});



  // Auto change in 5 seconds

container.addEventListener("mouseover", mouseOver);
container.addEventListener("mouseout", mouseOut);

let interval;

  function startInterval() {
    interval = setInterval(function() {
      next.click();
    }, 5000
    )};

  function stopInterval() {
    clearInterval(interval);
  }

  startInterval();

function mouseOver() {
  stopInterval();
}

function mouseOut() {
startInterval();
}

