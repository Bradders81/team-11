document.addEventListener("DOMContentLoaded", () => {

    let gameBox = document.getElementById("game-box");
    let gapPlace = [100, 200, 600, 400]
    let start = document.getElementById("start")
    let sprite = document.getElementById("sprite")
    let score = 0;
    let bgSound = new Audio("assets/sounds/game-music.wav")
    clearSprite()

    start.addEventListener("click", function() {
        wallGenerator()
        sound()
        setInterval(sound, 12000)
        sprite.style.display = "";
        setInterval(changeGap, 3000)
        setInterval(score1, 10);
    });

    function sound() {
        bgSound.play()
    }

<<<<<<< HEAD
    function clearSprite() {
        sprite.style.display = "none";
=======

    function clearSprite() {
        sprite.style.display = "none";
    }
>>>>>>> 2030926971ac41003c939ceb20aeb703cc659aaa

    }

  
    /* Creates game wall obsticles wtih a gaps at random.*/
    function wallGenerator() {
        newWall = document.createElement("div");
        newWall.className = "walls";
        gameBox.appendChild(newWall);
        gaps = document.createElement("div");
        gaps.className = "gap";
        gaps.style.height = "200px";
        newWall.appendChild(gaps);
        console.log(gaps)
    }

  
    /* Changes the martin top of the gap at random (using the array) on each wall. */
    function changeGap() {
        holeSize = [Math.floor(Math.random() * gapPlace.length)];
        size = gapPlace[holeSize];
        gaps.style.marginTop = size + 'px';
    }

    function score1() {
        score++;
        document.getElementById('timer').innerHTML = score;
    }

<<<<<<< HEAD
=======

>>>>>>> 2030926971ac41003c939ceb20aeb703cc659aaa
});