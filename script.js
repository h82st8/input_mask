let sp = document.querySelector('.span');
let b = document.querySelector('.button');
let ni = document.querySelector('.number');
let fi = document.querySelector('.final');
let se = document.querySelector('.select');

sp.innerHTML = se.value;
se.addEventListener("click", function () {
	sp.innerHTML = se.value;
	fi.value = sp.innerHTML + ni.value;
});

ni.addEventListener("keyup", function (e) {

	fi.value = sp.innerHTML + ni.value;

	if (ni.value.length === 1 && ni.value.charAt(0) !== "(") {
		ni.value = ni.value.replace(ni.value.charAt(0), '(' + ni.value.charAt(0));
	} else if (ni.value.length === 4) {
		ni.value = ni.value.concat(")");
	} else if (ni.value.length === 8 || ni.value.length === 11) {
		ni.value = ni.value.concat("-");
	} else if ((ni.value.length === 12 && e.keyCode === 8) || (ni.value.length === 9 && e.keyCode === 8)) {
		ni.value = ni.value.replace(/\-$/g, "");
	} else if (ni.value.length === 5 && e.keyCode === 8) {
		ni.value = ni.value.replace(/\)$/g, "");
	} else if (ni.value.length === 1 && e.keyCode === 8) {
		ni.value = ni.value.replace(/\($/g, "");
		fi.value = "";
	} else if (ni.value.length === 0) {
		fi.value = "";
	}


	ni.value = ni.value.replace(/[^\)\-\(\d]/g, '');
});

b.addEventListener('click', function (e) {
	ni.value = "";
	fi.value = "";
	e.preventDefault();
});
