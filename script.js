'use strict';


//focus


//onfocus






// ourInput.addEventListener('focus', (e) => {
// 	// e.target.value = `${user.name} ${user.surname}`;

// });
// ourInput.addEventListener('blur', (e) => {
// 	// e.target.value = `${user.personalId} (${user.name} ${user.surname})`;
// 	console.log('blur');
// });

// ourInput.addEventListener('focus', (e) => {
// 	e.target.style.color = '';

// });
// ourInput.addEventListener('focus', (event) => {
// 	event.target.style.color = '';
// });

// ourInput.addEventListener('change', (event) => {
// 	if (event.target.value.length < 8) {
// 		event.target.style.color = 'red';
// 		errorSection.innerText = `${event.target.value} is invaid`;
// 	} else {
// 		const li = document.createElement('li');
// 		li.innerText = event.target.value;
// 		list.append(li);
// 		errorSection.innerText = '';
// 		event.target.value = '';
// 	}
// });


// ourCheckbox.addEventListener('change', (e) => {
// 	console.log(e.target.checked)
// });


// const radioButtonsCollections = document.getElementsByName('radioSection');
// console.log(radioButtonsCollections)

// radioButtonsCollections.forEach(element => {
// 	element.addEventListener('change', (e) => {
// 		console.log(e.target.value)
// 	})
// });

let user = {

};


const form = document.forms[0];
console.dir(form)


userName.addEventListener('change', (e) => {
	user.name = e.target.value;
});
userSureName.addEventListener('change', (e) => {
	user.surename = e.target.value;
});
userAge.addEventListener('change', (e) => {
	user.age = Number(e.target.value);
});
isStudent.addEventListener('click', (e) => {
	user['is student'] = e.target.checked;
})

let radioCollections = document.getElementsByName('radioSection');
radioCollections.forEach(element => {
	element.addEventListener('click', (e) => {
		user['text color'] = e.target.value;
	})
});


creationButton.addEventListener('click', (e) => {
	e.preventDefault();
	console.log(user);
	const li1 = document.createElement('li');

	li1.innerText = `${userName.value}
	${userSureName.value}
	${userAge.value}`;

	li1.style.color = user['text color'];
	if (isStudent.checked === true){
		li1.style.fontWeight = 'bold';
	} 
	list.append(li1);

})


