const canvas = document.getElementById('canvas').getContext('2d');
let snake, food, direction, foodIsEaten;
const canvasWidth = 500;
const canvasHeight = 500;

const snakeUnit = {
  height: 20,
  width: 20,
  color: '#9AFA55'
};

const apple = {
  width: 20,
  height: 20
}

document.onkeydown = (e) => {
  if (e.keyCode === 37) {
    direction = 0; //left
  } else if (e.keyCode === 38) {
    direction = 1; //up
  } else if (e.keyCode === 39) {
    direction = 2; //right
  } else if (e.keyCode === 40) {
    direction = 3; //down
  }
}

const start = () => {
  snake = [
    { x: 130, y: 200 },
    { x: 120, y: 200 },
    { x: 110, y: 200 },
  ];

  food = [];
  foodIsEaten = true;
  direction = 99; //wont go anywhere
  setInterval(updateSnakePosition, 20); //speed of snake
}

const drawSnake = (snake, index) => {
  canvas.save();
  canvas.fillStyle = (index === 0) ? '#E0A23B' : snakeUnit.color;
  canvas.fillRect(snake.x, snake.y, snakeUnit.width, snakeUnit.height);
  canvas.restore();
}

const moveUnitToPositionOfPrevious = (index) => {
  snake[index].x = snake[index - 1].x;
  snake[index].y = snake[index - 1].y;
}

const updateSnake = () => {
  //iterrate from the back of the loop
  for (var index = snake.length - 1; index >= 0; index--) {
    if (direction === 0) { //left
      if (index === 0) {
        snake[index].x = snake[index].x - 10;
      } else {
        moveUnitToPositionOfPrevious(index);
      }
    } else if (direction === 1) { //up
      if (index === 0) {
        snake[index].y = snake[index].y - 10;
      } else {
        moveUnitToPositionOfPrevious(index);
      }
    } else if (direction === 2) { //right
      if (index === 0) {
        snake[index].x = snake[index].x + 10;
      } else {
        moveUnitToPositionOfPrevious(index);
      }
    } else if (direction === 3) { //down
      if (index === 0) {
        snake[index].y = snake[index].y + 10;
      } else {
        moveUnitToPositionOfPrevious(index);
      }
    }
  }
}

const updateSnakePosition = () => {
  canvas.clearRect(0, 0, canvasWidth, canvasHeight);
  snake.forEach(drawSnake);
  checkSnakePosition();
  updateSnake();
}

// check that snake does not exit bounds of the canvas
const checkSnakePosition = () => {
  if (snake[0].x > 500) {
    snake[0].x = 0;
  }
  if (snake[0].x < 0) {
    snake[0].x = 500;
  }
  if (snake[0].y > 500) {
    snake[0].y = 0;
  }
  if (snake[0].y < 0) {
    snake[0].y = 500;
  }
}

const drawFood = (apple, index) => {
  canvas.save();
  canvas.fillStyle = apple.color;
  canvas.fillRect(apple.x, apple.y, apple.width, apple.height);
  canvas.restore();
}

start();