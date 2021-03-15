var name1="";
var name2="";
function nextpage(){
name1=document.getElementById("player1_name").value;
name2=document.getElementById("player2_name").value;
localStorage.setItem("firstname",name1);
localStorage.setItem("secondname",name2);
window.location="game_page.html";
}