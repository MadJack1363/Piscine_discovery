function calculate(){
	const left = document.getElementById("lnumber");
	const right = document.getElementById("rnumber");
	const select = document.getElementById("op-select");
	let x = left.value;
	let y = right.value;
	let ope = select.value;
	let result;

	if (Number(x) < 0 || Number(y) < 0)
		result = "Error :("
	else if (ope == '+')
		result = Number(x) + Number(y);
	else if (ope == '-')
		result = Number(x) - Number(y);
	else if (ope == '*')
		result = Number(x) * Number(y);
	else if (ope == '/')
	{
		if (Number(y) == 0)
			result = "It's over 9000!";
		else
			result = Number(x) / Number(y);
	}
	else if (ope == '%')
	{
		if (Number(y) == 0)
			result = "It's over 9000!";
		else
			result = Number(x) % Number(y);
	}
	console.log(result);
	alert(result);
}

function useMe(){
	alert("Please, use me...");
}

setInterval(function(){
    useMe()
}, 30000)
