/**
 * Created by Anastasia on 12/17/2016.
 */
window.addEventListener('keydown',function(e){


    var value = e.keyCode;

    var audio;
    var key;
    switch(value){
        case 65:
             audio = document.querySelector("audio[data-key = '65']");
            key = document.querySelector(".key[data-key = '65']");
            audio.currentTime = 0;
            audio.play();
            key.classList.add('playing');
            break;
        case 83:
             audio = document.querySelector("audio[data-key = '83']");
            key = document.querySelector(".key[data-key = '83']");
            audio.currentTime = 0;
            audio.play();
            key.classList.add('playing');
            break;
        case 67:
            audio = document.querySelector("audio[data-key ='67'");
            key = document.querySelector(".key[data-key = '67']");
            audio.currentTime = 0;
            audio.play();
            key.classList.add('playing');
            break;
        case 68:
            audio = document.querySelector("audio[data-key ='68'");
            key = document.querySelector(".key[data-key = '67']");
            audio.currentTime = 0;
            audio.play();
            key.classList.add('playing');
            break;
        case 71:
            audio = document.querySelector("audio[data-key ='71'");
            key = document.querySelector(".key[data-key = '71']");
            audio.currentTime = 0;
            audio.play();
            key.classList.add('playing');
            break;
        case 72:
            audio = document.querySelector("audio[data-key ='72'");
            key = document.querySelector(".key[data-key = '72']");
            audio.currentTime = 0;
            audio.play();
            key.classList.add('playing');
            break;
        
        default:
            return;

    }




    
});

const keys = document.querySelectorAll('.key');
keys.forEach(function (key) {
    key.addEventListener('transitionend',removeTransition);
});

function removeTransition(e){
    if(e.propertyName!=='transform'){
        return;
    }
    if(this!=null){
        this.classList.remove('playing');
    }

}