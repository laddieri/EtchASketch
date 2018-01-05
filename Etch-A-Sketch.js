const container = document.querySelector('#container');

let size = 10;

for (let i = 0; i<size*size;i++) {
  const div = document.createElement('div');
  div.style.border = "1px solid black";
  div.style.height = "10%";
  div.style.width = "10%";
  div.style.float="left";
  container.appendChild(div);
}
