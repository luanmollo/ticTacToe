let boxes = document.getElementsByClassName("box");
let empty;
let random;
let attemp = 0;
let result = document.getElementById("result");
let currentWrite;
let gameModeChosen;
let turn = 1;
let playerName;
let player1Name;
let player2Name;

for(i = 0; i < boxes.length; i++){
    boxes[i].addEventListener("click", alertChooseGameMode);
}

function alertChooseGameMode(){
    alert("Tenés que elegir un modo de juego");
}

function alertSetNames(){
    alert("Tenés que elegir un nombre");
}

document.getElementById("playerVSComputer").addEventListener("click", playerVSComputer);
document.getElementById("playerVSPlayer").addEventListener("click", playerVSPlayer);

function playerVSComputer(){
    gameModeChosen = "playerVSComputer";
    document.getElementById("playerVSComputer").style.display = "none";
    document.getElementById("playerVSPlayer").style.display = "none";
    document.getElementById("playerVSComputerDiv").style.display = "flex";
    document.getElementById("playerName").focus();

    document.getElementById("playerVSComputerButton").addEventListener("click", setGameMode);

    for(i = 0; i < boxes.length; i++){
        boxes[i].removeEventListener("click", alertChooseGameMode);
        boxes[i].addEventListener("click", alertSetNames);
    }
}

function playerVSPlayer(){
    gameModeChosen = "playerVSPlayer";
    document.getElementById("playerVSComputer").style.display = "none";
    document.getElementById("playerVSPlayer").style.display = "none";
    document.getElementById("playerVSPlayerDiv").style.display = "flex";
    document.getElementById("player1Name").focus();

    document.getElementById("playerVSPlayerButton").addEventListener("click", setGameMode);

    for(i = 0; i < boxes.length; i++){
        boxes[i].removeEventListener("click", alertChooseGameMode);
        boxes[i].addEventListener("click", alertSetNames);
    }
}

