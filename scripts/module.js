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
	newTask.className = priorityClass;
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
	var normalTaskArr= [], hardTaskArr = [], fastTaskArr = [];
	for (var i = 0; i < taskListArr.length; i++){
		var listClass = '';
		listClass = taskListArr[i].getAttribute('class');
		if(listClass === 'taskList-item fast'){
			fastTaskArr.push(taskListArr[i]);
		} else if (listClass === 'taskList-item hard'){
			hardTaskArr.push(taskListArr[i]);
		} else {
			normalTaskArr.push(taskListArr[i]);
		}
	}
	console.log(fastTaskArr.join(', '));
	// var taskContainer = document.getElementById('taskList');
	// for(var j = 1; j < fastTaskArr.length; j++){
	// 	taskContainer.appendChild(fastTaskArr[j]);
	// }
	for(var t = 0; t < fastTaskArr.length; t++){
		for(var y = 0; y < fastTaskArr[t].length; y++){
			console.log(fastTaskArr[t].[y]);
		}
	}
}