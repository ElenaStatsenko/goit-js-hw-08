const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('.feedback-form email'),
    textarea: document.querySelector('.feedback-form textarea'),
};

 const formData = {};

 refs.form.addEventListener('submit', onFormSubmit);
   savedTextInput(); 
 
 function onFormSubmit (evt) {
    evt.preventDefault();
    evt.target.reset();
    localStorage.removeItem('feedback-form-state');
 }
    refs.form.addEventListener ('input', onTextInput);
    function onTextInput(evt){
      formData[evt.target.name] = evt.target.value;
      console.log(formData);
      localStorage.setItem('feedback-form-state', JSON.stringify(formData))
    }
    

function savedTextInput() {
   const savedFeedback = localStorage.getItem('feedback-form-state');
   const parsedFeedback = JSON.parse(savedFeedback);
   if (parsedFeedback) {console.log(parsedFeedback); 
   }
}

    
   



