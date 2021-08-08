let sprite = document.getElementById('sprite');
let move = 5;

window.addEventListener('keydown', (e) => {
    if (parseInt(sprite.style.left) >= 0 && parseInt(sprite.style.left) <= 845 && parseInt(sprite.style.top) >= 0 && parseInt(sprite.style.top) < 655) {
        switch (e.key) {
            case 'ArrowLeft':
                sprite.style.left = parseInt(sprite.style.left) - move + 'px';
                console.log('left')
                break;
            case 'ArrowRight':
                sprite.style.left = parseInt(sprite.style.left) + move + 'px';
                console.log('right')
                break;
            case 'ArrowUp':
                sprite.style.top = parseInt(sprite.style.top) - move + 'px';
                console.log('top')
                break;
            case 'ArrowDown':
                sprite.style.top = parseInt(sprite.style.top) + move + 'px';
                console.log('down')
                break;
        }
    }
    if (parseInt(sprite.style.left) < 0) {
        sprite.style.left = 0 + 'px';

    }
    if (parseInt(sprite.style.top) < 0) {
        sprite.style.top = 0 + 'px';

    }
    if (parseInt(sprite.style.left) > 0 && parseInt(sprite.style.left) >= 845) {
        sprite.style.left = 845 + 'px';

    }
    if (parseInt(sprite.style.top) > 0 && parseInt(sprite.style.top) > 645) {
        sprite.style.top = 645 + 'px';
    }
})

window.addEventListener('load', () => {
    sprite.style.position = 'relative';
    sprite.style.left = '5px'
    sprite.style.top = '305px'
})