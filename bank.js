// document.getElementById('deposit').addEventListener('click',function(){

//     let inputField = document.getElementById('deposit_field')
//     let inputValue = parseInt(inputField.value);
    
//     const depositedAmount = document.getElementById('deposit_ammount')
//     let totalDeposit = parseInt(depositedAmount.innerText);
//     let total = totalDeposit + inputValue
//     depositedAmount.innerText = total



//     const priTotalBalance = document.getElementById('totalBalace')
//     const totalBalance = parseInt(priTotalBalance.innerText);
//     const updateBalance = totalBalance + inputValue
//     priTotalBalance.innerText = updateBalance
//     console.log(updateBalance);

   

    
//     inputField.value = ''

// })
// document.getElementById('withdrowBtn').addEventListener('click',function(){
//     const WithdrawField = document.getElementById('Withdraw_field')
//     const newWithdrow = parseFloat(WithdrawField.value)

    

    
    
//     const priTotalBalance = document.getElementById('totalBalace')
//     const totalBalance = parseFloat(priTotalBalance.innerText);
//     console.log(newWithdrow);
//     if(newWithdrow > totalBalance && isNaN(newWithdrow)  ){
//         alert('You dont have sufficient ballance or check your request amount ')
//     } else{
//         const WithdrawAmount = document.getElementById('Withdraw_ammount') 
//         const prevWithdrwAmmount = parseInt(WithdrawAmount.innerText)
//         const total = newWithdrow + prevWithdrwAmmount
//         WithdrawAmount.innerText = total

//         const updateBalance = totalBalance - newWithdrow
//         priTotalBalance.innerText = updateBalance
        
//     }


//     WithdrawField.value = ''
//     console.log(totalBalance);
//     console.log(newWithdrow);
// })

// input field utility function 
 function inputValueById(inputId){
    const inputField = document.getElementById(inputId);
    const inputValue = inputField.value;
    const inputConverted = parseFloat(inputValue)
    return inputConverted;
    

}

// set value utility function 
function getValueOfPlace(placeId){
    const place = document.getElementById(placeId)
    const placeText = place.innerText
    const convertedPlaceText = parseFloat(placeText)
    return convertedPlaceText
}

// showing pleviuse value and new 
function addingDepositValue(elementId , setNewNumber){
    const setNumber = document.getElementById(elementId)
    setNumber.innerText = setNewNumber
}


document.getElementById('deposit').addEventListener('click',function(){
    const inputField = inputValueById('deposit_field')
    const placeText = getValueOfPlace('deposit_ammount')
    const totalBalace = getValueOfPlace('totalBalace')
    const totalDeposit = placeText + inputField
    const updateBalnce = inputField + totalBalace
    addingDepositValue('deposit_ammount', totalDeposit)
    addingDepositValue('totalBalace', updateBalnce)
    
})
document.getElementById('withdrowBtn').addEventListener('click',function(){
    const inputField = inputValueById('Withdraw_field')
    const placeText = getValueOfPlace('Withdraw_ammount')
    const updateBalance = getValueOfPlace('totalBalace')
    const totalDeposit = placeText + inputField
    const totalBalnceAfterWith = inputField - updateBalance
    addingDepositValue('Withdraw_ammount', totalDeposit)
    addingDepositValue('totalBalace', totalBalnceAfterWith)
    
})