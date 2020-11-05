let fname, overtime, totalpayment, normalPayment;
    error = document.querySelector(".error-div");
    displayResult = document.querySelector(".display");

document.querySelector('.submit').addEventListener('click',() => {    
     calculator(); 
});

function calculator () {
    debugger
    hour =  +document.querySelector('.hours').value;
    let totalpayment;
    //Number entered should not exceed 24 because there are only 24hrs in a day
    if (hour < 1 || hour > 25) {
        error.style.display = "block";
        totalpayment = 0
    setTimeout(()=> { greet() }, 3000);
    } else if (hour > 4) {
        //for overtime
        overtime = (hour-4)*200,
        normalPayment = hour*1000,
        totalpayment = overtime + normalPayment;
    }  else {
        totalpayment = hour*1000
        
    }
    
    display (totalpayment)
}

function display (data) {
    debugger
    fname = document.querySelector('.name').value;
    if ((data >= 1000) && (data <= 4000)) {
        displayResult.style.display = 'block'
        document.querySelector('.totalpayment').textContent = ` ${fname} your total payment for the day is ${data}  naira`
    } else if(data > 4000) {
        displayResult.style.display = 'block'
        document.querySelector('.totalpayment').textContent = ` ${fname} your total payment for the day is ₦${data}  naira`
        document.querySelector('.overtime').textContent = ` Including your overtime payment of ₦${overtime}`
    }else {
        displayResult.style.display = 'none'
    }
}




function greet(){                
   error.style.display = "none";
}


