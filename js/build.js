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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJidWlsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnNvbGUuY2xlYXIoKTtcbi8vdG9nZ2xlIGNsYXNzIHN0eWxlIHRhc2tcbnZhciBsaXN0QXJyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGFza0xpc3QtaXRlbScpO1xuZm9yKHZhciBpID0gMDsgaSA8IGxpc3RBcnIubGVuZ3RoOyBpKyspe1xuXHRsaXN0QXJyW2ldLmFwcGVuZENoaWxkKGNyZWF0ZURlbEljb24oKSk7XG5cdGxpc3RBcnJbaV0ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcblx0XHR0aGlzLmNsYXNzTGlzdC50b2dnbGUoJ2NvbXBsZXRlZCcpO1xuXHR9XG59XG4vL2NyZWF0ZSBkZWxldGUgaWNvblxuZnVuY3Rpb24gY3JlYXRlRGVsSWNvbigpIHtcblx0dmFyIHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdHZhciBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ1xcdTAwRDcnKTtcblx0c3Bhbi5hcHBlbmRDaGlsZChjb250ZW50KTtcblx0c3Bhbi5jbGFzc05hbWUgPSAndGFza0RlbC1pY29uJztcblx0cmV0dXJuIHNwYW47XG59XG4vL2RlbGV0ZSB0YXNrXG52YXIgZGVsTGlzdEFyciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Rhc2tEZWwtaWNvbicpO1xuZm9yKHZhciBqID0gMDsgaiA8IGRlbExpc3RBcnIubGVuZ3RoOyBqKyspe1xuXHRkZWxMaXN0QXJyW2pdLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIGRlbExpc3RJdGVtID0gdGhpcy5wYXJlbnROb2RlO1xuXHRcdGRlbExpc3RJdGVtLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZGVsTGlzdEl0ZW0pO1xuXHR9XG59XG4vL2FkZCB0YXNrIGJ5IGNsaWNrIG9uIFwiYWRkXCJcbmZ1bmN0aW9uIGNyZWF0ZU5ld1Rhc2soKSB7XG5cdHZhciBuZXdUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblx0bmV3VGFzay5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXRUYXNrJykudmFsdWUpKTtcblx0dmFyIGRlbEljb24gPSBjcmVhdGVEZWxJY29uKCk7XG5cdGRlbEljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIGRlbExpc3RJdGVtID0gdGhpcy5wYXJlbnROb2RlO1xuXHRcdGRlbExpc3RJdGVtLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZGVsTGlzdEl0ZW0pO1xuXHR9KTtcblx0bmV3VGFzay5hcHBlbmRDaGlsZChkZWxJY29uKTtcblx0bmV3VGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcblx0XHR0aGlzLmNsYXNzTGlzdC50b2dnbGUoJ2NvbXBsZXRlZCcpO1xuXHR9KTtcblx0aWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0VGFzaycpLnZhbHVlID09PSAnJyl7XG5cdFx0YWxlcnQoJ1lvdSBtdXN0IHdyaXRlIHNvbWV0aGluZyEhIScpO1xuXHR9IGVsc2Uge1xuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrTGlzdCcpLmFwcGVuZENoaWxkKG5ld1Rhc2spO1xuXHR9XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dFRhc2snKS52YWx1ZSA9ICcnO1xufVxuLy9hZGQgdGFzayBieSBwdXQgZW50ZXIgaW4gaW5wdXQtZmllbGRcbnZhciBwdXRFbnRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dFRhc2snKTtcbnB1dEVudGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZnVuY3Rpb24gKGV2KSB7XG5cdGlmKGV2LmtleUNvZGUgPT09IDEzKXtcblx0XHRjcmVhdGVOZXdUYXNrKCk7XG5cdH1cbn0sIGZhbHNlKTsiXX0=
