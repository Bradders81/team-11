let sprite = document.getElementById('sprite');
let spritePosition = sprite.innerHTML.offsetTop;

console.log(spritePosition)

/* load images
const images = [];
images.length = 6;

for(var i = 1; i < images.length ; i++){
    images[i] = new Image();
    images[i].src = 'sprite'+'i.toString()'+'png';
}

function moveRight(){

}
*/
sprite.addEventListener("keydown", function(event) {
    event.preventDefault();
    const key = event.key; // "ArrowRight", "ArrowLeft", "ArrowUp", or "ArrowDown"
    switch (key) { // change to event.key to key to use the above variable
      case "ArrowLeft":
        // Left pressed
        <do something>
        break;
      case "ArrowRight":
        // Right pressed
        <do something>
        break;
      case "ArrowUp":
        // Up pressed
        sprite.top = +50px;

        break;
      case "ArrowDown":
        // Down pressed
        <do something>
        break;
    }
  });