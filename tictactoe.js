let boxes = document.getElementsByClassName("box");
let empty;
let random;
let attemp = 0;
let result = document.getElementById("result");
let currentWrite;
let gameModeChosen;
let turn = 1;

for(i = 0; i < boxes.length; i++){
    boxes[i].addEventListener("click", chooseGameMode);
}

function chooseGameMode(){
    alert("Tenés que elegir un modo de juego");
}

document.getElementById("playerVSComputer").addEventListener("click", playerVSComputer);
document.getElementById("playerVSPlayer").addEventListener("click", playerVSPlayer);

function playerVSComputer(){
    gameModeChosen = "playerVSComputer";
    document.getElementById("playerVSComputer").style.display = "none";
    document.getElementById("playerVSPlayer").style.display = "none";
    document.getElementById("gameModeChosen").innerHTML = "Player VS Computer";

    for(i = 0; i < boxes.length; i++){
        boxes[i].removeEventListener("click", chooseGameMode);
        boxes[i].addEventListener("click", write);
    }
}

function playerVSPlayer(){
    gameModeChosen = "playerVSPlayer";
    document.getElementById("playerVSComputer").style.display = "none";
    document.getElementById("playerVSPlayer").style.display = "none";
    document.getElementById("gameModeChosen").innerHTML = "Player 1 VS Player 2";

    for(i = 0; i < boxes.length; i++){
        boxes[i].removeEventListener("click", chooseGameMode);
        boxes[i].addEventListener("click", write);
    }
}


function write(e){
    if(gameModeChosen === "playerVSComputer"){
        empty = !e.target.hasChildNodes();
        if(empty){
            e.target.innerHTML = "X";
            attemp++;

            random = Math.round(Math.random() * 8);
            console.log("random inicial: " + random);
            currentWrite = true;

            do{
                empty = !boxes[random].hasChildNodes();
                console.log("random actual: " + random);
                
                if(empty){
                    boxes[random].innerHTML = "O";
                    currentWrite = false;
                    
                    if(attemp === 3){
                        gameFinished();
                    }
                }
                else{
                    random = Math.round(Math.random() * 8);
                }
            }
            while(currentWrite);
            
        }
        else{
            alert("Esa casilla ya está ocupada");
        }
    }
    else if(gameModeChosen === "playerVSPlayer"){

        empty = !e.target.hasChildNodes();
        if(empty){
            if(turn%2 !== 0){
                e.target.innerHTML = "X";
                turn++;
            }
            else{
                e.target.innerHTML = "O";
                turn++;
                attemp++;

                if(attemp === 3){
                    gameFinished();
                }
            }
        }
        else{
            alert("Esa casilla ya está ocupada");
        }
    }
}

