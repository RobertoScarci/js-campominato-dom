// prendo la variabile riguardante la section principale
const mainContentEl = document.querySelector('main section.main-content');

const startButtonEl = document.querySelector('button#play-button');

const difficultSelector = document.querySelector('select#select-difficult');

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

        currentSquare.innerHTML += `<span> ${squareContent} </span>`;

        const cellSize = `calc(100% / ${cellsPerRow})`;
        currentSquare.style.width = cellSize;
        currentSquare.style.height= cellSize;

        

        currentSquare.addEventListener('click', function(){
            if ( squareContent % 2 === 0){
                currentSquare.classList.add('bg-blue');
            } else {
                currentSquare.classList.add('bg-red');
            }
            currentSquare.classList.add('clicked');
            console.log(squareContent);
        });

        wrapperElement.appendChild(currentSquare);
    }
}



// ====Function====
function getNewSquare(){
    const newSquareElement = document.createElement('article');
    newSquareElement.classList.add('item-square');
    return newSquareElement;
}