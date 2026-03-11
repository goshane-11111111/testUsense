let tasks = []

function addTask(){

const input = document.getElementById("taskInput")
const priority = document.getElementById("priority").value

const task = {
title: input.value,
priority: priority,
completed:false
}

tasks.push(task)

render()

input.value=""

}

function render(){

const list = document.getElementById("taskList")
list.innerHTML=""

tasks.forEach((task,index)=>{

const li=document.createElement("li")

li.innerHTML=`
<span onclick="toggle(${index})">
${task.title} (${task.priority})
</span>

<button onclick="remove(${index})">delete</button>
`

if(task.completed)
li.classList.add("completed")

list.appendChild(li)

})

}

function toggle(index){

tasks[index].completed=!tasks[index].completed
render()

}

function remove(index){

tasks.splice(index,1)
render()

}