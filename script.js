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
		surname: 'Ouhs',
		age: 44,
		itemID: 21,
	},
	{
		name: 'Rick',
		surname: 'Fidner',
		age: 13,
		itemID: 22,
	},
	{
		name: 'Georg',
		surname: 'Kilman',
		age: 55,
		itemID: 23,
	},
	{
		name: 'Rob',
		surname: 'Dikson',
		age: 42,
		itemID: 24,
	},
	{
		name: 'Poul',
		surname: 'Rinnd',
		age: 21,
		itemID: 25,
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
userSurName.addEventListener('change', (e) => {
	user.surname = e.target.value;
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
		listElem.innerText = `${item.name} ${item.surname} age: ${item.age}`;
		list.append(listElem);
	})

	user = {};
	form.reset();
	console.log(arrayOfUsers)
})


searchInput.addEventListener('input', (e) => {
	const filterItem = arrayOfUsers.filter(item => {
		if (item.surname.toLowerCase().includes(e.target.value)) {
			return true;
		} else {
			return false;
		}

	})

	renderList(filterItem)
});


const renderList = (model = arrayOfUsers) => {
	list.innerHTML = '';

	model.forEach(item => {
		const listElem = document.createElement('li');
		listElem.innerText = `${item.name} ${item.surname} age: ${item.age} `;
		const deleteButton = document.createElement('button');
		deleteButton.innerText = 'X';
		listElem.append(deleteButton);
		list.append(listElem);
		deleteButton.onclick = (e) => {
			e.preventDefault();
			const itemSurname = listElem.innerText.split(' ')[1]
			const filterModel = arrayOfUsers.filter(item => {
				return item.surname != itemSurname ? true : false;
			});
			arrayOfUsers = filterModel;
			renderList();



			const editButton = document.createElement('button')
			editButton.itemID = item.itemID;
			editButton.innerText = 'edit';
			listElem.append(editButton)

			editButton.addEventListener('click', (e) => {
				const editInput = document.createElement('input');
				const elem = arrayOfUsers.find((item)=> item.itemID === editButton.itemID)
				editInput.value = `${elem.name} ${elem.surname}`;
				listElem.innerHTML = '';
				listElem.append(editInput);

				editButton.addEventListener('change', (e) => {
					console.log(e.target.value);

				});
			});

			

		}
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



