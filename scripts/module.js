console.clear();
//toggle class style task
var listArr = document.getElementsByClassName('taskList-item');
for(var i = 0; i < listArr.length; i++){
	listArr[i].appendChild(createDelIcon());
	listArr[i].onclick = function () {
		this.classList.toggle('completed');
	}
}
//create delete icon
function createDelIcon() {
	var span = document.createElement('span');
	var content = document.createTextNode('\u00D7');
	span.appendChild(content);
	span.className = 'taskDel-icon';
	return span;
}
//delete task
var delListArr = document.getElementsByClassName('taskDel-icon');
for(var j = 0; j < delListArr.length; j++){
	delListArr[j].onclick = function () {
		var delListItem = this.parentNode;
		delListItem.parentNode.removeChild(delListItem);
	}
}
//add task by click on "add"
function createNewTask() {
	var newTask = document.createElement('li');
	newTask.appendChild(document.createTextNode(document.getElementById('inputTask').value));
	var delIcon = createDelIcon();
	delIcon.addEventListener('click', function () {
		var delListItem = this.parentNode;
		delListItem.parentNode.removeChild(delListItem);
	});
	newTask.appendChild(delIcon);
	newTask.addEventListener('click', function () {
		this.classList.toggle('completed');
	});
	//add class-priority for task
	var select = document.getElementById('select-priority');
	var priorityClass = select.options[select.selectedIndex].value;
	newTask.className = 'taskList-item ' + priorityClass;
	//if input empty
	if(document.getElementById('inputTask').value === ''){
		alert('You must write something!!!');
	} else {
		document.getElementById('taskList').appendChild(newTask);
	}
	document.getElementById('inputTask').value = '';
}
//add task by put enter in input-field
var putEnter = document.getElementById('inputTask');
putEnter.addEventListener('keyup', function (ev) {
	if(ev.keyCode === 13){
		createNewTask();
	}
}, false);
//sort task list by priority
function sortTaskList() {
	var taskListArr = document.getElementsByClassName('taskList-item');
	var fastTaskListArr = [], hardTaskListArr = [], normTaskListArr = [];
	for(var i = (taskListArr.length -1); i >= 0; i--){
		if(taskListArr[i].className === 'taskList-item fast'){
			fastTaskListArr.push(taskListArr[i]);
		} else if (taskListArr[i].className === 'taskList-item hard') {
			hardTaskListArr.push(taskListArr[i]);
		} else {
			normTaskListArr.push(taskListArr[i]);
		}
		taskListArr[i].parentNode.removeChild(taskListArr[i]);
	}
	var taskListContainer = document.getElementById('taskList');
	addSortedTask(fastTaskListArr, taskListContainer);
	addSortedTask(hardTaskListArr, taskListContainer);
	addSortedTask(normTaskListArr, taskListContainer);
}
//add sorted tasklist element
function addSortedTask(listArr, parentContainer) {
	for(var i = 0; i < listArr.length; i++){
		parentContainer.appendChild(listArr[i]);
	}
}