// ===============

function clickSection(id){
document.querySelector('#donation-section').classList.add("hidden")
document.querySelector('#history-section').classList.add("hidden") 


document.querySelector(id).classList.remove("hidden")  
}


document.querySelector('#donation-btn').addEventListener('click', function(){
    clickSection('#donation-section')
})
document.querySelector('#history-btn').addEventListener('click', function(){
    clickSection('#history-section')
})


 


// ================


function setColor(id){
document.querySelector('#donation-btn').classList.remove('active');
document.querySelector('#history-btn').classList.remove('active');
     
document.querySelector(id).classList.add('active');
}





// ============

function forValue(userInput, cardAmount, title){
    


    let pureInput = document.querySelector(userInput).value

    if(!isNaN(pureInput) && pureInput>0){

        let inputNum = parseFloat(document.querySelector(userInput).value)
        let amount = document.querySelector(cardAmount)
        let amountNum = parseFloat(document.querySelector(cardAmount).innerText)

        // ---
        let totalAmountNum = parseFloat(document.querySelector("#total-amount").innerText)
        let totalAmount = document.querySelector("#total-amount") 

        if(totalAmountNum >= inputNum){
            
            let newAmount = inputNum + amountNum
            amount.innerText = newAmount
            console.log(newAmount)
            
            // =====

            let clicked = new Date();
            let setTime = clicked.toLocaleString('en-US', { timeZoneName: 'short' });



            let historySection = document.querySelector("#history-section")
            let createDiv = document.createElement("div")
            createDiv.innerHTML = `<div class="py-4 border my-7 border-slate-400 p-4 rounded-lg">
             <h1 class="text-lg font-bold pb-4">${inputNum} Taka is ${title}</h1>
              <p class="text-gray-600 text-sm">Date : ${setTime} </p> 
              </div>`
              historySection.appendChild(createDiv)
        


            // ===

            let newBalance = totalAmountNum - inputNum
            totalAmount.innerText = newBalance
            console.log(newBalance)

            let popup = document.querySelector('.popup').classList.remove("hidden")
            return popup
        }
        else{
            alert("Sorry You Donn't Have Many Balance")
        }
        // return newAmount
    }
    else{
        alert("Please enter the Only Amount of Balance")
    }
}









// ==========
document.querySelector("#noakhali-btn").addEventListener("click", function(e){
    e.preventDefault()
    let noakhaliTitle = document.querySelector("#noakhali-title").innerText
    forValue("#noakhali-input", "#noakhali-amount", noakhaliTitle)
})

document.querySelector("#feni-btn").addEventListener("click", function(e){
    e.preventDefault()
    let feniTitle = document.querySelector("#feni-title").innerText
    forValue("#feni-input", "#feni-amount", feniTitle)
})

document.querySelector("#qota-btn").addEventListener("click", function(e){
    e.preventDefault()
    let qotaTitle = document.querySelector("#qota-title").innerText
    forValue("#qota-input", "#qota-amount", qotaTitle)
})
