// document.querySelector(".hi").onclick = function() {
// 	alert("привет");
// };

// document.querySelector(".bye").onclick = function() {
// 	alert("пока");
// };

document.querySelector(".add").onclick = function() {
	// alert(2 + 2)
	let num1 = document.querySelector(".num1").value;
	let num2 = document.querySelector(".num2").value;
	num1 = parseInt(num1);
	num2 = parseInt(num2);
	alert(num1 + num2)
};

document.querySelector(".subtract").onclick = function() {
	let num1 = document.querySelector(".num1").value;
	let num2 = document.querySelector(".num2").value;
	num1 = parseInt(num1);
	num2 = parseInt(num2);
	alert(num1 - num2)
};

document.querySelector(".multiply").onclick = function() {
	let num1 = document.querySelector(".num1").value;
	let num2 = document.querySelector(".num2").value;
	num1 = parseInt(num1);
	num2 = parseInt(num2);
	alert(num1 * num2)
};

document.querySelector(".devide").onclick = function() {
	let num1 = document.querySelector(".num1").value;
	let num2 = document.querySelector(".num2").value;
	num1 = parseInt(num1);
	num2 = parseInt(num2);
	alert(num1 / num2)
};
