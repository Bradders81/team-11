// modal string content
var about_info = "Hunger dash is a scrolling game created by Team 11 of Code Institute's August 2021 Hackathon. Team members included Bradders, Steve Forest_5P, Athiei Ajuong, and Aws Sabah Gheni";
var rules_info = "The Rules of Hunger Dash are very simple. </br>1. Use arrow keys to go up, down, left, and right. </br>2. Avoid any map terrain. </br>3. Survive!";
var leaderboard_info = "Here is the current Hunger Dash leaderboard!";

//game name for H1
const my_title = "Hunger Dash";

// modal variables
const the_modal = document.getElementById('modal');
const modal_header = document.querySelector('.modal-header');
const modal_body = document.querySelector('.modal-body');

//open modal btns
const open_modal = document.getElementsByClassName('open-modal');

//close modal btns
const close_btn = document.getElementById('close-btn');
const x_out_btn = document.getElementById('x-out');


//const create a play button hear
const play_button = document.getElementById('press-play');


//function to handle button event listeners
function handleButtonEvents() {

    //event listeners change info for about, rules and leader btns.
    open_modal[0].addEventListener('click', function() {
        the_modal.style.display = "block";
        modal_header.firstElementChild.innerHTML = "About";
        modal_body.innerHTML = `<p>${about_info}</p>`;
    });

    open_modal[1].addEventListener('click', function() {
        the_modal.style.display = "block";
        modal_header.firstElementChild.innerHTML = "Rules";
        modal_body.innerHTML = `<p>${rules_info}</p>`;
    });

    open_modal[2].addEventListener('click', function() {
        the_modal.style.display = "block";
        modal_header.firstElementChild.innerHTML = "Leaderboard";
        modal_body.innerHTML = `<p>${leaderboard_info}</p>`;
    });

    //event listeners to close the modals
    close_btn.addEventListener('click', function() {
        the_modal.style.display = "none";
    });

    x_out_btn.addEventListener('click', function() {
        the_modal.style.display = "none";
    });

    //if user clicks outside the modal box on the background
    window.onclick = function(event) {
        if(event.target == the_modal) {
            the_modal.style.display = "none";
        }
    }

    play_button.addEventListener('click', loadGame);

}

//create a function to separate title letters into individual spans
function splitGameTitle() {
    const separated_title = my_title.split("");
    const heading = document.querySelector('h1');

    for(let i=0; i < separated_title.length; i++) {
        heading.innerHTML += "<span>"+separated_title[i]+"</span>"
    }
}


function loadGame() {

    

}


handleButtonEvents();
splitGameTitle();