
const trelloItems = document.querySelectorAll('.trello__appItem');
const tasks = document.querySelectorAll('.trello__appTask');
const btn = document.querySelector('#btn');
const inp = document.querySelector('#inp');
const sprintZone = document.querySelector('#sprint');
let taskToDrag;

trelloItems.forEach(item => {
    item.addEventListener('dragover', prevent);
    item.addEventListener('drop', dropTask);
});


tasks.forEach(task => {
    task.addEventListener('dragstart', startDragTask);
    task.addEventListener('dragend', dragEnd);
});

btn.addEventListener('click', createNewTask);


function createNewTask(){
    const el = document.createElement('div');
    el.classList.add('trello__appTask');
    el.innerText = inp.value;
    el.setAttribute('draggable', 'true');
    sprintZone.appendChild(el);
    inp.value = "";
    el.addEventListener('dragstart', startDragTask);
    el.addEventListener('dragend', dragEnd);
}

function dropTask(){
    this.appendChild(taskToDrag);
}

function startDragTask(e){
    taskToDrag = e.target;
    setTimeout(function(){
        taskToDrag.classList.add('hide');
    }, 0);
}

function prevent(e){
    e.preventDefault();
}

function dragEnd(){
    this.classList.remove('hide');
}