function gameFinished(){
    for(i = 0; i < boxes.length; i++){
        boxes[i].removeEventListener("click", write);
        boxes[i].addEventListener("click", alertGameFinished);
    }

    result.innerHTML = "Juego terminado<br/>";

    //player gana
    if(gameModeChosen === "playerVSComputer"){

        if(boxes[0].innerHTML === "X" && boxes[1].innerHTML === "X" && boxes[2].innerHTML === "X"){
            result.innerHTML += "Has ganado!";
        }
        else if(boxes[3].innerHTML === "X" && boxes[4].innerHTML === "X" && boxes[5].innerHTML === "X"){
            result.innerHTML += "Has ganado!";
        }
        else if(boxes[6].innerHTML === "X" && boxes[7].innerHTML === "X" && boxes[8].innerHTML === "X"){
            result.innerHTML += "Has ganado!";
        }
        else if(boxes[0].innerHTML === "X" && boxes[3].innerHTML === "X" && boxes[6].innerHTML === "X"){
            result.innerHTML += "Has ganado!";
        }
        else if(boxes[1].innerHTML === "X" && boxes[4].innerHTML === "X" && boxes[7].innerHTML === "X"){
            result.innerHTML += "Has ganado!";
        }
        else if(boxes[2].innerHTML === "X" && boxes[5].innerHTML === "X" && boxes[8].innerHTML === "X"){
            result.innerHTML += "Has ganado!";
        }
        else if(boxes[0].innerHTML === "X" && boxes[4].innerHTML === "X" && boxes[8].innerHTML === "X"){
            result.innerHTML += "Has ganado!";
        }
        else if(boxes[2].innerHTML === "X" && boxes[4].innerHTML === "X" && boxes[6].innerHTML === "X"){
            result.innerHTML += "Has ganado!";
        }

        //computer gana

        else if(boxes[0].innerHTML === "O" && boxes[1].innerHTML === "O" && boxes[2].innerHTML === "O"){
            result.innerHTML += "Has perdido!";
        }
        else if(boxes[3].innerHTML === "O" && boxes[4].innerHTML === "O" && boxes[5].innerHTML === "O"){
            result.innerHTML += "Has perdido!";
        }
        else if(boxes[6].innerHTML === "O" && boxes[7].innerHTML === "O" && boxes[8].innerHTML === "O"){
            result.innerHTML += "Has perdido!";
        }
        else if(boxes[0].innerHTML === "O" && boxes[3].innerHTML === "O" && boxes[6].innerHTML === "O"){
            result.innerHTML += "Has perdido!";
        }
        else if(boxes[1].innerHTML === "O" && boxes[4].innerHTML === "O" && boxes[7].innerHTML === "O"){
            result.innerHTML += "Has perdido!";
        }
        else if(boxes[2].innerHTML === "O" && boxes[5].innerHTML === "O" && boxes[8].innerHTML === "O"){
            result.innerHTML += "Has perdido!";
        }
        else if(boxes[0].innerHTML === "O" && boxes[4].innerHTML === "O" && boxes[8].innerHTML === "O"){
            result.innerHTML += "Has perdido!";
        }
        else if(boxes[2].innerHTML === "O" && boxes[4].innerHTML === "O" && boxes[6].innerHTML === "O"){
            result.innerHTML += "Has perdido!";
        }

        //empate

        else{
            result.innerHTML += "Empate";
        }
    }

    //player 1 gana

    if(gameModeChosen === "playerVSPlayer"){

        if(boxes[0].innerHTML === "X" && boxes[1].innerHTML === "X" && boxes[2].innerHTML === "X"){
            result.innerHTML += "Player 1 gana!";
        }
        else if(boxes[3].innerHTML === "X" && boxes[4].innerHTML === "X" && boxes[5].innerHTML === "X"){
            result.innerHTML += "Player 1 gana!";
        }
        else if(boxes[6].innerHTML === "X" && boxes[7].innerHTML === "X" && boxes[8].innerHTML === "X"){
            result.innerHTML += "Player 1 gana!";
        }
        else if(boxes[0].innerHTML === "X" && boxes[3].innerHTML === "X" && boxes[6].innerHTML === "X"){
            result.innerHTML += "Player 1 gana!";
        }
        else if(boxes[1].innerHTML === "X" && boxes[4].innerHTML === "X" && boxes[7].innerHTML === "X"){
            result.innerHTML += "Player 1 gana!";
        }
        else if(boxes[2].innerHTML === "X" && boxes[5].innerHTML === "X" && boxes[8].innerHTML === "X"){
            result.innerHTML += "Player 1 gana!";
        }
        else if(boxes[0].innerHTML === "X" && boxes[4].innerHTML === "X" && boxes[8].innerHTML === "X"){
            result.innerHTML += "Player 1 gana!";
        }
        else if(boxes[2].innerHTML === "X" && boxes[4].innerHTML === "X" && boxes[6].innerHTML === "X"){
            result.innerHTML += "Player 1 gana!";
        }

        //computer gana

        else if(boxes[0].innerHTML === "O" && boxes[1].innerHTML === "O" && boxes[2].innerHTML === "O"){
            result.innerHTML += "Player 2 gana!";
        }
        else if(boxes[3].innerHTML === "O" && boxes[4].innerHTML === "O" && boxes[5].innerHTML === "O"){
            result.innerHTML += "Player 2 gana!";
        }
        else if(boxes[6].innerHTML === "O" && boxes[7].innerHTML === "O" && boxes[8].innerHTML === "O"){
            result.innerHTML += "Player 2 gana!";
        }
        else if(boxes[0].innerHTML === "O" && boxes[3].innerHTML === "O" && boxes[6].innerHTML === "O"){
            result.innerHTML += "Player 2 gana!";
        }
        else if(boxes[1].innerHTML === "O" && boxes[4].innerHTML === "O" && boxes[7].innerHTML === "O"){
            result.innerHTML += "Player 2 gana!";
        }
        else if(boxes[2].innerHTML === "O" && boxes[5].innerHTML === "O" && boxes[8].innerHTML === "O"){
            result.innerHTML += "Player 2 gana!";
        }
        else if(boxes[0].innerHTML === "O" && boxes[4].innerHTML === "O" && boxes[8].innerHTML === "O"){
            result.innerHTML += "Player 2 gana!";
        }
        else if(boxes[2].innerHTML === "O" && boxes[4].innerHTML === "O" && boxes[6].innerHTML === "O"){
            result.innerHTML += "Player 2 gana!";
        }

        //empate

        else{
            result.innerHTML += "Empate";
        }
    }

    //jugar de nuevo

    document.getElementById("playAgainButton").style.display = "block";
    document.getElementById("playAgainButton").addEventListener("click", playAgain);
}

function playAgain(){
    result.innerHTML = "";
    document.getElementById("gameModeChosen").innerHTML = "";
    document.getElementById("playAgainButton").style.display = "none";
    document.getElementById("playerVSComputer").style.display = "block";
    document.getElementById("playerVSPlayer").style.display = "block";
    attemp = 0;
    turn = 1;

    for(i = 0; i < boxes.length; i++){
        boxes[i].innerHTML = "";
    }

    for(i = 0; i < boxes.length; i++){
        boxes[i].removeEventListener("click", alertGameFinished);
        boxes[i].addEventListener("click", chooseGameMode);
    }
}

function alertGameFinished(){
    alert("El juego ya terminó");
}