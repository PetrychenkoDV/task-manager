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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJidWlsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnNvbGUuY2xlYXIoKTtcbi8vdG9nZ2xlIGNsYXNzIHN0eWxlIHRhc2tcbnZhciBsaXN0QXJyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGFza0xpc3QtaXRlbScpO1xuZm9yKHZhciBpID0gMDsgaSA8IGxpc3RBcnIubGVuZ3RoOyBpKyspe1xuXHRsaXN0QXJyW2ldLmFwcGVuZENoaWxkKGNyZWF0ZURlbEljb24oKSk7XG5cdGxpc3RBcnJbaV0ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcblx0XHR0aGlzLmNsYXNzTGlzdC50b2dnbGUoJ2NvbXBsZXRlZCcpO1xuXHR9XG59XG4vL2NyZWF0ZSBkZWxldGUgaWNvblxuZnVuY3Rpb24gY3JlYXRlRGVsSWNvbigpIHtcblx0dmFyIHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdHZhciBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ1xcdTAwRDcnKTtcblx0c3Bhbi5hcHBlbmRDaGlsZChjb250ZW50KTtcblx0c3Bhbi5jbGFzc05hbWUgPSAndGFza0RlbC1pY29uJztcblx0cmV0dXJuIHNwYW47XG59XG4vL2RlbGV0ZSB0YXNrXG52YXIgZGVsTGlzdEFyciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Rhc2tEZWwtaWNvbicpO1xuZm9yKHZhciBqID0gMDsgaiA8IGRlbExpc3RBcnIubGVuZ3RoOyBqKyspe1xuXHRkZWxMaXN0QXJyW2pdLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIGRlbExpc3RJdGVtID0gdGhpcy5wYXJlbnROb2RlO1xuXHRcdGRlbExpc3RJdGVtLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZGVsTGlzdEl0ZW0pO1xuXHR9XG59XG4vL2FkZCB0YXNrIGJ5IGNsaWNrIG9uIFwiYWRkXCJcbmZ1bmN0aW9uIGNyZWF0ZU5ld1Rhc2soKSB7XG5cdHZhciBuZXdUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblx0bmV3VGFzay5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXRUYXNrJykudmFsdWUpKTtcblx0dmFyIGRlbEljb24gPSBjcmVhdGVEZWxJY29uKCk7XG5cdGRlbEljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIGRlbExpc3RJdGVtID0gdGhpcy5wYXJlbnROb2RlO1xuXHRcdGRlbExpc3RJdGVtLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZGVsTGlzdEl0ZW0pO1xuXHR9KTtcblx0bmV3VGFzay5hcHBlbmRDaGlsZChkZWxJY29uKTtcblx0bmV3VGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcblx0XHR0aGlzLmNsYXNzTGlzdC50b2dnbGUoJ2NvbXBsZXRlZCcpO1xuXHR9KTtcblx0Ly9hZGQgY2xhc3MtcHJpb3JpdHkgZm9yIHRhc2tcblx0dmFyIHNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWxlY3QtcHJpb3JpdHknKTtcblx0dmFyIHByaW9yaXR5Q2xhc3MgPSBzZWxlY3Qub3B0aW9uc1tzZWxlY3Quc2VsZWN0ZWRJbmRleF0udmFsdWU7XG5cdG5ld1Rhc2suY2xhc3NOYW1lID0gJ3Rhc2tMaXN0LWl0ZW0gJyArIHByaW9yaXR5Q2xhc3M7XG5cdC8vaWYgaW5wdXQgZW1wdHlcblx0aWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0VGFzaycpLnZhbHVlID09PSAnJyl7XG5cdFx0YWxlcnQoJ1lvdSBtdXN0IHdyaXRlIHNvbWV0aGluZyEhIScpO1xuXHR9IGVsc2Uge1xuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrTGlzdCcpLmFwcGVuZENoaWxkKG5ld1Rhc2spO1xuXHR9XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dFRhc2snKS52YWx1ZSA9ICcnO1xufVxuLy9hZGQgdGFzayBieSBwdXQgZW50ZXIgaW4gaW5wdXQtZmllbGRcbnZhciBwdXRFbnRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dFRhc2snKTtcbnB1dEVudGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZnVuY3Rpb24gKGV2KSB7XG5cdGlmKGV2LmtleUNvZGUgPT09IDEzKXtcblx0XHRjcmVhdGVOZXdUYXNrKCk7XG5cdH1cbn0sIGZhbHNlKTtcbi8vc29ydCB0YXNrIGxpc3QgYnkgcHJpb3JpdHlcbmZ1bmN0aW9uIHNvcnRUYXNrTGlzdCgpIHtcblx0dmFyIHRhc2tMaXN0QXJyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGFza0xpc3QtaXRlbScpO1xuXHR2YXIgZmFzdFRhc2tMaXN0QXJyID0gW10sIGhhcmRUYXNrTGlzdEFyciA9IFtdLCBub3JtVGFza0xpc3RBcnIgPSBbXTtcblx0Zm9yKHZhciBpID0gKHRhc2tMaXN0QXJyLmxlbmd0aCAtMSk7IGkgPj0gMDsgaS0tKXtcblx0XHRpZih0YXNrTGlzdEFycltpXS5jbGFzc05hbWUgPT09ICd0YXNrTGlzdC1pdGVtIGZhc3QnKXtcblx0XHRcdGZhc3RUYXNrTGlzdEFyci5wdXNoKHRhc2tMaXN0QXJyW2ldKTtcblx0XHR9IGVsc2UgaWYgKHRhc2tMaXN0QXJyW2ldLmNsYXNzTmFtZSA9PT0gJ3Rhc2tMaXN0LWl0ZW0gaGFyZCcpIHtcblx0XHRcdGhhcmRUYXNrTGlzdEFyci5wdXNoKHRhc2tMaXN0QXJyW2ldKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bm9ybVRhc2tMaXN0QXJyLnB1c2godGFza0xpc3RBcnJbaV0pO1xuXHRcdH1cblx0XHR0YXNrTGlzdEFycltpXS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRhc2tMaXN0QXJyW2ldKTtcblx0fVxuXHR2YXIgdGFza0xpc3RDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza0xpc3QnKTtcblx0YWRkU29ydGVkVGFzayhmYXN0VGFza0xpc3RBcnIsIHRhc2tMaXN0Q29udGFpbmVyKTtcblx0YWRkU29ydGVkVGFzayhoYXJkVGFza0xpc3RBcnIsIHRhc2tMaXN0Q29udGFpbmVyKTtcblx0YWRkU29ydGVkVGFzayhub3JtVGFza0xpc3RBcnIsIHRhc2tMaXN0Q29udGFpbmVyKTtcbn1cbi8vYWRkIHNvcnRlZCB0YXNrbGlzdCBlbGVtZW50XG5mdW5jdGlvbiBhZGRTb3J0ZWRUYXNrKGxpc3RBcnIsIHBhcmVudENvbnRhaW5lcikge1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgbGlzdEFyci5sZW5ndGg7IGkrKyl7XG5cdFx0cGFyZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3RBcnJbaV0pO1xuXHR9XG59Il19
