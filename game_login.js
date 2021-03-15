var player1_name=localStorage.getItem("firstname");
var player2_name=localStorage.getItem("secondname");
document.getElementById("player1id").innerHTML=player1_name;
document.getElementById("player2id").innerHTML=player2_name;
var player1score=0;
var player2score=0;
document.getElementById("player1score").innerHTML=player1score;
document.getElementById("player2score").innerHTML=player2score;
var question_player=player1_name;
var answer_player=player2_name;
document.getElementById("questionturn").innerHTML=question_player;
document.getElementById("answerturn").innerHTML=answer_player;
function send(){
get_word=document.getElementById("wordoftheday").value;
word=get_word.toLowerCase()
console.log(word);
first_letter=word.charAt(1);
console.log(first_letter);
middle_letter=word.charAt(Math.floor(word.length/2));
console.log(middle_letter);
last_letter=word.charAt(word.length-1);
console.log(last_letter)
remove_firstletter=word.replace(first_letter,"_");
remove_middleletter=remove_firstletter.replace(middle_letter,"_");
remove_lastletter=remove_middleletter.replace(last_letter,"_");
console.log(remove_lastletter);
document.getElementById("output").innerHTML=remove_lastletter+"<br><input id='answeroftheday'class='form-control'><br><button onclick='check()'>Check</button>";
document.getElementById("wordoftheday").value="";
}
function check(){
get_answer=document.getElementById("answeroftheday").value;
answer=get_answer.toLowerCase();
if (word==answer) {
if (answer_player==player1_name) {
player1score=player1score+1;
document.getElementById("player1score").innerHTML=player1score
question_player=player1_name;
answer_player=player2_name;
document.getElementById("questionturn").innerHTML=question_player;
document.getElementById("answerturn").innerHTML=answer_player;
}
else if (answer_player==player2_name) {
player2score=player1score+1;
document.getElementById("player2score").innerHTML=player2score
question_player=player2_name;
answer_player=player1_name;
document.getElementById("questionturn").innerHTML=question_player;
document.getElementById("answerturn").innerHTML=answer_player;    
}
}
else if (word!=answer) {
if (answer_player==player1_name) {
    question_player=player1_name;
    answer_player=player2_name;
    document.getElementById("questionturn").innerHTML=question_player;
    document.getElementById("answerturn").innerHTML=answer_player;    
}
else if (answer_player==player2_name) {
question_player=player2_name;
answer_player=player1_name;
document.getElementById("questionturn").innerHTML=question_player;
document.getElementById("answerturn").innerHTML=answer_player;       
}   
}
document.getElementById("output").innerHTML="";
answertoproblem=("The word was "+word);
document.getElementById("output").innerHTML=answertoproblem;
}