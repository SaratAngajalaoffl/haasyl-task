form = document.getElementById('form');
register_button = document.getElementById('btn-submit');
firstname_input = document.getElementById('firstname');
lastname_input = document.getElementById('lastname');
telnum_input = document.getElementById('telnum');
salary_input = document.getElementById('salary');
date_input = document.getElementById('date');
firstname_err = document.getElementById('fname-err');
lastname_err = document.getElementById('lname-err');
telnum_err = document.getElementById('tel-err');
salary_err = document.getElementById('sal-err');
date_err = document.getElementById('date-err');

form.addEventListener('submit', function (e) {
	let flag = false;

	if (firstname_input.value.length <= 3) {
		firstname_err.innerHTML =
			'First Name must be greater than 3 characters!';
		flag = true;
	}

	if (firstname_input.value.length >= 20) {
		firstname_err.innerHTML = 'First Name must be less than 20 characters!';
		flag = true;
	}

	if (lastname_input.value.length <= 3) {
		lastname_err.innerHTML = 'Last Name must be greater than 3 characters!';
		flag = true;
	}

	if (lastname_input.value.length >= 20) {
		lastname_err.innerHTML = 'Last Name must be less than 20 characters!';
		flag = true;
	}

	mobile_validation = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/;

	if (!mobile_validation.test(telnum_input.value)) {
		telnum_err.innerHTML = 'Mobile Number is not Valid!';
		flag = true;
	}

	if (flag) e.preventDefault();
});
