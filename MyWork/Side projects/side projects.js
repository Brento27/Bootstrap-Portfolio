var textbox1 = document.getElementById("userfirstname");
var textbox2 = document.getElementById("userlastname");
var textbox3 = document.getElementById("usersex");
var textbox4 = document.getElementById("userage");
var textbox5 = document.getElementById("useremail");
var textbox6 = document.getElementById("usercellnumber");

var submit = document.getElementById("submitBtn");
submit.onclick = displayinfo

function displayinfo(){
    var userfirstname = textbox1.value;
    var userlastname = textbox2.value;
    var usersex = textbox3.value;
    var userage = textbox4.value;
    var useremail = textbox5.value;
    var usercellnumber = textbox6.value;
    output.innerHTML = "Hello " + userfirstname + " " + userlastname + "! Please confirm that your information is correct below.<br>Age : " + userage + "<br>Sex : " + usersex + "<br>Email addres : " + useremail + "<br>Cellphone number : " + usercellnumber
}