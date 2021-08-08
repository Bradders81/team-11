let score = 0;

let timer = document.getElementById('timer');


function score(){
    score++;
    document.getElementById('timer').innerHTML = score;
}

window.setInterval(score, 10);