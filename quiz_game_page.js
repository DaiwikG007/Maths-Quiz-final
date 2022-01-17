player11name = localStorage.getItem("Player1_name"); 
player22name = localStorage.getItem("Player2_name");

player1_score = 0;
player2_score = 0;

console.log(player11name,player22name);
document.getElementById("player1_name").innerHTML = player11name + " :";
document.getElementById("player2_name").innerHTML = player22name + " :";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn - " + player11name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player22name;



function send(){
    number1 = document.getElementById("number1_input").value;
    number2 = document.getElementById("number2_input").value;
    actual_ans = parseInt(number1) * parseInt(number2);

    question = "<h4>" +  number1 + "X" + number2 + "</h4>";
    input = "<br> Answer : <input id='input_check_box' type='text'>"
    button = "<br><br> <button id='check_button' class='btn btn-info' onclick='check()'>Check</button>"

    row = question + input + button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("number1_input").value = "";
    document.getElementById("number2_input").value = "";
}

question_turn = "player1"
    answer_turn = "player2"


function check(){
    get_answer = document.getElementById("input_check_box").value;
    
    if (get_answer == actual_ans){
        if (answer_turn == "player1"){
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else{
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }

    }

    if (question_turn == "player1"){
        question_turn = "player2";
        document.getElementById("player_question").innerHTML= "Question Turn - " + player22name;
    }
    else{
        question_turn = "player1";
        document.getElementById("player_question").innerHTML= "Question Turn - " + player11name;
    }


    if (answer_turn == "player1"){
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML= "Answer Turn - " + player22name;
    }
    else{
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML= "Answer Turn - " + player11name;
    }

    document.getElementById("output").innerHTML="";





}
