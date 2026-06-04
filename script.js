const cubes = document.querySelectorAll(".cube");
const container = document.querySelector(".container");

let selectedCube = null;
let offsetX = 0;
let offsetY = 0;

cubes.forEach((cube) => {
  cube.addEventListener("mousedown", (e) => {
    selectedCube = cube;

    const rect = cube.getBoundingClientRect();

    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;

    cube.style.position = "absolute";
  });
});

document.addEventListener("mousemove", (e) => {
  if (!selectedCube) return;

  const containerRect = container.getBoundingClientRect();

  let left = e.clientX - containerRect.left - offsetX;
  let top = e.clientY - containerRect.top - offsetY;

  left = Math.max(
    0,
    Math.min(left, container.clientWidth - selectedCube.offsetWidth)
  );

  top = Math.max(
    0,
    Math.min(top, container.clientHeight - selectedCube.offsetHeight)
  );

  selectedCube.style.left = left + "px";
  selectedCube.style.top = top + "px";
});

document.addEventListener("mouseup", () => {
  selectedCube = null;
});