/**
 * Created by Dmytro on 08.04.2017.
 */
addDelIcon();
addNewTaskEnter();
deleteTask();

//add new task by button 'Add' from input
function addNewTask() {
	var listItem = document.createElement('li');
	var taskContent = document.getElementById('taskInput').value;
	var newTask = document.createTextNode(taskContent);
	listItem.appendChild(newTask);
	if(taskContent === ''){
		alert('you must write something!');
	} else {
		document.getElementById('taskLists').appendChild(listItem);
	}
	document.getElementById('taskInput').value = '';
	addDelIcon();
	deleteTask();
}
//add new task by key enter from input
function addNewTaskEnter() {
	var newTask = document.getElementById('taskInput');
	newTask.addEventListener('keyup', function (ev) {
		if(ev.keyCode === 13){
			addNewTask();
		}
	}, false);
	addDelIcon();
	deleteTask();
}
//add del icon
function addDelIcon() {
	var listArr = document.getElementsByTagName('li');
	for(var i = 0; i < listArr.length; i++){
		var delIconContainer = document.createElement('span');
		var delIcon = document.createTextNode('\u00D7');
		delIconContainer.className = 'completed-task';
		delIconContainer.appendChild(delIcon);
		listArr[i].appendChild(delIconContainer);
	}
}
//delete task
function deleteTask() {
	var delTask = document.getElementsByClassName('completed-task');
	for(var i = 0; i < delTask.length; i++){
		delTask[i].onclick = function () {
			var delItem = this.parentElement;
			delItem.parentElement.removeChild(delItem);
		}
	}
}
//add checked style
	var taskList = document.querySelector('ul');
	taskList.addEventListener('click', function (ev) {
		if (ev.target.tagName === 'li'){
			ev.target.classList.toggle('test-class');
		}
	}, false);