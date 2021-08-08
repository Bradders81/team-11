document.addEventListener("DOMContentLoaded", () => {

    let gameBox = document.getElementById("game-box");
    let gapPlace = [100, 200, 500, 400]
    let start = document.getElementById("start")
    let sprite = document.getElementById("sprite")
    let score = 0;
    let music = document.getElementById("music")


    clearSprite()

    start.addEventListener("click", function() {
        wallGenerator()
        sprite.style.display = "";
        setInterval(changeGap, 2700)
        setInterval(score1, 10);
    });

    function clearSprite() {
        sprite.style.display = "none";

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