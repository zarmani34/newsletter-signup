const form = document.querySelector('#sign-up-form');
const mssg = document.querySelector('.mssg');
const inputError = document.querySelector('.input-error');
const emailId = document.querySelector('.emailId');
const email = document.querySelector('#input');
const isValid = email.checkValidity();
const success = document.querySelector('.success');
const successBtn = document.querySelector('.dismiss');
const symbolRegex = /^([a-z\.-]+)@([a-z\d\-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;


form.addEventListener('submit', submitForm);


function submitForm(event){
    event.preventDefault()
   
    if  (email.value === ''){
        mssg.classList.add('error');
        mssg.innerHTML = 'Email field is required';
        email.classList.add('input-error');
        
    }else if(!symbolRegex.test(email.value)){
        mssg.classList.add('error');
        mssg.innerHTML = 'Valid email required';
        email.classList.add('input-error');
        
    } else {
        success.style.display = 'block';
        emailId.innerHTML = email.value;
        email.value = '';
    }
    successBtn.onclick = () => success.style.display = 'none';
    
    // else if(atSymbol.test(input) || !symbolRegex.test(input)){
    //     mssg.classList.add('error');
    //     input.classList.add('input-error');
    //     mssg.innerHTML = 'Valid email required';
    //     isValid = false;
    // }
}
// const submitForm = (event) => {
//     event.preventDefault();

//     console.log(input);
// }
// document.getElementById('sign-up-form').addEventListener('submit', (event) => {
//     event.preventDefault
//     console.log('event')
// })