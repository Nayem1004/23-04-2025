//getElementById
document.getElementById("heading").innerHTML = "Hi we are procoder family";
document.getElementById("practice").innerHTML = "we are five person , in our office ";

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



//image slider

var photos =["image/1.jpg", "image/2.jpg", "image/man-2.jpg", "image/man1.png"];
var imgTag = document.querySelector("#slide")

var count = 0;

function next(){
    count++;
    if(count>=photos.length){
        count=0;
        imgTag.src = photos[count];
    }else{
        imgTag.src = photos[count];
    }

}

function prev(){
    count--;
    if(count < 0){
        count = photos.length -1;
        imgTag.src=photos[count];
    }else{
        imgTag.src = photos[count];
    }
    
}