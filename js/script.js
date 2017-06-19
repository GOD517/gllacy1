(function() {

var feedbackBtn = document.querySelector('.feedback');
var feedback = document.querySelector('.feedback-modal');
var overlay = document.querySelector('.modal-overlay');
var feedbackBtnClose = document.querySelector('.feedback-close');
var form = feedback.querySelector("form");


function closeModal() {
	feedback.classList.remove('feedback-modal-show');
	overlay.classList.remove('modal-overlay-show');
}


feedbackBtn.addEventListener('click', function(event) {
	event.preventDefault();

	overlay.classList.add('modal-overlay-show');
	feedback.classList.add('feedback-modal-show');
});


feedbackBtnClose.addEventListener("click", function(event) {
	event.preventDefault();
	closeModal()
});


form.addEventListener("submit", function(event) {
	event.preventDefault();
	closeModal()
});


overlay.addEventListener("click", function(event) {
event.preventDefault();
closeModal();
});


window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
		if (feedback.classList.contains("feedback-modal-show")) {
			feedback.classList.remove("feedback-modal-show");
			overlay.classList.remove("modal-overlay-show");
		}
	}
});


})();



(function() {

var inputs = document.querySelectorAll("#name, #email, #message");
var labels = document.querySelectorAll(".feedback-modal label");
var thisPlaceholder;


function focus() {
	currentPlaceholder = this.placeholder;
	this.placeholder = ' ';
	this.parentNode.previousElementSibling.firstChild.classList.add('label-show');
}

function blur() {
	this.placeholder = currentPlaceholder;
	this.parentNode.previousElementSibling.firstChild.classList.remove('label-show');
}

for (var i = 0; i < inputs.length; i++) {
	inputs[i].addEventListener('focus', focus);
	inputs[i].addEventListener('blur', blur);
}

})();

/* ========== alternative solution

function focus() { 
	currentPlaceholder = this.placeholder; 
	this.placeholder = ' '; 
	this.classList.add('input-focus'); 
	
	for (var i = 0; i < inputs.length; i++) { 
		if (inputs[i].classList.contains('input-focus')) { 
			labels[i].classList.add('label-show'); 
		} 
	} 
} 

function blur() { 
	this.placeholder = currentPlaceholder; 
	for (var i = 0; i < inputs.length; i++) { 
		if (inputs[i].classList.contains('input-focus')) { 
			labels[i].classList.remove('label-show'); 
		} 
	} 
	this.classList.remove('input-focus'); 
} 

============= */





















