//https://github.com/JeffreyATW/fwd/blob/master/series10/class5/assignment.md

let createName = function (first, last){
return first + " "+last
}

let askName = function (){

do{
    let first = prompt("Please enter your first name", "First Name");
    let last = prompt("Please enter your last name", "Last Name");
    var fullName = createName(first,last)
    alert("Your name is "+fullName)
}
while(fullName.toUpperCase()!="BOB JONES")    
}

let asker = document.getElementById("click")

asker.onclick = function(){askName()}