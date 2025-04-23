//getElementById
document.getElementById("heading").innerHTML = "hii i am nayem";
document.getElementsByClassName("practice").innerHTML = "we are five person , in our office ";

document.querySelector("#p").innerHTML = "hello bangladesh";
document.querySelector(".pa").innerHTML = "Fardin is a good boy";

function myMessage(){
    alert("welcome to procoder");
}
function thanks(){
    alert("thanks for order")
}

function myPicture(){
    var myimage = document.querySelector("#myImage");
    myimage.src = "image/man1.png";
}
function myPicture2(){
    var myimage = document.querySelector("#myImage");
    myimage.src = "image/man-2.jpg";
}

var heading1 = document.getElementsByTagName("h1");
heading1.innerHTML = "say hello"

//creting element

var heading2 = document.createElement("h4");
var text = document.createTextNode("this is heading");
heading2.appendChild(text);

var myDiv = document.getElementById("my-div")
myDiv.appendChild(heading2)
//remove

var heading1 = document.getElementsByTagName("h2")[1];
myDiv.removeChild(heading1);
