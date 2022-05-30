import { throttle } from 'lodash';

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('.feedback-form input'),
    message: document.querySelector('.feedback-form textarea'),
}


const TEXT_KEY = "feedback-form-state";

refs.form.addEventListener('submit', onSubmitTarget);
refs.form.addEventListener('input', throttle(setItem, 500));

const formData = {};

getItem();

function onSubmitTarget(e) {
    e.preventDefault();

    console.log('Отправка формы');

    e.currentTarget.reset();
    localStorage.removeItem(TEXT_KEY);
    console.log(formData);
}

// делегирование 
function setItem(e) {
    
    // console.log(e.target.name);
    // console.log(e.target.value);

    formData[e.target.name] = e.target.value;
    console.log(formData);
    localStorage.setItem(TEXT_KEY, JSON.stringify(formData));
    

}

function getItem(){
    const savedFormData = localStorage.getItem(TEXT_KEY);
    const fromDataObj = JSON.parse(savedFormData);
    if (fromDataObj) {
        if (fromDataObj.email) {
            refs.email.value = fromDataObj.email;
        }
        if(fromDataObj.message){
            refs.message.value = fromDataObj.message;
        }
    }
    
}




// в2

// refs.message.addEventListener('input', throttle(inputTextarea, 1000));
// refs.email.addEventListener('input', throttle(inputEmail, 1000));

// savedEmail();
// savedTextarea();

// function onSubmitTarget(e) {
//     e.preventDefault();

//     console.log('Отправка формы');

//     e.currentTarget.reset();
//     localStorage.removeItem(TEXT_KEY);
// }



// function inputTextarea(e) {
//     const text = e.target.value;

//     localStorage.setItem(TEXT_KEY, text);
    
// }

// function inputEmail(e) {
//      const email = e.target.value;

//     localStorage.setItem(TEXT_KEY, email);
// }

// function savedTextarea() {
//     const savedText = localStorage.getItem(TEXT_KEY);
//     if (savedText) {
//         refs.message.value = savedText;
//     }
  
// }

// function savedEmail() {
//     const savedEmail = localStorage.getItem(TEXT_KEY);
//     if (savedEmail) {
//         refs.email.value = savedEmail;
//     }
// }