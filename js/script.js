// prendo la variabile riguardante la section principale
const mainContent = document.querySelector('section')
const button = document.querySelector('button')

for (let i = 1 ; i <= 100 ; i++){
    
    const currentSquare = newSquare();

    const squareContent = i;

    //  aggiungo il contenuto 
    currentSquare.innerHTML += `<span> ${squareContent} </span>`;

    // quando clicco apparira la griglia
    button.addEventListener('click', function(){
        mainContent.classList.add('main-content');
        mainContent.appendChild(currentSquare);
    });

    currentSquare.addEventListener('click', function(){
        if(squareContent % 2 === 0){
            currentSquare.classList.add('bg-blue')
            console.log('Sei ancora in vita!')

        } else if (squareContent % 2 === 1) {
            currentSquare.classList.add('bg-red')
            console.log('Bomba ESPLOSA!')
        }
    })
 
}


// ====Function====
function newSquare(){
    const newSquareElement = document.createElement('article');
    newSquareElement.classList.add('item-square');
    return newSquareElement;
}