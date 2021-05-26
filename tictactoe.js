let boxes = document.getElementsByClassName("box");
let empty;
let random;
let attemp = 0;
let result = document.getElementById("result");
let currentWrite;

for(i = 0; i < boxes.length; i++){
    boxes[i].addEventListener("click", write);
}

function write(e){
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

function gameFinished(){
    for(i = 0; i < boxes.length; i++){
        boxes[i].removeEventListener("click", write);
        boxes[i].addEventListener("click", alertGameFinished);
    }

    result.innerHTML = "Juego terminado<br/>";

    //player gana

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

    //jugar de nuevo

    document.getElementById("playAgainButton").style.display = "block";
    document.getElementById("playAgainButton").addEventListener("click", playAgain);

}

function playAgain(){
    for(i = 0; i < boxes.length; i++){
        boxes[i].innerHTML = "";
        result.innerHTML = "";
        document.getElementById("playAgainButton").style.display = "none";
        attemp = 0;
    }

    for(i = 0; i < boxes.length; i++){
        boxes[i].removeEventListener("click", alertGameFinished);
        boxes[i].addEventListener("click", write);
    }
}

function alertGameFinished(){
    alert("El juego ya terminó");
}