let createName = function (first, last){
return first + " "+last
}

let askName = function (){
    let first = prompt("Please enter your first name", "First Name");
    let last = prompt("Please enter your last name", "Last Name");
    let fullName = createName(first,last)
    alert("Your name is "+fullName)
}

askName()