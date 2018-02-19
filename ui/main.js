

//Counter Code
var button = document.getElementById('counter');

button.onclick = function(){
    
    //Create a request object
    var request = new XMLHttpRequest();
    
    //Capture the response and store in a variable
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            //Take some action
            if(request.status === 200){
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
    };
    
    // Make the request
    request.open('GET','http://antooaman.imad.hasura-app.io/counter',true);
    request.send(null);
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
