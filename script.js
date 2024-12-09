const grid = document.getElementById('grid');
const scoreDisplay = document.getElementById('score');
const width = 10; // Grid width
let score = 0;

// Create grid cells
for (let i = 0; i < width * width; i++) {
  const cell = document.createElement('div');
  cell.classList.add('cell');
  if (Math.random() > 0.3) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    cell.appendChild(dot);
  }
  grid.appendChild(cell);
}

const cells = Array.from(document.querySelectorAll('.cell'));

// Initial Pac-Man position
let pacmanPosition = 22;
cells[pacmanPosition].classList.add('pacman');

// Movement controls
document.addEventListener('keydown', (e) => {
  cells[pacmanPosition].classList.remove('pacman');

  switch (e.key) {
    case 'ArrowUp':
      if (pacmanPosition - width >= 0) pacmanPosition -= width;
      break;
    case 'ArrowDown':
      if (pacmanPosition + width < width * width) pacmanPosition += width;
      break;
    case 'ArrowLeft':
      if (pacmanPosition % width !== 0) pacmanPosition -= 1;
      break;
    case 'ArrowRight':
      if (pacmanPosition % width < width - 1) pacmanPosition += 1;
      break;
  }

  // Eat dot
  if (cells[pacmanPosition].querySelector('.dot')) {
    cells[pacmanPosition].removeChild(cells[pacmanPosition].querySelector('.dot'));
    score++;
    scoreDisplay.textContent = `Score: ${score}`;
  }

  cells[pacmanPosition].classList.add('pacman');
});
