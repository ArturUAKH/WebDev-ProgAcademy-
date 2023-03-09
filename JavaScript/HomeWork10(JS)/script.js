'use strict'

let tabContent = document.querySelectorAll('.tab_content');
let tabs = document.querySelector('.tabs');
let tabItem = document.querySelectorAll('.tabs_item');
let inputs = document.querySelectorAll('input');
let formWrap = document.querySelector('.form__wrap');
let star = document.querySelectorAll

tabs.addEventListener('click', activeItems);

inputs.forEach(el => {
    el.addEventListener('focus', inputAnime);
});

function activeItems(e){
    
    let target = e.target;

    tabItem.forEach((el) => {
        el.classList.toggle('active');
    });
    tabContent.forEach(el => {
        el.classList.toggle('show');
    });    
}

function inputAnime(e){
    let label = e.target.previousElementSibling;

    label.classList.add('anime');
}




