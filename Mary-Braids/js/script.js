"use strict"

document.addEventListener('DOMContentLoaded', function (){
	const form = document.getElementById('request');
	form.addEventListener('submit', formSend);
	
	async function formSend(e) {
		e.preventDefault();
		
		let error = formValidate(form);
	}
	
	function formValidate(form) {
		let error = 0;
		let formReq = document.querySelectorAll('._req');
		
		for (let index = 0; index < formReq.length; index++) {
			const input = formReq[index];
			formRemoveError(input);

			if(input.classList.contains('_email')) {

			}
		}
	}

	function formAddError(input) {
		input.parentElement.classList.add('_error');
		input.classList.add('_error');
	}
	function formRemoveError(input) {
		input.parentElement.classList.remove('_error');
		input.classList.remove('_error');
	}

	function emailTest(input) {
		return 
	}
});
