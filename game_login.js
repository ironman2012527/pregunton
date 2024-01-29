function adduser(){
player1_name=document.getElementById("nombre_1").value;
player2_name=document.getElementById("nombre_2").value;
localStorage.setItem("player1_name",player1_name);
localStorage.setItem("player2_name",player2_name);
window.location.replace("gamepage.html")
}