// inicializar slider
const slider = simpleslider.getSlider({
  container: document.getElementById("banner-slider"),
  transitionTime: 10,
  delay: 5,
});

// left control
document.querySelector(".slider-control.left").onclick = () => {
  slider.prev();
};
// right control
document.querySelector(".slider-control.right").onclick = () => {
  slider.next();
};
