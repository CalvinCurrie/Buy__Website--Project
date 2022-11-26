document.addEventListener("mousemove", (e) => {
  const mouseFollow = document.getElementById("mouse-follow");
  const x = e.clientX - 25; //-25 to center div over mouse
  const y = e.clientY - 25;
  console.log(x);

  mouseFollow.style.top = `${y}px`;
  mouseFollow.style.left = `${x}px`;
});
