const gameMessageElement = document.querySelector('message');
const player1Element = document.querySelector('.player-1');
const player2Element = document.querySelector('.player-2');
const player1HealthElement = document.querySelector('.player-1-health-bar');
const player2HealthElement = document.querySelector('.player-2-health-bar');
const playerBtn = document.querySelectorAll('.play-btn');
const resetBtn = document.querySelector('.reset-btn');
let player1Health;
let player2Health;
let player2Option;
let isGameOver;
const updateData = (element, message) => {
    element.textContent = message;    
};

const init = () => {
    player1Health=100;
    player1Health=100;
    isGameOver=false;
    player1HealthElement.style.width ='100%';
    player2HealthElement.style.width ='100%';
    updateData(gameMessageElement, 'Fight');
    updateData(player1Element, '&#129307'); 
    updateData(player1Element, '&#129309'); 
};
init();
const player2Turn = () => {
    const player2Options = Math.trunc(Math.random()*3)+ 1;
    switch (player2Options) { 
        case 1: 
            player2Option = (name:'Rock', emoji:'');
        break;
        case 2:
            
    
        case 2:
    }


}



