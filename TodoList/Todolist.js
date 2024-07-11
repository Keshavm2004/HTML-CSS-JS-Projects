// const input_box = document.getElementById("input-box");
// const list_container = document.getElementById("list-container");

// input_box.addEventListener("keyup",e=>{
//     if(e.key==="Enter"){
//         addtask();
//     }
// })

// function addtask(){
//     if(input_box.value === ''){
//         alert("You must write something!!!");
//     }else{
//         let li = document.createElement("li");
//         let span = document.createElement("span");
//         span.innerHTML = "\u00d7";
//         li.innerHTML = input_box.value;
//         li.classList.add("pending");
//         list_container.appendChild(li);
//         li.appendChild(span);
//     }
//     input_box.value = '';
//     savedata();
// }

// list_container.addEventListener("click",function(e){
//     if(e.target.tagName === "LI"){
//         e.target.classList.toggle("checked");
//     }else if(e.target.tagName === "SPAN"){
//         e.target.parentElement.remove();
//     }
//     savedata();
// },false)

// function savedata(){
//     localStorage.setItem("data",list_container.innerHTML);
// }
// function retrievedata(){
//     list_container.innerHTML = localStorage.getItem("data");
// }

// retrievedata();

// const all_tasks = document.getElementById("all_tasks");
// const pending_tasks = document.getElementById("pending_tasks");
// const completed_tasks = document.getElementById("completed_tasks");
// const clear = document.getElementById("clear_tasks");
// let todos = localStorage.getItem("data");

// all_tasks.addEventListener("click",()=>{
//     // if(todos.classList === "pending" || todos.classList === "checked"){
//     //     list_container.innerHTML = todos;
//     //     alert("all tasks activated");
//     // }
//     const allTasks = document.querySelectorAll("li");
//     allTasks.forEach(task => {
//         task.classList.remove("hidden");
//     });
// })
// pending_tasks.addEventListener("click",()=>{
//     // if(todos.classList === "pending"){
//     //     list_container.innerHTML = todos;
//     // }
//     // alert("pending tasks activated");
//     const pendingTasks = document.querySelectorAll("li.pending");
//     // Show only pending tasks by removing the "hidden" class
//     pendingTasks.forEach(task => {
//         task.classList.remove("hidden");
//     });

//     // Select all list items with the class "checked" (completed tasks)
//     const completedTasks = document.querySelectorAll("li.checked");
//     // Hide completed tasks by adding the "hidden" class
//     completedTasks.forEach(task => {
//         task.classList.add("hidden");
//     });
// })
// completed_tasks.addEventListener("click",()=>{
//     const completedTasks = document.querySelectorAll("li.checked");
//     // Show completed tasks by removing the "hidden" class
//     completedTasks.forEach(task => {
//         task.classList.remove("hidden");
//     });

//     // Select all list items with the class "pending" (unchecked tasks)
//     const pendingTasks = document.querySelectorAll("li.pending");
//     // Hide pending tasks by adding the "hidden" class
//     pendingTasks.forEach(task => {
//         task.classList.add("hidden");
//     });
// })
// clear_tasks.addEventListener("click",()=>{
//     list_container.innerHTML = "";
//     alert("clear tasks activated");
// })

















// const taskinput = document.querySelector("#input-box");

// let todos = JSON.parse(localStorage.getItem("todo-list"));


    
// taskinput.addEventListener("keyup", e => {
//     let usertask = taskinput.value.trim();
//     if (e.key === "Enter" && usertask) {
//         if (!todos) {
//             todos = [];
//         }
//         taskinput.value = "";
//         let taskinfo = { name: usertask, status: "pending" };
//         todos.push(taskinfo);
//         localStorage.setItem("todo-list", JSON.stringify(todos));
//         showtodo();
//     }
// });


// Define the input box and list container
const input_box = document.getElementById("input-box");
const list_container = document.getElementById("list-container");

// Function to add a new task
function addtask() {
    if (input_box.value === '') {
        alert("You must write something!!!");
    } else {
        let li = document.createElement("li");
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.innerHTML = input_box.value;
        li.classList.add("pending");
        list_container.appendChild(li);
        li.appendChild(span);
    }
    input_box.value = '';
    savedata();
}

// Event listener for adding a task when pressing Enter
input_box.addEventListener("keyup", e => {
    if (e.key === "Enter") {
        addtask();
    }
});

// Function to save data to local storage
function savedata() {
    localStorage.setItem("data", list_container.innerHTML);
}

// Function to retrieve data from local storage
function retrievedata() {
    list_container.innerHTML = localStorage.getItem("data");
}

// Retrieve data from local storage when the page loads
retrievedata();

// Event listeners for filtering tasks
const pending_tasks = document.getElementById("pending_tasks");
const completed_tasks = document.getElementById("completed_tasks");

pending_tasks.addEventListener("click", () => {
    const allTasks = document.querySelectorAll("li");
    allTasks.forEach(task => {
        if (task.classList.contains("checked")) {
            task.style.display = "none";
        } else {
            task.style.display = "block";
        }
    });
    document.getElementsByClassName("all_tasks").remove
});

completed_tasks.addEventListener("click", () => {
    const allTasks = document.querySelectorAll("li");
    allTasks.forEach(task => {
        if (task.classList.contains("checked")) {
            task.style.display = "block";
        } else {
            task.style.display = "none";
        }
    });
});

// Event listener for clearing all tasks
const clear_tasks = document.getElementById("clear_tasks");
clear_tasks.addEventListener("click", () => {
    list_container.innerHTML = "";
    alert("clear tasks activated");
});

// Event listener for marking a task as completed or removing it
list_container.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
    savedata();
}, false);
