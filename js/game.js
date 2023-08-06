const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump');
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 700);
}

const loop = setInterval(() => {
     let pipePosition = pipe.offsetLeft; 
     let marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');


     if (pipePosition <= 100 && pipePosition > 0 && marioPosition < 60) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
        
        pipe.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
        
        mario.src = "img/game-over.png";
        mario.style.width = '75px';

        clearInterval(loop);
     }
}, 10);

document.addEventListener('keydown', jump);


