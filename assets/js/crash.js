$(document).ready(function() {
    let soundcrash = new Audio("assets/sounds/crash.wav")
    var checkCrash = setInterval(function() {
        var characterTop = parseInt($('#sprite').css('top'))
        var characterLeft = parseInt($('#sprite').css('left'))
        var wallLeft = parseInt($('.walls').css('left'))
        var gapTop = parseInt($('.gap').css('margin-top'))
        var gapSpace = parseInt($('.gap').css('height'))


        if (wallLeft < characterLeft + 45 && wallLeft > characterLeft) {
            console.log('pass wall')
            if (!((characterTop - 35 >= gapTop) && (characterTop <= (gapTop + gapSpace)))) {
                $("#game-over").modal('show');
                $(".walls").hide();
                $("#sprite").hide();
                $("#timer").hide();
                soundcrash.play()
                setTimeout(function() {
                    location.reload();
                }, 3000);
            }
        }

    }, 10);
})