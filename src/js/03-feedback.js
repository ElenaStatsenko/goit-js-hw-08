const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('.feedback-form email'),
    textarea: document.querySelector('.feedback-form textarea'),
};

 const formData = {};

 refs.form.addEventListener('submit', onFormSubmit);
   // savedTextInput(); 
 
 function onFormSubmit (evt) {
    evt.preventDefault();
    evt.target.reset();
    localStorage.removeItem('feedback-form-state');
 }
    refs.form.addEventListener ('input', onTextInput);
    function onTextInput(evt){
      formData[evt.target.name] = evt.target.value;

      localStorage.setItem('feedback-form-state', JSON.stringify(formData))
    }
    

// function savedTextInput() {}
   // const savedFeedback = localStorage.getItem('feedback-form-state');
   // const parsedFeedback = JSON.parse(savedFeedback);
   if (localStorage.getItem('feedback-form-state')) {
     const getFormData = JSON.parse(localStorage.getItem('feedback-form-state'));
      
   const newMail = getFormData.email;
   const newMessage = getFormData.message;
refs.email = newMail
   console.log(refs.email.value);
   }
   
  


    
   



