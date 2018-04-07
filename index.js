const canvas = document.getElementById('canvas').getContext('2d');
let snake, food;

const snakeUnit = {
  height: 20,
  width: 20,
  color: '#9AFA55'
};

const apple = {
  width: 20,
  height: 20
}

const start = () => {
  snake = [
    { x: 100, y: 200 },
    { x: 110, y: 200 },
    { x: 120, y: 200 },
  ];

  food = [];
  snake.forEach(drawSnake);
}

const drawSnake = (snake, index) => {
  canvas.save();
  canvas.fillStyle = (index === 0) ? '#E0A23B' : snakeUnit.color;
  canvas.fillRect(snake.x, snake.y, snakeUnit.width, snakeUnit.height);
  canvas.restore();
}

const drawFood = (apple, index) => {
  canvas.save();
  canvas.fillStyle = apple.color;
  canvas.fillRect(apple.x, apple.y, apple.width, apple.height);
  canvas.restore();
}

start();