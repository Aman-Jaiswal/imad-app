console.log('Loaded!');


//Counter Code
var button = document.getElementById('counter');
var counter = 0;

button.onclick = function(){
    // Render the variable in correct span
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
};


//Change the text of the main-text div
var element = document.getElementById("main-text");

element.innerHTML = "New Value";

//Move the Image
var img = document.getElementById("madi");
var marginLeft=0;
function moveRight(){
    marginLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft + "px";
}
img.onclick = function(){
    var interval =setInterval(moveRight,100);
};
