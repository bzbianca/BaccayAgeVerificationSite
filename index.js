const myText = document.getElementById("userAge");
const mySubmit = document.getElementById("submitButton");
const myResult = document.getElementById("resultAge");
let age;


mySubmit.onclick = function(){CheckAge()}

function CheckAge(){
    age = myText.value;
    age = Number(age);
    if(age < 0){
        document.getElementById("resultAge").textContent = "Are you even alive?"
    }
    else if(age > 21){
        document.getElementById("resultAge").textContent = "Woah there, you're older than my older sister? Crazy."
    }
    else if(age == 5){
        document.getElementById("resultAge").textContent = "Go play on your iPad, kid."
    }
    else if(age >= 14){
        document.getElementById("resultAge").textContent = "Wow, you are older than my little brother.. Good job!!"
    }
    else if(age <= 13){
        document.getElementById("resultAge").textContent = "Oh, I guess you are younger than my little brother.."
    } 
}