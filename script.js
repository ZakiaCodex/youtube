// Function to create sticks
function createSticks(count) {
    const sticksContainer = document.getElementById('sticksContainer');
    sticksContainer.innerHTML = '';
  
    for (let i = 0; i < count; i++) {
      const stick = document.createElement('div');
      stick.classList.add('stick');
      sticksContainer.appendChild(stick);
    }
  }
  
  // Initialize game
  let totalSticks = 15; // Change this value to set the initial number of sticks
  let currentPlayer = 1;
  
  createSticks(totalSticks);
  displayTurnMessage();
  
  // Take one stick
  document.getElementById('takeOneBtn').addEventListener('click', () => {
    takeSticks(1);
  });
  
  // Take two sticks
  document.getElementById('takeTwoBtn').addEventListener('click', () => {
    takeSticks(2);
  });
  
  // Function to handle stick taking
  function takeSticks(num) {
    totalSticks -= num;
    if (totalSticks <= 0) {
      endGame();
    } else {
      changePlayer();
      createSticks(totalSticks);
      displayTurnMessage();
    }
  }
  
  // Change player turn
  function changePlayer() {
    currentPlayer = currentPlayer === 1 ? 2 : 1;
  }
  
  // Display turn message
  function displayTurnMessage() {
    const turnMessage = document.getElementById('turnMessage');
    turnMessage.innerText = `Player ${currentPlayer}'s turn. Take 1 or 2 sticks.`;
  }
  
  // End game
  function endGame() {
    const turnMessage = document.getElementById('turnMessage');
    turnMessage.innerText = `Player ${currentPlayer} loses! Game Over!`;
    disableButtons();
  }
  
  // Disable buttons at the end of the game
  function disableButtons() {
    document.getElementById('takeOneBtn').disabled = true;
    document.getElementById('takeTwoBtn').disabled = true;
  }
  