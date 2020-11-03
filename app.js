let fname, overtime, totalpayment, normalPayment
document.querySelector('.submit').addEventListener('click', function() {
    fname = document.querySelector('.name').value;
    hour =  document.querySelector('.hours').value
    //Number entered should not exceed 24 because there are only 24hrs in a day
        if (hour < 1) {
        alert("please enter a valid hour between 1-24")
        } else if (hour > 24) {
            alert("please enter a valid hour between 1-24")
        } else if (hour > 4) {
            //for overtime
            overtime = (hour-4)*200,
            normalPayment = hour*1000,
            totalpayment = overtime + normalPayment;
        } else {
            totalpayment = hour*1000
        }
        if (totalpayment <= 4000) {
            document.querySelector('.totalpayment').textContent = ` ${fname} your total payment for the day is ${totalpayment}  naira`
        
        } else  {
            document.querySelector('.totalpayment').textContent = ` ${fname} your total payment for the day is ₦${totalpayment}  naira`
            document.querySelector('.overtime').textContent = ` Including your overtime payment of ₦${overtime}`
        }
    
 
})







