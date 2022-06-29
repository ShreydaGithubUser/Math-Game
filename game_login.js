function storename(){
    player1_name = document.getElementById("player-1-name").value;
    player2_name = document.getElementById("player-2-name").value;

    localStorage.setItem("Player_1_name", player1_name);
    localStorage.setItem("Player_2_name", player2_name);

    window.location = "game_page.html";
}
