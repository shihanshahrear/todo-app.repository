import insertAfter from "./lib/insertAfter.js";
import { addToLocalDB } from "./lib/manageDB.js";

const TASK_COLLECTION_NAME = 'tasks';

const html = String.raw;


//move to completed
const moveToCompleted = () => {

    const taskIcon = document.querySelector(".task-icon")
    taskIcon.addEventListener('click', function(){
      const inCompletedTaskBox = this.closest(".task-box");
      const cloneOfInCompletedTaskBox = '<div class="task-box">' + inCompletedTaskBox.innerHTML + '</div>';
      
      
      inCompletedTaskBox.remove();

      const completedTask = document.createElement('div')
completedTask.innerHTML= cloneOfInCompletedTaskBox;
const completedTaskList = document.querySelector('.completed-task-list')

//change icon

const icon = completedTask.querySelector('.task-icon');
icon.classList.remove('bi-circle')
icon.classList.remove('bi-check-circle')
icon.classList.add('bi-check-circle-fill')



//change inner text to del
const taskName = completedTask.querySelector(".task-name").innerText;
const del = document.createElement('del')
del.innerText = taskName;

insertAfter(completedTask.querySelector(".task-name"),del);
 
completedTask.querySelector('.task-name').remove();


completedTaskList.prepend(completedTask)
    })
}

const createIncompletedTask = (taskName) => {
    //create new task
const newTask = document.createElement("div");
newTask.classList.add("task-box");
newTask.innerHTML = html ` 
<div>
        
<i class="task-icon  bi bi-circle"></i>

</div>
<div class="task-name">${taskName}</div>`;

const taskList= document.querySelector(".task-list");
taskList.prepend(newTask); 

document.querySelector(".task-icon").addEventListener("mouseover", function() {
    this.classList.remove("bi-circle");
    this.classList.add("bi-check-circle");
    });
    document.querySelector(".task-icon").addEventListener("mouseleave", function() {
        this.classList.add("bi-circle");
        this.classList.remove("bi-check-circle");
        });
    
        moveToCompleted();

}

const form = document.querySelector('#create-new-task');
form.addEventListener('submit',(e) => {
e.preventDefault();
const taskName = document.querySelector(".new-task").value;



createIncompletedTask(taskName);

//save to db
addToLocalDB(TASK_COLLECTION_NAME, [{
    name:taskName,
    isComplete: 'in'
}]);


document.querySelector(".new-task").value= "";




//TODO: move to saperate function



});

//load initially
document.querySelector(".new-task").focus();

const taskList = getDataDB(TASK_COLLECTION_NAME);
taskList.forEach((task) => { 


   createIncompletedTask(task.name);

})

/*
<div> <div class="task-box">
    <div>
        
        <i class="bi bi-circle"></i>
        
    </div>
   Hello World
   </div></div>
   document.querySelector(".new-task").focus()
*/