function setGameMode(e){
    for(i = 0; i < boxes.length; i++){
            boxes[i].removeEventListener("click", alertSetNames);
            boxes[i].addEventListener("click", write);
    }

    if(e.target.id === "playerVSComputerButton"){
        document.getElementById("playerVSComputerDiv").style.display = "none";
        playerName = document.getElementById("playerName").value;
        playerName = playerName.charAt(0).toUpperCase() + playerName.slice(1);
        document.getElementById("playerVSComputerNames").innerHTML = playerName + " VS Computer";
        document.getElementById("playerVSComputerNames").style.display = "block";
    }
    else if(e.target.id === "playerVSPlayerButton"){
        document.getElementById("playerVSPlayerDiv").style.display = "none";
        player1Name = document.getElementById("player1Name").value;
        player1Name = player1Name.charAt(0).toUpperCase() + player1Name.slice(1);
        player2Name = document.getElementById("player2Name").value;
        player2Name = player2Name.charAt(0).toUpperCase() + player2Name.slice(1);
        document.getElementById("playerVSPlayerNames").innerHTML =  player1Name + " VS " + player2Name;
        document.getElementById("playerVSPlayerNames").style.display = "block";
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
            document.getElementById("recordText").innerHTML += playerName + " le ganó a Computer<br/>";
            document.getElementById("record").style.display = "block";
        }
        else if(boxes[3].innerHTML === "X" && boxes[4].innerHTML === "X" && boxes[5].innerHTML === "X"){
            result.innerHTML += "Has ganado!";
            document.getElementById("recordText").innerHTML += playerName + " le ganó a Computer<br/>";
            document.getElementById("record").style.display = "block";
        }
        else if(boxes[6].innerHTML === "X" && boxes[7].innerHTML === "X" && boxes[8].innerHTML === "X"){
            result.innerHTML += "Has ganado!";
            document.getElementById("recordText").innerHTML += playerName + " le ganó a Computer<br/>";
            document.getElementById("record").style.display = "block";
        }
        else if(boxes[0].innerHTML === "X" && boxes[3].innerHTML === "X" && boxes[6].innerHTML === "X"){
            result.innerHTML += "Has ganado!";
            document.getElementById("recordText").innerHTML += playerName + " le ganó a Computer<br/>";
            document.getElementById("record").style.display = "block";
        }
        else if(boxes[1].innerHTML === "X" && boxes[4].innerHTML === "X" && boxes[7].innerHTML === "X"){
            result.innerHTML += "Has ganado!";
            document.getElementById("recordText").innerHTML += playerName + " le ganó a Computer<br/>";
            document.getElementById("record").style.display = "block";
        }
        else if(boxes[2].innerHTML === "X" && boxes[5].innerHTML === "X" && boxes[8].innerHTML === "X"){
            result.innerHTML += "Has ganado!";
            document.getElementById("recordText").innerHTML += playerName + " le ganó a Computer<br/>";
            document.getElementById("record").style.display = "block";
        }
        else if(boxes[0].innerHTML === "X" && boxes[4].innerHTML === "X" && boxes[8].innerHTML === "X"){
            result.innerHTML += "Has ganado!";
            document.getElementById("recordText").innerHTML += playerName + " le ganó a Computer<br/>";
            document.getElementById("record").style.display = "block";
        }
        else if(boxes[2].innerHTML === "X" && boxes[4].innerHTML === "X" && boxes[6].innerHTML === "X"){
            result.innerHTML += "Has ganado!";
            document.getElementById("recordText").innerHTML += playerName + " le ganó a Computer<br/>";
            document.getElementById("record").style.display = "block";
        }

        //computer gana

        else if(boxes[0].innerHTML === "O" && boxes[1].innerHTML === "O" && boxes[2].innerHTML === "O"){
            result.innerHTML += "Has perdido!";
            document.getElementById("recordText").innerHTML += "Computer le ganó a " + playerName + "<br/>";
            document.getElementById("record").style.display = "block";
        }
        else if(boxes[3].innerHTML === "O" && boxes[4].innerHTML === "O" && boxes[5].innerHTML === "O"){
            result.innerHTML += "Has perdido!";
            document.getElementById("recordText").innerHTML += "Computer le ganó a " + playerName + "<br/>";
            document.getElementById("record").style.display = "block";
        }
        else if(boxes[6].innerHTML === "O" && boxes[7].innerHTML === "O" && boxes[8].innerHTML === "O"){
            result.innerHTML += "Has perdido!";
            document.getElementById("recordText").innerHTML += "Computer le ganó a " + playerName + "<br/>";
            document.getElementById("record").style.display = "block";
        }
        else if(boxes[0].innerHTML === "O" && boxes[3].innerHTML === "O" && boxes[6].innerHTML === "O"){
            result.innerHTML += "Has perdido!";
            document.getElementById("recordText").innerHTML += "Computer le ganó a " + playerName + "<br/>";
            document.getElementById("record").style.display = "block";
        }
        else if(boxes[1].innerHTML === "O" && boxes[4].innerHTML === "O" && boxes[7].innerHTML === "O"){
            result.innerHTML += "Has perdido!";
            document.getElementById("recordText").innerHTML += "Computer le ganó a " + playerName + "<br/>";
            document.getElementById("record").style.display = "block";
        }
        else if(boxes[2].innerHTML === "O" && boxes[5].innerHTML === "O" && boxes[8].innerHTML === "O"){
            result.innerHTML += "Has perdido!";
            document.getElementById("recordText").innerHTML += "Computer le ganó a " + playerName + "<br/>";
            document.getElementById("record").style.display = "block";
        }
        else if(boxes[0].innerHTML === "O" && boxes[4].innerHTML === "O" && boxes[8].innerHTML === "O"){
            result.innerHTML += "Has perdido!";
            document.getElementById("recordText").innerHTML += "Computer le ganó a " + playerName + "<br/>";
            document.getElementById("record").style.display = "block";
        }
        else if(boxes[2].innerHTML === "O" && boxes[4].innerHTML === "O" && boxes[6].innerHTML === "O"){
            result.innerHTML += "Has perdido!";
            document.getElementById("recordText").innerHTML += "Computer le ganó a " + playerName + "<br/>";
            document.getElementById("record").style.display = "block";
        }

        //empate

        else{
            result.innerHTML += "Empate";
            document.getElementById("recordText").innerHTML += "Empate entre " + playerName + " y Computer<br/>";
            document.getElementById("record").style.display = "block";
        }
    }

    //player 1 gana

    if(gameModeChosen === "playerVSPlayer"){

        if(boxes[0].innerHTML === "X" && boxes[1].innerHTML === "X" && boxes[2].innerHTML === "X"){
            result.innerHTML += player1Name + " gana!";
            document.getElementById("recordText").innerHTML += player1Name + " le ganó a " + player2Name + "<br/>";
            document.getElementById("record").style.display = "block";
        }
        else if(boxes[3].innerHTML === "X" && boxes[4].innerHTML === "X" && boxes[5].innerHTML === "X"){
            result.innerHTML += player1Name + " gana!";
            document.getElementById("recordText").innerHTML += player1Name + " le ganó a " + player2Name + "<br/>";
            document.getElementById("record").style.display = "block";
        }
        else if(boxes[6].innerHTML === "X" && boxes[7].innerHTML === "X" && boxes[8].innerHTML === "X"){
            result.innerHTML += player1Name + " gana!";
            document.getElementById("recordText").innerHTML += player1Name + " le ganó a " + player2Name + "<br/>";
            document.getElementById("record").style.display = "block";
        }
        else if(boxes[0].innerHTML === "X" && boxes[3].innerHTML === "X" && boxes[6].innerHTML === "X"){
            result.innerHTML += player1Name + " gana!";
            document.getElementById("recordText").innerHTML += player1Name + " le ganó a " + player2Name + "<br/>";
            document.getElementById("record").style.display = "block";
        }
        else if(boxes[1].innerHTML === "X" && boxes[4].innerHTML === "X" && boxes[7].innerHTML === "X"){
            result.innerHTML += player1Name + " gana!";
            document.getElementById("recordText").innerHTML += player1Name + " le ganó a " + player2Name + "<br/>";
            document.getElementById("record").style.display = "block";
        }
        else if(boxes[2].innerHTML === "X" && boxes[5].innerHTML === "X" && boxes[8].innerHTML === "X"){
            result.innerHTML += player1Name + " gana!";
            document.getElementById("recordText").innerHTML += player1Name + " le ganó a " + player2Name + "<br/>";
            document.getElementById("record").style.display = "block";
        }
        else if(boxes[0].innerHTML === "X" && boxes[4].innerHTML === "X" && boxes[8].innerHTML === "X"){
            result.innerHTML += player1Name + " gana!";
            document.getElementById("recordText").innerHTML += player1Name + " le ganó a " + player2Name + "<br/>";
            document.getElementById("record").style.display = "block";
        }
        else if(boxes[2].innerHTML === "X" && boxes[4].innerHTML === "X" && boxes[6].innerHTML === "X"){
            result.innerHTML += player1Name + " gana!";
            document.getElementById("recordText").innerHTML += player1Name + " le ganó a " + player2Name + "<br/>";
            document.getElementById("record").style.display = "block";
        }

        //computer gana

        else if(boxes[0].innerHTML === "O" && boxes[1].innerHTML === "O" && boxes[2].innerHTML === "O"){
            result.innerHTML += player2Name + " gana!";
            document.getElementById("recordText").innerHTML += player2Name + " le ganó a " + player1Name + "<br/>";
            document.getElementById("record").style.display = "block";
        }
        else if(boxes[3].innerHTML === "O" && boxes[4].innerHTML === "O" && boxes[5].innerHTML === "O"){
            result.innerHTML += player2Name + " gana!";
            document.getElementById("recordText").innerHTML += player2Name + " le ganó a " + player1Name + "<br/>";
            document.getElementById("record").style.display = "block";
        }
        else if(boxes[6].innerHTML === "O" && boxes[7].innerHTML === "O" && boxes[8].innerHTML === "O"){
            result.innerHTML += player2Name + " gana!";
            document.getElementById("recordText").innerHTML += player2Name + " le ganó a " + player1Name + "<br/>";
            document.getElementById("record").style.display = "block";
        }
        else if(boxes[0].innerHTML === "O" && boxes[3].innerHTML === "O" && boxes[6].innerHTML === "O"){
            result.innerHTML += player2Name + " gana!";
            document.getElementById("recordText").innerHTML += player2Name + " le ganó a " + player1Name + "<br/>";
            document.getElementById("record").style.display = "block";
        }
        else if(boxes[1].innerHTML === "O" && boxes[4].innerHTML === "O" && boxes[7].innerHTML === "O"){
            result.innerHTML += player2Name + " gana!";
            document.getElementById("recordText").innerHTML += player2Name + " le ganó a " + player1Name + "<br/>";
            document.getElementById("record").style.display = "block";
        }
        else if(boxes[2].innerHTML === "O" && boxes[5].innerHTML === "O" && boxes[8].innerHTML === "O"){
            result.innerHTML += player2Name + " gana!";
            document.getElementById("recordText").innerHTML += player2Name + " le ganó a " + player1Name + "<br/>";
            document.getElementById("record").style.display = "block";
        }
        else if(boxes[0].innerHTML === "O" && boxes[4].innerHTML === "O" && boxes[8].innerHTML === "O"){
            result.innerHTML += player2Name + " gana!";
            document.getElementById("recordText").innerHTML += player2Name + " le ganó a " + player1Name + "<br/>";
            document.getElementById("record").style.display = "block";
        }
        else if(boxes[2].innerHTML === "O" && boxes[4].innerHTML === "O" && boxes[6].innerHTML === "O"){
            result.innerHTML += player2Name + " gana!";
            document.getElementById("recordText").innerHTML += player2Name + " le ganó a " + player1Name + "<br/>";
            document.getElementById("record").style.display = "block";
        }

        //empate

        else{
            result.innerHTML += "Empate";
            document.getElementById("recordText").innerHTML += "Empate entre " + player1Name + " y " + player2Name + "<br/>";
            document.getElementById("record").style.display = "block";
        }
    }

    //jugar de nuevo

    document.getElementById("playAgainButton").style.display = "block";
    document.getElementById("playAgainButton").addEventListener("click", playAgain);
}

function playAgain(){
    result.innerHTML = "";
    document.getElementById("playAgainButton").style.display = "none";
    document.getElementById("playerVSComputerNames").style.display = "none";
    document.getElementById("playerVSPlayerNames").style.display = "none";
    document.getElementById("playerVSComputer").style.display = "block";
    document.getElementById("playerVSPlayer").style.display = "block";

    attemp = 0;
    turn = 1;
    playerName = "";
    player1Name = "";
    player2Name = "";

    document.getElementById("playerName").value = "";
    document.getElementById("player1Name").value = "";
    document.getElementById("player2Name").value = "";

    for(i = 0; i < boxes.length; i++){
        boxes[i].innerHTML = "";
    }

    for(i = 0; i < boxes.length; i++){
        boxes[i].removeEventListener("click", alertGameFinished);
        boxes[i].addEventListener("click", alertChooseGameMode);
    }
}

function alertGameFinished(){
    alert("El juego ya terminó");
}

document.getElementById("resetRecord").addEventListener("click", resetRecord);

function resetRecord(){
    document.getElementById("recordText").innerHTML = "Historial:<br/>";
    document.getElementById("record").style.display = "none";
}