function sendEquation() {
    num1 = document.getElementById("first_num").value;
    operation = document.getElementById("operation").value;
    num2 = document.getElementById("second_num").value;

    Equation = num1 + operation + num2;
    console.log(Equation)
    Final = "<h4 id = 'question'>" + Equation + "</h4>";
    inputbox = "<br>answer: <input id = 'answerbox' type = 'text'>"
    checkbutton = "<br> <button id = 'check' onclick = 'check()' class = 'btn btn-success'> " + "Check Answer" + "</button>"
    row = Final + inputbox + checkbutton
    document.getElementById("output").innerHTML = row
    if (operation == "*") {
        answer = num1 * num2
        console.log(answer);
    }
    if (operation == "/") {
        answer = num1 / num2
        console.log(answer);
    }
    if (operation == "+") {
        answer = Number(num1) + Number(num2)
        console.log(answer);
    }
    if (operation == "-") {
        answer = num1 - num2
        console.log(answer);
    }
}

player1_name = localStorage.getItem("Player_1_name");
player2_name = localStorage.getItem("Player_2_name");

player1_score = 0;
player2_score = 0;

answer_turn = "player1"
document.getElementById("player_2_score").innerHTML = player2_score;
document.getElementById("player_1_score").innerHTML = player1_score;
document.getElementById("player_1_name").innerHTML = player1_name + " :  ";
document.getElementById("player_2_name").innerHTML = player2_name + " :  ";


document.getElementById("player-question").innerHTML = "Question Turn - " + player2_name;
document.getElementById("player-answer").innerHTML = "Answer Turn - " + player1_name;

function check() {
    get_answer = document.getElementById("answerbox").value;
    if (get_answer == answer) {
        if (answer_turn == "player1") {
            row = "Correct!"
            document.getElementById("output").innerHTML = row
            player1_score = player1_score + 1;
            console.log(player1_score);
            console.log("correct answer. Player 1 score increased");
            document.getElementById("player-question").innerHTML = "Question Turn - " + player1_name;
            document.getElementById("player-answer").innerHTML = "Answer Turn - " + player2_name;
            document.getElementById("player_1_score").innerHTML = player1_score;
            document.getElementById("first_num").value = "";
            document.getElementById("operation").value = "";
            document.getElementById("second_num").value = "";
  
        }
        else {
            row = "Correct!"
            document.getElementById("output").innerHTML = row
            player2_score = player2_score + 1;
            console.log(player2_score);
            document.getElementById("player_2_score").innerHTML = player2_score;
            console.log("correct answer. Player 2 score increased");
            document.getElementById("player-question").innerHTML = "Question Turn - " + player2_name;
            document.getElementById("player-answer").innerHTML = "Answer Turn - " + player1_name;
            document.getElementById("player_2_score").innerHTML = player2_score;
            document.getElementById("first_num").value = "";
            document.getElementById("operation_num").value = "";
            document.getElementById("second_num").value = "";
        }
    }
}
