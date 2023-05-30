// const refs = {
//     form: document.querySelector('.feedback-form'),
//     email: document.querySelector('.feedback-form email'),
//     textarea: document.querySelector('.feedback-form textarea'),
// };
formElement = document.querySelector('.feedback-form'),


 formElement.addEventListener('submit', onFormSubmit);

//  refs.textarea.addEventListener ('input', onTextareaInput);
//  refs.email.addEventListener ('input', onEmailInput);
 
 function onFormSubmit (evt) {
    evt.preventDefault();
    const email = evt.currentTarget.email.value;
    const message = evt.currentTarget.message.value;
    console.log(message);


    
    // evt.currentTarget.reset();
    // localStorage.removeItem('feedback-form-state')
 }
//  function onTextareaInput (evt) {
//     const message = evt.currentTarget.value;
//     localStorage.setItem('feedback-form-state', message);
//  }



 function populateTextarea () {
    const savedMessage = localStorage.getItem('feedback-form-state');
    if (savedMessage) {
        console.log(savedMessage)
    }
 }