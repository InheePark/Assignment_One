/*
javascript file for password auth and username for app
Inhee Park (301162514)
October 21st, 2022
*/

console.log('hello client!');

if(getTitle == "Sign-up Form"){

    const confirm = document.querySelector('input[name=password_confirm]');
    confirm.addEventListener('change', onChange);
}

// login password page
function onChange(){
    const password = document.querySelector('input[name=password]');
    const confirm = document.querySelector('input[name=password_confirm]');

    if(confirm.value === password.value){
        confirm.setCustomValidity('');
    }else{
        confirm.setCustomValidity('Passwords do not match');
    }
}