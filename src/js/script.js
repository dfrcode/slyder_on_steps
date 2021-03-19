import "../css/style.css";

const circles = document.querySelectorAll(".circle"),
  lineUp = document.querySelector(".line_up"),
  prev = document.getElementById("prev"),
  next = document.getElementById("next");

const containerImages = document.querySelector('.images')
const imageList = document.querySelectorAll('.image')

const widthImage = imageList[0].offsetWidth
console.log(widthImage)

let currentActive = 1;

prev.disabled = true;

next.addEventListener("click", () => {
  currentActive++;
  prev.disabled = false;
  if (currentActive > circles.length - 1) {
    currentActive = circles.length;
    next.disabled = true;
  }
  containerImages.style.left = `${-widthImage * (currentActive - 1)}px`
  addActiveClass();
  console.log(containerImages.style.left);
});

prev.addEventListener("click", () => {
  currentActive--;
  next.disabled = false;
  if (currentActive < 2) {
    currentActive = 1;
    prev.disabled = true;
    
  }
  containerImages.style.left = `${-widthImage * (currentActive - 1)}px`
  addActiveClass();
  console.log(containerImages.style.left);
});

function addActiveClass() {
  circles.forEach((c, idx) => {
    if (idx < currentActive) {
      c.classList.add("active_circle");
    } else {
      c.classList.remove("active_circle");
    }
  });
  const activeCircles = document.querySelectorAll(".active_circle");
  lineUp.style.width = `${((activeCircles.length - 1) / (circles.length - 1)) * 100}%`;
  console.log(((activeCircles.length - 1) / (circles.length - 1)) * 100)
}
