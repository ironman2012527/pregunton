cargando1 = localStorage.getItem("player1_name");
cargando2 = localStorage.getItem("player2_name");
puntos_del_1 = 0;
puntos_del_2 = 0;
document.getElementById("player1_name").innerHTML = cargando1 + " :"
document.getElementById("player2_name").innerHTML = cargando2 + " :"
document.getElementById("player1_score").innerHTML = puntos_del_1
document.getElementById("player2_score").innerHTML = puntos_del_2
function enviar() {
    get_word = document.getElementById("word").value
    word = get_word.toLowerCase();
    console.log(word);
    charat1 = word.charAt(1);
    console.log(charat1)
    logitud_entre_dos = Math.floor(word.length / 2);
    charat2 = word.charAt(logitud_entre_dos);
    console.log(charat2);
    logitud_menos_uno = word.length - 1;
    charat3 = word.charAt(logitud_menos_uno);
    console.log(charat3);
    quitar_charat1 = word.replace(charat1, "_");
    quitar_charat2 = quitar_charat1.replace(charat2, "_");
    quitar_charat3 = quitar_charat2.replace(charat3, "_");
    console.log(quitar_charat3);

    question_word = "<h4 id= 'word_display'>Q." + quitar_charat3 + "</h4>";
    input_box = "<br>Respuesta: <input type = 'text' id='input_check_box'>";
    check_button = "<br><br><button class= 'btn btn-info' onclick='check()'>Comprobar</button>";
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}
question_turn = "player_1";
answer_turn = "player_2";

function check() {
    get_answer = document.getElementById("input_check_box").value;
    answer = get_answer.toLowerCase();
    console.log("Respuesta en minúscula = " + answer);
    if (answer == word) {
        if (answer_turn == "player_1") {


            puntos_del_1 = puntos_del_1 + 1;
            document.getElementById("player1_score").innerHTML = puntos_del_1;
        }
        else {
            puntos_del_2 = puntos_del_2 + 1;
            document.getElementById("player2_score").innerHTML = puntos_del_2;
        }
    }
    if (question_turn == "player_1") {
        question_turn = "player_2"
        document.getElementById("player_question").innerHTML = "Turno para preguntar - " + cargando2;
    }
    else {
        question_turn = "player_1"
        document.getElementById("player_question").innerHTML = "Turno para preguntar - " + cargando1;

    }
    if (answer_turn == "player_1") {
        answer_turn = "player_2"
        document.getElementById("player_answer").innerHTML = "Turno para responder - " + cargando2;
    }
    else {
        answer_turn = "player_1"
        document.getElementById("player_answer").innerHTML = "Turno para responder - " + cargando1;
    }
    document.getElementById("output").innerHTML = "";
}