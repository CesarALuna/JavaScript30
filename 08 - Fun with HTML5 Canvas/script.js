const canvas = document.querySelector('#draw')
const context = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
context.strokeStyle = '#BADA55'
context.lineJoin = 'round'
context.lineCap = 'round'
context.lineWidth = 0
context.globalCompositeOperation = 'overlay'

let isDrawing = false
let lastX = 0
let lastY = 0
let hue = 0
let direction = true

function draw(e) {
  if (!isDrawing) return // stop function when not clicked down
  console.log(e)
  context.strokeStyle = `hsl(${hue}, 100%, 50%)`
  context.beginPath()
  // start from
  context.moveTo(lastX, lastY)
  // go to
  context.lineTo(e.offsetX, e.offsetY)

  context.stroke()
  // for some reason prettier does NOT like this array destructuring
  // [lastX, lastY] = [e.offsetX, e.offsetY]
  lastX = e.offsetX
  lastY = e.offsetY
  hue++
  if (hue > 360) {
    hue = 0
  }
  if (context.lineWidth >= 100 || context.lineWidth <= 1) {
    direction = !direction
  }

  if (direction) {
    context.lineWidth++
  } else {
    context.lineWidth--
  }
}

canvas.addEventListener('mousemove', draw)
canvas.addEventListener('mousedown', (e) => {
  isDrawing = true
  lastX = e.offsetX
  lastY = e.offsetY
})
canvas.addEventListener('mouseup', () => (isDrawing = false))
canvas.addEventListener('mouseout', () => (isDrawing = false))
