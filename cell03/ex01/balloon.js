function size_up(){
	var element = document.getElementById("balloon");
	var size = element.offsetHeight;
	var new_size = size + 10;
	var color = window.getComputedStyle(element, null).getPropertyValue("background-color");
	if (color === 'rgb(255, 0, 0)'){
		element.style.backgroundColor = 'rgb(0, 255, 0)';
	}
	else if (color === 'rgb(0, 255, 0)'){
		element.style.backgroundColor = 'rgb(0, 0, 255)';
	}
	else if (color === 'rgb(0, 0, 255)'){
		element.style.backgroundColor = 'rgb(255, 0, 0)';
	}
	if (new_size > 420){
		new_size = 200;
		element.style.backgroundColor = 'rgb(255, 0, 0)';
	}
	element.style.height = new_size + 'px';
	element.style.width = new_size + 'px';
}