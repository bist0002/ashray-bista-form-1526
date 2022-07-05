let form = document.querySelector('form');
 let fname = document.getElementById('name');
 let email = document.getElementById('email');
 let message = document.getElementById('message');
 let emailVerification = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

let btn = document.getElementById('button');


function validateForm(){

   console.clear();

      let formData = {};
      let formError = [];

      fname.value = fname.value.trim();
      email.value = email.value.trim();
      message.value = message.value.trim();


      if (fname.value !== ''){
         formData.fullName = fname.value;
      } else {
         formError.push('Please enter your full name');
      }

    

      if (email.value !== ''){
         if(emailVerification.test(email.value)){
            formData.emailInput = email.value;
         } else {
            formError.push('Please enter a valid email')
         }

      } else {
         formError.push('Please enter your email');
      }

      //Message

      if (message.value !== ''){
         formData.messageInput = message.value;
      } else {
         formError.push('Please enter your message');
      }

      if (formError.length === 0){
         console.log(formData);
         form.reset();
      } else {
         console.log(formError);
      }


};

// make validateForm listen for click event OR you could say
// register button btn for 'click' event
btn.addEventListener('click', validateForm);
