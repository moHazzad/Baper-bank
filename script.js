document.getElementById('login_btn').addEventListener('click',function(){
    let emailField = document.getElementById('email')
    let authEmailField = emailField.value;

    let passField = document.getElementById('pass')
    let authPassField = passField.value;

    if(authEmailField == 'test@gmail.com' && authPassField == 'test123'){
        window.location.href='bank.html'
        // console.log('hello');

        
    } else{
        console.log('incorrect email');
    }
    emailField.value = ''
    passField.value = ''

    
})


// document.getElementById('deposit').addEventListener('click',function(){
//     console.log('cliced');
//     // let inputField = document.getElementById('deposit_field')
//     // let inputValue = inputField.value;

//     // let depositedAmount = document.getElementById('deposit_ammount')
//     // let totalDepositAmount = depositedAmount.value;
//     // inputValue = totalDepositAmount
// })
