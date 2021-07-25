const btnCheck = document.querySelector(".check-btn");
var output = document.querySelector(".output");

// console.log(date);
// console.log(luckyNumber);

btnCheck.addEventListener('click', (e)=>{
    e.preventDefault();
    var dateString = document.querySelector("#date").value.toString().split("-").join("");
    
    var luckyNumberValue = document.querySelector("#number").value;

    checkBirthdate(dateString, luckyNumberValue);
})

function checkBirthdate(dateString, luckyNumberValue){
    let sum = 0;
    let text="";

    for(let char of dateString){
        sum = sum + Number(char);
    }

    if(sum % luckyNumberValue === 0){
        text = "Hurray! Your birthdate is lucky!!!!";
    }else{
        text = "Sorry! Your birthdate is not lucky!";
    }

    output.innerText = text;
}

