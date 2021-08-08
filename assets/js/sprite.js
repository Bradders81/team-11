let sprite = document.getElementById('sprite');
let move = 3;

window.addEventListener('keydown', (e) => {
    if (parseInt(sprite.style.left) >= 0 && parseInt(sprite.style.left) <= 855 && parseInt(sprite.style.top) >= 0 && parseInt(sprite.style.top) < 651) {
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
    } else if (parseInt(sprite.style.left) < 0) {
        sprite.style.left = 0 + 'px';

    } else if (parseInt(sprite.style.top) < 0) {
        sprite.style.top = 0 + 'px';

    } else if (parseInt(sprite.style.left) > 0 && parseInt(sprite.style.left) >= 850) {
        sprite.style.left = 850 + 'px';

    } else if (parseInt(sprite.style.top) > 0 && parseInt(sprite.style.top) > 650) {
        sprite.style.top = 650 + 'px';
    }
})

window.addEventListener('load', () => {
    sprite.style.position = 'relative';
    sprite.style.left = '0px'
    sprite.style.top = '300px'
})