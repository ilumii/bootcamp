// gets the element container
document.getElementById("container");

// using queryselector
document.querySelector("#container");

// getting all itemswith class name second
var x = document.getElementsByClassName("second");
// for(var i = 0; i<x.length;i++){
//     x[i].innerHTML = "hi";
// }

//getting all Select a list item with a class of third, but only the list item inside of the ol tag.
var y = document.getElementsByTagName("OL")[0];
y.getElementsByClassName("third")[0].style.color ="blue";

//giving the section with id of container a textbox hello
var textbox = document.createElement("textarea");
textbox.innerHTML = "Hello!";
var items = document.getElementById("container");
items.insertBefore(textbox, items.childNodes[0]);

//add the class main to the div with a class of footer
var y= document.getElementsByClassName("footer")[0];
y.classList.add("main");

//remove class main on div with class of footer
y.classList.remove("main");

//creating new element li
var li = document.createElement("li");
//gave it text "four"
li.innerHTML ="four";
//appended it as a child to UL element
document.getElementsByTagName("UL")[0].appendChild(li);

//looping li for green background
var ol_Elements = document.getElementsByTagName("OL");
for(var i = 0; i<ol_Elements.length;i++){
    ol_Elements[i].style.backgroundColor = "green"
}

//removed footer classname
document.getElementsByClassName("footer")[0].remove();


