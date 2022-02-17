
function getCalculateMoney(product){
  const incomeInput = document.getElementById(product + '-input') ;
  const incomeText = incomeInput.value;
  const incomeAmount = parseFloat(incomeText)
  incomeInput.value = ''
  return incomeAmount
}


document.getElementById('cal-btn').addEventListener('click',function(){
  // income input
  let incomeAmount = getCalculateMoney('income')
     
    //  food input
     const foodInput = document.getElementById('food-input');
     const foodText = foodInput.value;
     const foodAmount = parseFloat(foodText)
    foodInput.value = ''
     
  
     const rentInput = document.getElementById('rent-input') ;
     const rentText = rentInput.value;
     const rentAmount = parseFloat(rentText)
    //  incomeAmount= getCalculateMoney('rent')
      // celar 
      rentInput.value = ''

     const  clothInput = document.getElementById('clothes-input') ;
     const clothText =  clothInput.value;

     const clothAmount = parseFloat(clothText)
     // celar 
     clothInput.value = ''
     
   // total exapance
     const totalExpance = document.getElementById('total-expense');

     const totalExpanceText = parseFloat(totalExpance.innerText);
      const totalExpanceAmount =   totalExpanceText  + foodAmount + rentAmount + clothAmount;
   
   totalExpance.innerText = totalExpanceAmount;

// total balance
const totalBalance = document.getElementById('total-balance');
const totalBalanceText = parseFloat(totalBalance.innerText);
const totalBalanceAmount = incomeAmount + totalBalanceText ;
 totalBalance.innerText= totalBalanceAmount - totalExpanceAmount;

})





// function getCalculateMoney(){

// }


// document.getElementById('cal-btn').addEventListener('click',function(){
//   // income input
//   const incomeInput = document.getElementById('income-input') ;
//   const incomeText = incomeInput.value;
//   const incomeAmount = parseFloat(incomeText)
//   incomeInput.value = ''

//      // food input
//      const foodInput = document.getElementById('food-input');
//      const foodText = foodInput.value;
//      const foodAmount = parseFloat(foodText)
//     foodInput.value = ''


//      const rentInput = document.getElementById('rent-input') ;
//      const rentText = rentInput.value;
//      const rentAmount = parseFloat(rentText)
//       // celar 
//       rentInput.value = ''

//      const  clothInput = document.getElementById('clothes-input') ;
//      const clothText =  clothInput.value;

//      const clothAmount = parseFloat(clothText)
//      // celar 
//      clothInput.value = ''

//    // total exapance
//      const totalExpance = document.getElementById('total-expense');

//      const totalExpanceText = parseFloat(totalExpance.innerText);
//       const totalExpanceAmount =   totalExpanceText  + foodAmount + rentAmount + clothAmount;

//    totalExpance.innerText = totalExpanceAmount;


// // total balance
// const totalBalance = document.getElementById('total-balance');
// const totalBalanceText = parseFloat(totalBalance.innerText);
// const totalBalanceAmount = incomeAmount + totalBalanceText ;
//  totalBalance.innerText= totalBalanceAmount - totalExpanceAmount;

// })


// save btn part
