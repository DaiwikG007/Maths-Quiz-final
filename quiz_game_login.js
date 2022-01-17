function addUser(){
    player1name = document.getElementById("player1_name_input").value;
    player2name = document.getElementById("player2_name_input").value;

    localStorage.setItem("Player1_name" , player1name);
    localStorage.setItem("Player2_name" , player2name);

    window.location = "quiz_game_page.html"
}