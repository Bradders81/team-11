document.addEventListener("DOMContentLoaded", () => {


    let gameBox = document.getElementById("game-box");
    let gapPlace = [100, 200, 600, 400]
    let start = document.getElementById("start")
    let sprite = document.getElementById("sprite")
    let score = 0;
    let count = 1;
    clearSprite()

    start.addEventListener("click", function() {
        sound()
        setInterval(sound, 14000)
        sprite.style.display = "";
        wallGenerator()
        setInterval(score1, 10);


    });

    function sound() {
        let bgSound = new Audio("assets/sounds/game-music.wav")
        bgSound.play()
    }



    function clearSprite() {
        sprite.style.display = "none";
        setInterval(changeGap, 2500)
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




});