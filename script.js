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

let arrayOfUsers = [
	{
		name: 'David',
		surename: 'Ouhs',
		age: 44,
	},
	{
		name: 'Rick',
		surename: 'Fidner',
		age: 13,
	},
	{
		name: 'Georg',
		surename: 'Kilman',
		age: 55,
	},
	{
		name: 'Rob',
		surename: 'Dikson',
		age: 42,
	},
	{
		name: 'Poul',
		surename: 'Rinnd',
		age: 21,
	},
];

const form = document.forms[0];
console.dir(form)


userName.addEventListener('change', (e) => {
	user.name = e.target.value;
});
userName.addEventListener('input', (e) => {
	console.log(e.target.value);
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

	arrayOfUsers.push(user);

	list.innerHTML = '';

	arrayOfUsers.forEach(item => {
		const listElem = document.createElement('li');
		listElem.innerText = `${item.name} ${item.surename} age: ${item.age}`;
		list.append(listElem);
	})

	user = {};
	form.reset();
	console.log(arrayOfUsers)
})


searchInput.addEventListener('input', (e) => {
	const filterItem = arrayOfUsers.filter(item => {
		if (item.surename.toLowerCase().includes(e.target.value)){
			return true;
		} else{
			return false;
		}
		
	})

	renderList(filterItem)
});


const renderList = (model = arrayOfUsers) => {
	list.innerHTML = '';

	model.forEach(item => {
		const listElem = document.createElement('li');
		listElem.innerText = `${item.name} ${item.surename} age: ${item.age}`;
		list.append(listElem);
	})

}

sortByAgeInput.addEventListener('change', (event) => {
	if (event.target.checked) {
		const sortedItems = [...arrayOfUsers].sort((a, b) => a.age - b.age);
		renderList(sortedItems);
	} else {
		renderList();
	}
})

if (arrayOfUsers.length) {
	renderList()
}



