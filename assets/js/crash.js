$(document).ready(function () {
    var checkCrash = setInterval(function(){
        var characterTop = parseInt($('#sprite').css('top'))
        var characterLeft = parseInt($('#sprite').css('left'))
        var wallLeft = parseInt($('.walls').css('left'))
        var gapTop = parseInt($('.gap').css('margin-top'))
        var gapSpace = parseInt($('.gap').css('height'))

/*         console.log(characterLeft < wallLeft) */


        if (wallLeft < characterLeft + 45 && wallLeft > characterLeft) {
            console.log('pass wall')
            if (!((characterTop >= gapTop) && (characterTop <= (gapTop + gapSpace - 45))))
                alert('Game over!')
        }

    },10);
})
