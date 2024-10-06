const charLimit = document.querySelector('#char-limit');
const stringInput = document.querySelector('#string-input');
const counter = document.querySelector('#counter');
const checkbox = document.querySelector('#text-size-limiter');

let limit = 0;
let curLength = 0;

function updateCount() {
	counter.innerHTML = `${curLength}/${limit}`;
	if (curLength > limit) {
		counter.classList.add('overflowed');
	} else {
		counter.classList.remove('overflowed');
	}
}

function limitLength() {
	if (checkbox.checked) {
		stringInput.setAttribute('maxlength', limit);
	} else if (stringInput.hasAttribute('maxlength')) {
		stringInput.removeAttribute('maxlength')
	}
}

checkbox.addEventListener('change', () => {
	limitLength();
})

charLimit.addEventListener('change', () => {
	limit = charLimit.value;
	updateCount();
	limitLength();
})

stringInput.addEventListener('input', () => {
	curLength = stringInput.value.length;
	updateCount();
})

