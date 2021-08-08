document.addEventListener("DOMContentLoaded", () => {

    let gameBox = document.getElementById("game-box");
    let gapPlace = [100, 200, 600, 400]


    wallGenerator()
    setInterval(changeGap, 2500)


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

});