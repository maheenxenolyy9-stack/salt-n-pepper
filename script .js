const slides = document.querySelectorAll(".slide");
const dotsBox = document.querySelector(".dots");
const slider = document.getElementById("slider");
const DELAY = 4000;
let current = 0;
let timer;

// dots banao
slides.forEach((_, i) => {
  const dot = document.createElement("button");
  dot.className = "dot" + (i === 0 ? " active" : "");
  dot.setAttribute("aria-label", "Slide " + (i + 1));
  dot.addEventListener("click", () => { goTo(i); restart(); });
  dotsBox.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

function goTo(index) {
  slides[current].classList.remove("active");
  dots[current].classList.remove("active");

  current = (index + slides.length) % slides.length;

  slides[current].classList.add("active");
  dots[current].classList.add("active");
}

function start() {
  timer = setInterval(() => goTo(current + 1), DELAY);
}

function restart() {
  clearInterval(timer);
  start();
}


document.querySelector(".arrow--next").addEventListener("click", () => {
  goTo(current + 1);
  restart();
});

document.querySelector(".arrow--prev").addEventListener("click", () => {
  goTo(current - 1);
  restart();
});

// mouse upar ho to ruk jaye
slider.addEventListener("mouseenter", () => clearInterval(timer));
slider.addEventListener("mouseleave", start);

start();

