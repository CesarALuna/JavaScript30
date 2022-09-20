// listen for key event

function playSound(e) {
  // use template literal to get event for appropriate audio file
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
  if (!audio) return // stop function from running altogether
  audio.currentTime = 0
  audio.play() // play the audio if present
  key.classList.add('playing') // add css styling to active keys
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return //skip it if it's not a transform
  this.classList.remove('playing')
}

const keys = document.querySelectorAll('.key')
keys.forEach((key) => key.addEventListener('transitionend', removeTransition))

window.addEventListener('keydown', playSound)
