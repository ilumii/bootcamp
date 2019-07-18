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
var x = document.getElementsByTagName("OL")[0];
x.getElementsByClassName("third")[0];
//