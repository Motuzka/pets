const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const penModal = document.getElementById('modalPenSize');
const penBtn = document.getElementById('pen');
const size = document.getElementById('size');
let myColor = '#000';

// Color picker
document.getElementById('color').oninput = function () {
	myColor = this.value;
}

// Painting
canvas.onmousedown = function (event) {
	ctx.beginPath();
	let x = event.offsetX;
	let y = event.offsetY;
	if (event.which == 1) {
		ctx.strokeStyle = myColor
	} else if (event.which == 3) {
		ctx.strokeStyle = 'white';
	}
	ctx.lineJoin = 'round';
	ctx.lineCap = 'round';
	ctx.moveTo(x, y);
	ctx.lineWidth = +size.value;
	canvas.onmousemove = function (event) {
		// ctx.fillRect(x - 3, y - 3, +size.value, +size.value);
		let x = event.offsetX;
		let y = event.offsetY;
		ctx.lineTo(x, y);
		ctx.stroke();
	}
	canvas.onmouseup = function () {
		canvas.onmousemove = null;
	}
};
canvas.onmouseout = function () {
	canvas.onmousemove = null;
}

// Size change

size.oninput = function () {
	let sizeValue = document.getElementById('sizeValue');
	sizeValue.innerHTML = size.value + 'px';
}

// Modal pen

penBtn.onclick = function () {
	penModal.style.display = 'block';
}

window.onclick = function (event) {
	const modalWrapper = document.getElementById('pen');
	if (event.target !== modalWrapper) {
		penModal.style.display = 'none';
	}
}

// Clearing

document.getElementById('clear').onclick = () => ctx.clearRect(0, 0, 1000, 700), ctx.beginPath();

// Saving 

let save = document.getElementById('save');
save.onclick = function () {
	this.setAttribute("href", canvas.toDataURL());
	this.download = 'canvas.png';
}




