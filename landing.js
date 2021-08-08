// modal string content
var about_info = "Hunger dash is a lovely game created by Team 11 of Code Institute's August 2021 Hackathon.";
var rules_info = "The Rules of Hunger Dash are very simple.";
var leaderboard_info = "Here is the current Hunger Dash leaderboard!";

// modal variables
const the_modal = document.getElementById('modal');
const modal_header = document.querySelector('.modal-header');
const modal_body = document.querySelector('.modal-body');

//open modal btns
const open_modal = document.getElementsByClassName('open-modal');

//close modal btns
const close_btn = document.getElementById('close-btn');
const x_out_btn = document.getElementById('x-out');

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

}