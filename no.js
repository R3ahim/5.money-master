

function inputIncome() {
  const incomeInput = document.getElementById('income-input');
  const incomeText = incomeInput.value;
  const incomeAmount = parseFloat(incomeText)
  // incomeInput.value = '';
  return incomeAmount;
}

function inputFood() {
  const foodInput = document.getElementById('food-input');
  const foodText = foodInput.value;
  const foodAmount = parseFloat(foodText)
  // foodInput.value = '';
  return foodAmount;

}
function inputRent() {
  const rentInput = document.getElementById('rent-input');
  const rentText = rentInput.value;
  const rentAmount = parseFloat(rentText)
  // rentInput.value = '';
  return rentAmount;

}
function inputclotehs() {
  const clothInput = document.getElementById('clothes-input');
  const clothText = clothInput.value;
  const clothAmount = parseFloat(clothText)
  // clothInput.value = '';
  return clothAmount

}

function exapanceAmount() {
  const foodAmount = inputFood();
  const rentAmount = inputRent();
  const clothAmount = inputclotehs();
  const totalExpance = document.getElementById('total-expense');

  const totalExpanceText = parseFloat(totalExpance.innerText);

  const totalExpanceAmount =  foodAmount + rentAmount + clothAmount;

  totalExpance.innerText = totalExpanceAmount;
  return totalExpanceAmount;
}
function totalBalance() {
  const incomeAmount = inputIncome();

  const totalBalance = document.getElementById('total-balance');
  const totalBalanceText = parseFloat(totalBalance.innerText);
  const totalBalanceAmount = incomeAmount ;
  const totalBalanceAmountLast = totalBalanceAmount - exapanceAmount();
  totalBalance.innerText = totalBalanceAmountLast;
  return totalBalanceAmountLast

}


// function restMoney() {
//     const incomeAmount = inputIncome();

//     const totalBalance = document.getElementById('total-balance');
//     const totalBalanceText = parseFloat(totalBalance.innerText);
//     const totalBalanceAmount = incomeAmount + totalBalanceText;
//     const totalBalanceAmountLast = totalBalanceAmount - exapanceAmount();
//     totalBalance.innerText = totalBalanceAmountLast;
//     return totalBalanceAmountLast

// }
// function saveMoney() {
//   const saveInput = document.getElementById('save-input')

//   const saveInputText = parseFloat(saveInput.value);
//   const income = inputIncome();
//   const totalSave = document.getElementById('total-save');
//   const totalSaveText = parseFloat(totalSave.innerText)
//   const totalSaveAmount = ((income / 100) * saveInputText) + totalSaveText;
//   totalSave.innerText = totalSaveAmount;

// }
function saveMoney() {
  const saveInput = document.getElementById('save-input')

  const saveInputText = parseFloat(saveInput.value);
  const income = inputIncome();
  const totalSave = document.getElementById('total-save');
  const totalSaveText = parseFloat(totalSave.innerText)
  const totalSaveAmount = (income / 100) * saveInputText;
  totalSave.innerText = totalSaveAmount;
  return totalSaveAmount;

    

// //  andase aprt 
// const balancMoney = totalBalance();



//  main aprt m
//    const remeaning =document.getElementById('remeaning-balance');
//    const remeaningText = parseFloat(remeaning.innerText);
//  const remeaningMoney = balancMoney - totalSaveAmount;
//  remeaning.innerText = remeaningMoney;
   
  //  return totalBalanceAmountLast

}

function renBalance(){
 const balanceTotal = totalBalance();
 const moneySave = saveMoney();

  const remeaningBalance = document.getElementById('remeaning-balance');
  const remeaningBalanceText = remeaningBalance.innerText;
  const remeaningAmount = balanceTotal - moneySave;
  remeaningBalance.innerText = remeaningAmount;
}
document.getElementById('cal-btn').addEventListener('click', function () {
  //    const incomeAmount=  inputIncome();
  //    const foodAmount=  inputFood();
  //    const rentAmount=  inputRent();
  //    const clothAmount=  inputclotehs();
  //    const totlaexapn = exapanceAmount()   
  totalBalance()
  // const hello =totalBalance();
  // console.log(hello);

})
document.getElementById('save-btn').addEventListener('click', function () {
  saveMoney();

  renBalance()

}) 