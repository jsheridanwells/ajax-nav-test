var lis = document.getElementsByTagName('li');
var section = document.getElementById('main');

for (var i = 0; i < lis.length; i++) {
	lis[i].onclick = updatePage;
}

function updatePage() {
	var xhr = new XMLHttpRequest();
	var value = this.getAttribute('value');
	xhr.onreadystatechange = function() {
		section.innerHTML = xhr.responseText;
	};
	xhr.open('GET' , value);
	xhr.send();
}

//update page
//if a user clicks a link
//the section is updated with the corresponding HTML



//Working updatePage function: 
//This function will load 1 page every time an LI is clicked

// function updatePage() {
//   var xhr = new XMLHttpRequest();
//   xhr.onreadystatechange = function() {
//   	section.innerHTML = xhr.responseText;
//   }
//   xhr.open('GET', 'link1.html');
//   xhr.send();
// }