let carPosX = 180

class Obstacle {
  constructor() {
    this.posX = Math.random() * (300 - 150)
    this.posY = 0
  }
}

let obstacleArray = [new Obstacle()]

let img
let canvas
let ctx
let frameCounter = 0

function startGame() {
  document.getElementsByClassName("game-intro")[0].remove()
  canvas = document.getElementsByTagName("canvas")[0]
  ctx = canvas.getContext('2d')
  img = new Image()
  img.onload = () => {
    draw()
  }
  img.src = 'images/car.png'
  window.requestAnimationFrame(() => {
    draw()
  })
}

function draw() {
  // every 1/6th of a second
  if (frameCounter % 10 === 0) {
    obstacleArray.forEach((obstacle) => {
      obstacle.posY += 10
    })
  }
  // every two seconds
  if (frameCounter % 120 === 0) {
    obstacleArray.push(new Obstacle())
  }
  ctx.fillStyle = 'green'
  ctx.fillRect(0, 0, 50, 500)
  ctx.fillRect(350, 0, 50, 500)
  ctx.fillStyle = 'grey'
  ctx.fillRect(50, 0, 300, 500)
  ctx.drawImage(img, carPosX, 380, 50, (50 / img.width) * img.height)
  ctx.fillStyle = 'red'
  obstacleArray.forEach((obstacle) => {
    ctx.fillRect(obstacle.posX, obstacle.posY, 150, 50)
  })
  frameCounter++;
  window.requestAnimationFrame(() => {
    draw()
  })
}

document.onkeydown = (event) => {
  if (event.keyCode === 37) {
    carPosX -= 10;
  }
  if (event.keyCode === 39) {
    carPosX += 10;
  }
}


window.onload = function () {
  document.getElementById("start-button").onclick = function () {
    startGame();
  };
};
