'use strict'

let mark = 0;
let questionNum = document.querySelectorAll('legend span');
let sendTest = document.querySelector('#sendTest');
let inputs = document.querySelectorAll('[type=radio]');
let result = document.querySelector('.result');


for(let i = 0; i < questionNum.length; i++){
    questionNum[i].innerText = `Питання ${i + 1}`;
}

sendTest.addEventListener('click', sendMail);

function sendMail(e){
    e.preventDefault();
    inputs.forEach((item, i) => {
        if(item.checked === true && item.value == 'correct'){
            mark++;
            item.parentElement.classList.add('truth');
        }
    });
    result.innerHTML += `<b> ${mark}</b>`;
    this.disabled = 'true';
    inputs.forEach(inp => {
        inp.disabled = 'true';
    });
}