

//submit username/password to Login


var submit = document.getElementById('submit_btn');
submit.onclick = function(){
     var request = new XMLHttpRequest();
    
    //Capture the response and store in a variable
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            //Take some action
            if(request.status === 200){
                console.log('user logged in');
                alert("logged in successfully");
            }else if(request.status===403){
              alert("Username/Password is incorrect");
            }else if(request.status === 500){
              alert("Something went wrong on the Server");
          }
        }
    };
    
    // Make the request
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    console.log(username);
    console.log(password);
    request.open('POST','http://antooaman.imad.hasura-app.io/login',true);
    request.setRequestHeader('Content-Type','application/json');
    request.send(JSON.stringify({username:username, password:password}));
    
};
