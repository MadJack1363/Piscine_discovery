
document.getElementById("buttonNew").addEventListener('click', addElem);


let cookies = JSON.parse(localStorage.getItem('todoList'));
if (cookies) {
	cookies.forEach(cookies => loadTodo(cookies));
}


function loadTodo(todo) {
	const newElt = document.createElement("div");
	let elt = document.getElementById("ft_list");

	if (todo == null) return;
	else if (todo == '') return;
	else newElt.textContent = todo;
	newElt.classList.add('todo');
	newElt.addEventListener('click', (e) => {
		e.preventDefault();
		delElem(newElt);
	});
	elt.insertBefore(newElt, elt.firstChild);
	updateLocalStorage();
}

function addElem(event){
	const newElt = document.createElement("div");
	let elt = document.getElementById("ft_list");
	let content = prompt("What you have to do?");

	event.stopPropagation();
	if(content == null) return;
	else if (content == "") return;
	else newElt.textContent = content;
	newElt.classList.add('todo');
	newElt.addEventListener('click', (e) => {
		e.preventDefault();
		delElem(newElt);
	});
	elt.insertBefore(newElt, elt.firstChild);
	updateLocalStorage();
}

function updateLocalStorage() {
	const todoList = document.querySelectorAll('.todo');
	const todos = [];
	todoList.forEach(todoList => {todos.unshift(todoList.innerText)});
	localStorage.setItem('todoList', JSON.stringify(todos));
}

function delElem(toDel){
	let elt = document.getElementById("ft_list");

	if(confirm("Did you really finish that task ?")) {
		elt.removeChild(toDel);
		updateLocalStorage();
	}
}
