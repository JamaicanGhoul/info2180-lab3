window.onload = event =>{
    gamePlay();
}

function gamePlay(){
    let board = document.getElementById('board');
    let squares = board.getElementsByTagName('div');
    let index = 0;
    let currentHolder = new Array(9); 
    let ender = 'O';
    let isGameEnd = false;

    for (let square of squares){
        square.classList.add('square');
        square.id = index ++; 
        
        square.onclick = (event)=>{

            if (currentHolder[event.target.id] || isGameEnd){
                return;
            }

            if (ender === 'X'){
                event.target.innerText = 'O';
                event.target.classList.add('O');
                currentHolder[event.target.id] = 'O';
                ender = 'O';
            }
            else if (ender === 'O'){
                event.target.innerText = 'X';
                event.target.classList.add('X');
                currentHolder[event.target.id] = 'X';
                ender = 'X';
            }
        };

        square.onmouseover = event =>{
            if(!isGameEnd){
                event.target.classList.add('hover');
            }
        };

        square.onmouseleave = event =>{
            event.target.classList.remove('hover');
        };
    }
}