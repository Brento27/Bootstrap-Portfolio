var textbox1 = document.getElementById("UserInputName");
var textbox2 = document.getElementById("UserInputAge");
var output = document.getElementById('output');

var submit = document.getElementById("submitBtn");
submit.onclick = displayname;


function displayname(){
    var username = textbox1.value;
    var age = textbox2.value;
    output.innerHTML = "Welcome to our web page " + username + ". " + "Your " + age + " years old.";
}
