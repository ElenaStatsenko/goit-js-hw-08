import throttle from "lodash.throttle";

  const form = document.querySelector('.feedback-form');
   
form.addEventListener('submit', onFormSubmit);
form.addEventListener ('input', throttle(onFormData, 500));
dataFromLocalStorage();
 const formData = {};

 function onFormData(evt){
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

 function onFormSubmit (evt) {
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');
  
 }
    

function dataFromLocalStorage() {
  const data = JSON.parse(localStorage.getItem('feedback-form-state'));
  const email = document.querySelector('.feedback-form input');
   const message = document.querySelector('.feedback-form textarea');
   if (data) {
    email.value = data.email;
    message.value = data.message;
  }
};


    
   



