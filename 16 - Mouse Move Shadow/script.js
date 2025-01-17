const hero = document.querySelector(".hero");
const text = document.querySelector("h1");
const walk = 100; // 100px

function shadow(e) {
  //   const width = hero.offsetWidth
  //   const height = hero.offsetHeight
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = e;
  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }
  const xWalk = Math.round((x / width) * walk - walk / 2);
  const yWalk = Math.round((y / width) * walk - walk / 2);

  text.style.textShadow = `
  ${xWalk}px ${yWalk}px 0 hsl(${xWalk * 2.55}, 100%, 50%, 0.7),
  ${xWalk * -1}px ${yWalk}px 0 hsl(${xWalk * -2.55}, 100%, 50%, 0.7),
  ${xWalk}px ${yWalk * -1}px 0 hsl(${yWalk * 2.55}, 100%, 50%, 0.7),
  ${yWalk * -1}px ${xWalk * -1}px 0 hsl(${yWalk * -2.55}, 100%, 50%, 0.7)


  `;
}

hero.addEventListener("mousemove", shadow);
