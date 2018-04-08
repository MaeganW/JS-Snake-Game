const canvas = document.getElementById('canvas').getContext('2d');
let snake, food;
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
    direction = 0;
  } else if (e.keyCode === 38) {
    direction = 1;
  } else if (e.keyCode === 39) {
    direction = 2;
  } else if (e.keyCode === 40) {
    direction = 3;
  }
}

const start = () => {
  snake = [
    { x: 130, y: 200 },
    { x: 120, y: 200 },
    { x: 110, y: 200 },
  ];

  food = [];
  direction = 99; //wont go anywhere
  setInterval(updateSnakePosition, 1000);
}

const drawSnake = (snake, index) => {
  canvas.save();
  console.log(index);
  canvas.fillStyle = (index === 0) ? '#E0A23B' : snakeUnit.color;
  console.log(snake.x);
  console.log(snake.y);
  canvas.fillRect(snake.x, snake.y, snakeUnit.width, snakeUnit.height);
  canvas.restore();
}

// const updateSnake = () => {
//   snake.reverse();
//   snake.forEach((unit, index) => {
//     if (direction === 0) { //left
//       if (index === 0) {
//         unit.x = unit.x - 5;
//       } else {
//         unit.x = snake[index - 1].x;
//         unit.y = snake[index - 1].y;
//       }
//     } else if (direction === 1) { //up
//       if (index === 0) {
//         unit.y = unit.y - 5;
//         console.log('first')
//       } else {
//         unit.x = snake[index - 1].x;
//         unit.y = snake[index - 1].y;
//         console.log('body')
//       }
//     } else if (direction === 2) { //right
//       if (index === 0) {
//         unit.x = unit.x + 5;
//       } else {
//         unit.x = snake[index - 1].x;
//         unit.y = snake[index - 1].y;
//       }
//     } else if (direction === 3) { //down
//       if (index === 0) {
//         unit.y = unit.y + 5;
//       } else {
//         unit.x = snake[index - 1].x;
//         unit.y = snake[index - 1].y;
//       }
//     }
//   })
//   snake.reverse();
// }

const updateSnake = () => {
  for (var index = snake.length - 1; index >= 0; index--) {
    if (direction === 0) { //left
      if (index === 0) {
        snake[index].x = snake[index].x - 10;
      } else {
        snake[index].x = snake[index - 1].x;
        snake[index].y = snake[index - 1].y;
      }
    } else if (direction === 1) { //up
      if (index === 0) {
        snake[index].y = snake[index].y - 10;
        console.log('first')
      } else {
        snake[index].x = snake[index - 1].x;
        snake[index].y = snake[index - 1].y;
        console.log('body')
      }
    } else if (direction === 2) { //right
      if (index === 0) {
        snake[index].x = snake[index].x + 10;
      } else {
        snake[index].x = snake[index - 1].x;
        snake[index].y = snake[index - 1].y;
      }
    } else if (direction === 3) { //down
      if (index === 0) {
        snake[index].y = snake[index].y + 10;
      } else {
        snake[index].x = snake[index - 1].x;
        snake[index].y = snake[index - 1].y;
      }
    }
  }
}

const updateSnakePosition = () => {
  canvas.clearRect(0, 0, canvasWidth, canvasHeight);
  snake.forEach(drawSnake);
  updateSnake();
}

const drawFood = (apple, index) => {
  canvas.save();
  canvas.fillStyle = apple.color;
  canvas.fillRect(apple.x, apple.y, apple.width, apple.height);
  canvas.restore();
}

start();