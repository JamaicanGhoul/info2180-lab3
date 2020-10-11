window.onload = event =>{
    gamePlay();
}

function gamePlay(){
    let board = document.getElementById('board');
    let squares = board.getElementsByTagName('div');
    let index = 0;

    for (let square of squares){
        square.classList.add('square');
        square.id = index ++; 
    } 
}