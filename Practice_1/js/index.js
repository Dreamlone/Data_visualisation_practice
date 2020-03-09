function change_function() {
  var chbox = document.getElementById('one');
  var box_label = document.getElementById('label');
  h_smile = document.getElementById("happy");
  s_smile = document.getElementById("sad");
  // Если чекбокс находится в состоянии "Sad", то мы переключаемся на "Happy" со всеми преобразованиями
	if (box_label.innerText === 'Sad') {
    box_label.innerText = 'Happy';
    h_smile.style.display = 'block';
    s_smile.style.display = 'none';
	}
	else {
    box_label.innerText = 'Sad';
    h_smile.style.display = 'none';
    s_smile.style.display = 'block';
	}
}
