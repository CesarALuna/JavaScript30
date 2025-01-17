const timeNodes = Array.from(document.querySelectorAll("[data-time]"));

const seconds = timeNodes
  .map((node) => node.dataset.time)
  .map((timeCode) => {
    // splits into strings, map parseFloat over to make them numbers
    const [mins, secs] = timeCode.split(":").map(parseFloat);
    return mins * 60 + secs;
  })
  .reduce((total, vidSeconds) => total + vidSeconds);

let secondsLeft = seconds;

const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;
console.log(secondsLeft);

const mins = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;
console.log(secondsLeft);

console.log(hours, mins, secondsLeft);
