const body = document.querySelector('body');
const container = document.querySelector('#container');



function drawGrid (gridSize) {
  let blockSize = 700 / gridSize;

  for (let i=0;i<gridSize*gridSize;i++){
    const drawDiv = document.createElement('div');
    drawDiv.style.width="" + blockSize +"px";
    drawDiv.classList.add("drawDiv");
    drawDiv.style.height= "" + blockSize +"px";
    container.appendChild(drawDiv);
  }
  let allDrawDivs = document.querySelectorAll('.drawDiv');
  allDrawDivs.forEach(drawDiv => {
    drawDiv.addEventListener('mouseover', function(event) {
      event.target.style.background = '#ff4468';
    });
  });

}
const resetButton = document.querySelector('#resetButton');
resetButton.addEventListener('click', function(e){
  let choice = prompt("Enter a number between 1-64 to create a new grid to draw on.");
  while (choice > 100) {
    choice = prompt("You must enter a number between 1 and 100");
  }
  while (container.firstChild){
    container.removeChild(container.firstChild);
  }

  drawGrid(choice);
})

drawGrid(11);
