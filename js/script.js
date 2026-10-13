console.log("Hello!")

const submitBtn = document.getElementById("btn");
const menu = document.getElementById("menu");
const userName = document.getElementById("nameInput");
const userAge = document.getElementById("ageInput");
const result = document.getElementById("result");

submitBtn.addEventListener("click", ()=>{
    console.log("POW!");
    if (userAge.value <= 3){
        result.style.color = "black"
        result.innerHTML = (userName.value + ", your ticket is free!");
    }
    else if (userAge.value <= 12){
        result.style.color = "black"
        result.innerHTML = (userName.value + ", your ticket is $10!");
    }
    else if (userAge.value <= 64){
        result.style.color = "black"
        result.innerHTML = (userName.value + ", your ticket is $20!");
    }
    else if (userAge.value >=65){
        result.style.color = "black"
        result.innerHTML = (userName.value + ", your ticket is $12!");
    }

    if (userName.value === "" || userAge.value === ""){
        result.style.color = "red";
        result.innerHTML = "Please enter a valid value!"
    }
})