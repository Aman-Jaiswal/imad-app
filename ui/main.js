console.log('Loaded!');

//Change the text of the main-text div
var element = document.getElementById("main-text");

element.innerHTML = "New Value";

//Move the Image
var img = document.getElementById("madi");
img.onclick = function(){
    img.style.marginRight = "100 px";
};
