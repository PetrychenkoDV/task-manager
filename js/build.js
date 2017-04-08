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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYnVpbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zb2xlLmNsZWFyKCk7XG4vL3RvZ2dsZSBjbGFzcyBzdHlsZSB0YXNrXG52YXIgbGlzdEFyciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Rhc2tMaXN0LWl0ZW0nKTtcbmZvcih2YXIgaSA9IDA7IGkgPCBsaXN0QXJyLmxlbmd0aDsgaSsrKXtcblx0bGlzdEFycltpXS5hcHBlbmRDaGlsZChjcmVhdGVEZWxJY29uKCkpO1xuXHRsaXN0QXJyW2ldLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG5cdFx0dGhpcy5jbGFzc0xpc3QudG9nZ2xlKCdjb21wbGV0ZWQnKTtcblx0fVxufVxuLy9jcmVhdGUgZGVsZXRlIGljb25cbmZ1bmN0aW9uIGNyZWF0ZURlbEljb24oKSB7XG5cdHZhciBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXHR2YXIgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdcXHUwMEQ3Jyk7XG5cdHNwYW4uYXBwZW5kQ2hpbGQoY29udGVudCk7XG5cdHNwYW4uY2xhc3NOYW1lID0gJ3Rhc2tEZWwtaWNvbic7XG5cdHJldHVybiBzcGFuO1xufVxuLy9kZWxldGUgdGFza1xudmFyIGRlbExpc3RBcnIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0YXNrRGVsLWljb24nKTtcbmZvcih2YXIgaiA9IDA7IGogPCBkZWxMaXN0QXJyLmxlbmd0aDsgaisrKXtcblx0ZGVsTGlzdEFycltqXS5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuXHRcdHZhciBkZWxMaXN0SXRlbSA9IHRoaXMucGFyZW50Tm9kZTtcblx0XHRkZWxMaXN0SXRlbS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGRlbExpc3RJdGVtKTtcblx0fVxufVxuLy9hZGQgdGFzayBieSBjbGljayBvbiBcImFkZFwiXG5mdW5jdGlvbiBjcmVhdGVOZXdUYXNrKCkge1xuXHR2YXIgbmV3VGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cdG5ld1Rhc2suYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0VGFzaycpLnZhbHVlKSk7XG5cdHZhciBkZWxJY29uID0gY3JlYXRlRGVsSWNvbigpO1xuXHRkZWxJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuXHRcdHZhciBkZWxMaXN0SXRlbSA9IHRoaXMucGFyZW50Tm9kZTtcblx0XHRkZWxMaXN0SXRlbS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGRlbExpc3RJdGVtKTtcblx0fSk7XG5cdG5ld1Rhc2suYXBwZW5kQ2hpbGQoZGVsSWNvbik7XG5cdG5ld1Rhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG5cdFx0dGhpcy5jbGFzc0xpc3QudG9nZ2xlKCdjb21wbGV0ZWQnKTtcblx0fSk7XG5cdC8vYWRkIGNsYXNzLXByaW9yaXR5IGZvciB0YXNrXG5cdHZhciBzZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VsZWN0LXByaW9yaXR5Jyk7XG5cdHZhciBwcmlvcml0eUNsYXNzID0gc2VsZWN0Lm9wdGlvbnNbc2VsZWN0LnNlbGVjdGVkSW5kZXhdLnZhbHVlO1xuXHRuZXdUYXNrLmNsYXNzTmFtZSA9IHByaW9yaXR5Q2xhc3M7XG5cdC8vaWYgaW5wdXQgZW1wdHlcblx0aWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0VGFzaycpLnZhbHVlID09PSAnJyl7XG5cdFx0YWxlcnQoJ1lvdSBtdXN0IHdyaXRlIHNvbWV0aGluZyEhIScpO1xuXHR9IGVsc2Uge1xuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrTGlzdCcpLmFwcGVuZENoaWxkKG5ld1Rhc2spO1xuXHR9XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dFRhc2snKS52YWx1ZSA9ICcnO1xufVxuLy9hZGQgdGFzayBieSBwdXQgZW50ZXIgaW4gaW5wdXQtZmllbGRcbnZhciBwdXRFbnRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dFRhc2snKTtcbnB1dEVudGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZnVuY3Rpb24gKGV2KSB7XG5cdGlmKGV2LmtleUNvZGUgPT09IDEzKXtcblx0XHRjcmVhdGVOZXdUYXNrKCk7XG5cdH1cbn0sIGZhbHNlKTtcblxuLy9zb3J0IHRhc2sgbGlzdCBieSBwcmlvcml0eVxuZnVuY3Rpb24gc29ydFRhc2tMaXN0KCkge1xuXHR2YXIgdGFza0xpc3RBcnIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0YXNrTGlzdC1pdGVtJyk7XG5cdHZhciBub3JtYWxUYXNrQXJyPSBbXSwgaGFyZFRhc2tBcnIgPSBbXSwgZmFzdFRhc2tBcnIgPSBbXTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0YXNrTGlzdEFyci5sZW5ndGg7IGkrKyl7XG5cdFx0dmFyIGxpc3RDbGFzcyA9ICcnO1xuXHRcdGxpc3RDbGFzcyA9IHRhc2tMaXN0QXJyW2ldLmdldEF0dHJpYnV0ZSgnY2xhc3MnKTtcblx0XHRpZihsaXN0Q2xhc3MgPT09ICd0YXNrTGlzdC1pdGVtIGZhc3QnKXtcblx0XHRcdGZhc3RUYXNrQXJyLnB1c2godGFza0xpc3RBcnJbaV0pO1xuXHRcdH0gZWxzZSBpZiAobGlzdENsYXNzID09PSAndGFza0xpc3QtaXRlbSBoYXJkJyl7XG5cdFx0XHRoYXJkVGFza0Fyci5wdXNoKHRhc2tMaXN0QXJyW2ldKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bm9ybWFsVGFza0Fyci5wdXNoKHRhc2tMaXN0QXJyW2ldKTtcblx0XHR9XG5cdH1cblx0Y29uc29sZS5sb2coZmFzdFRhc2tBcnIuam9pbignLCAnKSk7XG5cdC8vIHZhciB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tMaXN0Jyk7XG5cdC8vIGZvcih2YXIgaiA9IDE7IGogPCBmYXN0VGFza0Fyci5sZW5ndGg7IGorKyl7XG5cdC8vIFx0dGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChmYXN0VGFza0FycltqXSk7XG5cdC8vIH1cblx0Zm9yKHZhciB0ID0gMDsgdCA8IGZhc3RUYXNrQXJyLmxlbmd0aDsgdCsrKXtcblx0XHRmb3IodmFyIHkgPSAwOyB5IDwgZmFzdFRhc2tBcnJbdF0ubGVuZ3RoOyB5Kyspe1xuXHRcdFx0Y29uc29sZS5sb2coZmFzdFRhc2tBcnJbdF0uW3ldKTtcblx0XHR9XG5cdH1cbn0iXX0=
