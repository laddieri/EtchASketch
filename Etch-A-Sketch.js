const body = document.querySelector('body');
const resetDiv = document.querySelector('resetButton');

function drawContainer () {
  const container = document.createElement('div');
  container.setAttribute('id','container');
  container.style.border="1px solid red";

  return container;
}

let container = drawContainer();
body.appendChild(container);


function drawGrid (gridSize, containerSize) {
    let blockSize = containerSize / gridSize;
    container.style.height = containerSize + "px";
    container.style.width = containerSize +"px";

  for (let i=0;i<gridSize*gridSize;i++){
    const drawDiv = document.createElement('div');
    drawDiv.style.width="" + blockSize +"px";
    drawDiv.classList.add("drawDiv");
    drawDiv.style.height= "" + blockSize +"px";
    container.appendChild(drawDiv);

    let allDrawDivs = document.querySelectorAll('.drawDiv');
    allDrawDivs.forEach(drawDiv => {
      drawDiv.addEventListener('mouseover', function(event) {
        event.target.style.background = '#ff4468';
      });
    });
  }
}

drawGrid(11, 700);

const resetButton = document.querySelector('#resetButton');
resetButton.addEventListener('click', function(e){
  let choice = prompt("Enter a number between 1-20 to create a new grid to draw on.");
  if (choice > 20) {
    choice = prompt("You must enter a number that is less than 20");
  }
  const newContainer = drawContainer();
  body.replaceChild(newContainer,container);
  container=newContainer;

  drawGrid(choice, 700);
})
