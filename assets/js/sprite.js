let sprite = document.getElementById('sprite');
let move = 3;

window.addEventListener('keydown', (e) =>{
    if(parseInt(sprite.style.left) >= 0 && parseInt(sprite.style.left) <= 855 && parseInt(sprite.style.top) >= 0 && parseInt(sprite.style.top) <= 650){
        switch (e.key){
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
    }else if(parseInt(sprite.style.left) < 0){
        sprite.style.left = 0;
        console.log('Hit left');
    }else if(parseInt(sprite.style.top) < 1){
        parseInt(sprite.style.top) = 5;
        console.log(sprite.style.top)
        console.log('Hit top');
    }else if(parseInt(sprite.style.left) > 854){
        sprite.style.left = 854;
        console.log('Hit right');
    }else if(parseInt(sprite.style.top) > 649){
        sprite.style.top = 649;
        }
})

window.addEventListener('load', ()=>{
    sprite.style.position = 'relative';
    sprite.style.left = '10px'
    sprite.style.top = '150px'
   })