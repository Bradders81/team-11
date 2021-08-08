$(document).ready(function () {
    var checkCrash = setInterval(function(){
        var characterTop = parseInt($('#character').css('top'))
        var characterLeft = parseInt($('#character').css('left'))
        var wallLeft = parseInt($('.walls').css('left'))

        console.log(wallLeft)

        if(wallLeft < 65 && wallLeft > 25){
            alert('Game over!')
        }

    },10);
})
