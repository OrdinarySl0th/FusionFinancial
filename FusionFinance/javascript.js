// event listeners and on startup load
document.addEventListener('DOMContentLoaded', function() { 
    document.getElementById('payBillsScreen').style.display = 'none'
    document.getElementById('SetBills').style.display = 'block'
    document.getElementById('investingScreen').style.display = 'none';
    document.getElementById("calcMoneyButton").addEventListener('click', splitMoney);
    document.getElementById("calculateMoney").addEventListener('click', loadPayBills);
    document.getElementById("backSetBills").addEventListener('click', loadSetBills);
    document.getElementById("AssignBills").addEventListener('click', assignBills);
    document.getElementById("loadInvestingScreen").addEventListener('click', loadInvesting);
});


// Define Constant Bills 
Bill1 = 0;
Bill2 = 0;
Bill3 = 0;
Bill4 = 0;
Bill5 = 0;

// display on screen function
function showMessage(message){
    const container = document.getElementById('message-container');
    const messageElement = document.createElement('p');
    messageElement.textContent = message;
    container.appendChild(messageElement);
}

/* Functions to load different Screens */
// loads the Pay Bills Screen 
function loadPayBills() {
    document.getElementById('SetBills').style.display = 'none';
    document.getElementById('payBillsScreen').style.display = 'block';
    document.getElementById('investingScreen').style.display = 'none';
    
}
// Loads the Set Bills Screen
function loadSetBills() {
    document.getElementById('SetBills').style.display = 'block';
    document.getElementById('payBillsScreen').style.display = 'none';
    document.getElementById('investingScreen').style.display = 'none';
}
function loadInvesting(){
    document.getElementById('SetBills').style.display = 'none';
    document.getElementById('payBillsScreen').style.display = 'none';
    document.getElementById('investingScreen').style.display = 'block';
}

function assignBills() {
    Bill1 = document.getElementById('bill1').value;
    console.log(bill1.value);
    Bill2 = document.getElementById('bill2').value;
    console.log(bill2.value);
    Bill3 = document.getElementById('bill3').value;
    console.log(bill3.value);
    Bill4 = document.getElementById('bill4').value;
    console.log(bill4.value);
    Bill5 = document.getElementById('bill5').value;
    console.log(bill5.value);
}


// These are all the functions ties to the "Pay Bills Screen"
// calculate the bills and savings investing and everything else
function splitMoney() {
    income = document.getElementById("income").value;
    remainingIncome = (income - Bill1);
    remainingIncome = (remainingIncome - Bill2);
    remainingIncome = (remainingIncome - Bill3);
    remainingIncome = (remainingIncome - Bill4);
    investing = (remainingIncome * 0.1);
    savings = (remainingIncome * 0.28)
    everythingElse = (remainingIncome * 0.62)

    // display messages
    showMessage(`You have $${everythingElse.toFixed(2)} after paying your bills`);
    showMessage(`You should put $${savings.toFixed(2)} into BoA savings account.`);
    showMessage(`You need to put $${investing.toFixed(2)} into Robinhood.`);
    console.log('Calculated bills successfully.');
    return;
}