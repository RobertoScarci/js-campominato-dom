// prendo la variabile riguardante la section principale
const mainContentEl = document.querySelector('main section.main-content');

const startButtonEl = document.querySelector('button#play-button');

const difficultSelector = document.querySelector('select#select-difficult');

const gameStats = document.querySelector('div.game-stats')

startButtonEl.addEventListener('click', function(){
    generateNewGame(mainContentEl, difficultSelector);
});


// ? ------ Functions ------ ?

function generateNewGame(wrapperElement, levelSelector){

    wrapperElement.innerHTML = '';

    const level = parseInt(levelSelector.value);
    let cellsNo;

    switch (level){
        case 0:
        default:
            cellsNo = 100;
            break;
        case 1:
            cellsNo = 81;
            break;
        case 2:
            cellsNo = 49;
            break;
    }

    let cellsPerRow = Math.sqrt(cellsNo);

    for (let i = 1 ; i <= cellsNo ; i++){
        const currentSquare = getNewSquare();
        const squareContent = i;
        const bombList = generateBomb(cellsNo);

        currentSquare.innerHTML += `<span> ${squareContent} </span>`;

        const cellSize = `calc(100% / ${cellsPerRow})`;
        currentSquare.style.width = cellSize;
        currentSquare.style.height= cellSize;

        let gameOver = false;

        currentSquare.addEventListener('click', function() {
            if(!gameOver) {
                if(bombList.includes(parseInt(this.textContent))) {
                    currentSquare.classList.add('bg-red')
                    gameStats.classList.add('game-over');
                    gameStats.textContent = 'Game Over';
                    gameOver = true;
                } else {
                    this.classList.add('bg-blue');
                }
            }
        });


        wrapperElement.appendChild(currentSquare);
    }
}

function generateUniqueRandomNumber(numberList, min, max) {
    if(numberList.length > max - min + 1) {
        console.log('Numeri massimi raggiunti');
        return ;
    }

    let generatedNumber;

    do {
        generatedNumber = Math.floor((Math.random() * (max - min)) + min);
    } while(numberList.includes(generatedNumber)); 

    return generatedNumber;
}

function generateBomb(bombNumber) {
    const bomb = [];
    for(let i = 0; i < 16; i++) {
        bomb[i] = generateUniqueRandomNumber(bomb, 1, bombNumber);
    }
    return bomb;
}


// ====Function====
function getNewSquare(){
    const newSquareElement = document.createElement('article');
    newSquareElement.classList.add('item-square');
    return newSquareElement;
}