

function inputIncome() {
  const incomeInput = document.getElementById('income-input');
  if(incomeInput.value > 0){
  const incomeText = incomeInput.value;
  const incomeAmount = parseFloat(incomeText)
   
  return incomeAmount;
}
else if( typeof(incomeInput.value) == 'string'){
  alert('there was no input nayr stirng')
}
else if(incomeInput.value < 0 ){
  alert('there is no negetive number supported')
}
}

function inputFood() {
  const foodInput = document.getElementById('food-input');
  if(foodInput.value > 0){
  const foodText = foodInput.value;
  
  const foodAmount = parseFloat(foodText)
  return foodAmount;
 }
 else if(typeof(foodInput.value) == 'string'){
    alert("you don't input ot string")
 }
 else{
  alert("you don't input negetive  number")
 }

}
function inputRent() {
  const rentInput = document.getElementById('rent-input');
  if(rentInput.value > 0){

 
  const rentText = rentInput.value;
  const rentAmount = parseFloat(rentText)
  // rentInput.value = '';
  return rentAmount;
}
else if( typeof(rentInput.value=='string')){

  alert('there was no input nayr stirng')

}
else if(rentInput.value < 0 ){
  alert('there is no negetive number supported')
}
}
function inputclotehs() {
  const clothInput = document.getElementById('clothes-input');
  if(clothInput.value > 0){
  const clothText = clothInput.value;
  const clothAmount = parseFloat(clothText)
  // clothInput.value = '';
  return clothAmount
}
else if( typeof(clothInput.value == 'string')){
  alert('there was no input nayr stirng')
}
else if(clothInput.value < 0 ){
  alert('there is no negetive number supported')
}

}

function exapanceAmount() {
  const incomeAmount = inputIncome();
  const foodAmount = inputFood();
  const rentAmount = inputRent();
  const clothAmount = inputclotehs();
  const totalExpance = document.getElementById('total-expense');

  const totalExpanceText = parseFloat(totalExpance.innerText);

  const totalExpanceAmount =  foodAmount + rentAmount + clothAmount;
  if(totalExpanceAmount>0 ){

  totalExpance.innerText = totalExpanceAmount;
  return totalExpanceAmount;
}

}
function totalBalance() {
  const incomeAmount = inputIncome();
  const exapanceTotal = exapanceAmount()

  const totalBalance = document.getElementById('total-balance');
  const totalBalanceText = parseFloat(totalBalance.innerText);
  const totalBalanceAmount = incomeAmount ;
  const totalBalanceAmountLast = totalBalanceAmount - exapanceTotal;
  if(totalBalanceAmountLast > 0){


  totalBalance.innerText = totalBalanceAmountLast;
  return totalBalanceAmountLast
}


}




function saveMoney() {
  const saveInput = document.getElementById('save-input')

  const saveInputText = parseFloat(saveInput.value);
  const income = inputIncome();
    const balanceAmount =totalBalance()
  const totalSave = document.getElementById('total-save');
  const totalSaveText = parseFloat(totalSave.innerText);
  const totalSaveAmount = (income / 100) * saveInputText;
  if(totalSaveAmount < balanceAmount ){

  
  totalSave.innerText = totalSaveAmount;
  return totalSaveAmount;

}
else if(totalSaveAmount > balanceAmount){
 alert('tehre is no enough money to save ')
}


}

function restBalance(){
 const balanceTotal = totalBalance();
 const moneySave = saveMoney();

  const remeaningBalance = document.getElementById('remeaning-balance');
  const remeaningBalanceText = remeaningBalance.innerText;
  const remeaningAmount = balanceTotal - moneySave;
  remeaningBalance.innerText = remeaningAmount;

}
document.getElementById('cal-btn').addEventListener('click', function () {
  
  totalBalance()

})
document.getElementById('save-btn').addEventListener('click', function () {
  saveMoney();

  restBalance()

}) 