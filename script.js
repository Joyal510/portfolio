const boxes = document.querySelectorAll(".box");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  boxes.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);
  });
}
