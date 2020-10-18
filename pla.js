
function change_action(){


var player=Math.floor(Math.random()*6)+1;

var player_img="images/dice"+player+".png";
document.querySelectorAll("img")[1].setAttribute("src",player_img);

var com=Math.floor(Math.random()*6)+1;
var com_img="images/dice"+com+".png";
document.querySelectorAll("img")[2].setAttribute("src",com_img);

if(player>com){
	document.querySelector("p").innerHTML="!!!!🏆Player Win🏆!!!!";
	document.querySelector("p").setAttribute("id","pp2");
	document.querySelectorAll("img")[0].setAttribute("src","smile5.jpg");
	document.querySelectorAll("img")[3].setAttribute("src","smile6.jpg");
	document.querySelectorAll("img")[4].setAttribute("src","cup.jpg");
	document.querySelectorAll("img")[5].setAttribute("src","money1.jpg");

	
}else if(com>player){
	document.querySelector("p").innerHTML="!!!!🏆Computer Win🏆!!!!";
	document.querySelector("p").setAttribute("id","pp2");
	document.querySelectorAll("img")[0].setAttribute("src","smile3.jpg");
	document.querySelectorAll("img")[3].setAttribute("src","smile.jpg");
	document.querySelectorAll("img")[5].setAttribute("src","cup.jpg");
	document.querySelectorAll("img")[4].setAttribute("src","money1.jpg");
}else{
	document.querySelector("p").innerHTML="!!!Try again!!!";
	document.querySelectorAll("img")[0].setAttribute("src","smile1.jpg");
	document.querySelectorAll("img")[3].setAttribute("src","smile1.jpg");
	document.querySelectorAll("img")[4].setAttribute("src","money.jpg");
	document.querySelectorAll("img")[5].setAttribute("src","money.jpg");
}
}