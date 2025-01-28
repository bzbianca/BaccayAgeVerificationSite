const myText = document.getElementById("userAge");
const mySubmit = document.getElementById("submitButton");
const myResult = document.getElementById("resultAge");
let age;

function check(){
    age = myText.value;
    age = Number(age);
    if(age > 0){
        document.getElementById("resultAge").textContent = "hi"
    }
}

mySubmit.onclick = check()