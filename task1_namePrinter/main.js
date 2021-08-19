
let output = document.getElementById("output");
let btn = document.getElementById("submit_btn");

btn.addEventListener('click', function(){
    let firstName = document.getElementById("firstname").value;
    let lastName = document.getElementById("lastname").value;
    output.innerHTML = firstName +' '+ lastName;
    

})