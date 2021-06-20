'use strict';

const form = document.forms[0];
let user = {};
let elementForDelete = null;
let arrayOfUsers = [
  {
    name: 'Rudy',
    surname: 'Feller',
    age: 42,
    itemID: 101
  },
  {
    name: 'Tomash',
    surname: 'Baltushinsky',
    age: 32,
    itemID: 102
  },
  {
    name: 'Ivan',
    surname: 'Petrov',
    age: 22,
    itemID: 103
  },
  {
    name: 'Klauss',
    surname: 'Zigsteiner',
    age: 52,
    itemID: 104
  },
  {
    name: 'Franz',
    surname: 'Polacher',
    age: 52,
    itemID: 105
  },
];

userName.addEventListener('change', (event) => {
  user.name = event.target.value;
});

userSurname.addEventListener('change', (event) => {
  user.surname = event.target.value;
});

userAge.addEventListener('change', (event) => {
  user.age = event.target.value;
});

isStudent.addEventListener('change', (event) => {
  user.isStudent = event.target.checked;
});

const radioButtonCollection = document.getElementsByName('radioSection');

radioButtonCollection.forEach(elem => {
  elem.addEventListener('change', (event) => {
    user.textColor = event.target.value;
  })
});

creationButton.addEventListener('click', (event) => {
  event.preventDefault();
  arrayOfUsers.push(user);

  renderList();
  user = {};
  form.reset();
});

searchInput.addEventListener('input', (event) => {
  const filteredItems = arrayOfUsers.filter(item => {
    if (item.surname.toLowerCase().includes(event.target.value.toLowerCase())) return true;
    return false
  });

  renderList(filteredItems);
});

const deletePopup = document.createElement('div');
deletePopup.innerText = 'Are you sure?';
deletePopup.classList.add('delete-popup');

const approveButton = document.createElement('button');
approveButton.innerText = 'Of course!';

const declineButton = document.createElement('button');
declineButton.innerText = 'No way';
deletePopup.append(approveButton, declineButton);

declineButton.addEventListener('click', () => {
  deletePopup.remove();
});

approveButton.addEventListener('click', () => {
  const filteredModel = arrayOfUsers.filter((item) => {
    return item.itemID != elementForDelete ? true : false;
  });
  arrayOfUsers = filteredModel;
  deletePopup.remove();
  elementForDelete = null;
  renderList();
});

const renderList = (model = arrayOfUsers) => {
  list.innerHTML = '';

  model.forEach((item) => {
    const listElem = document.createElement('li');
    listElem.innerText = `${item.name} ${item.surname} age: ${item.age}`;

    const deleteButton = document.createElement('button');
    deleteButton.itemID = item.itemID;
    deleteButton.innerText = 'X';

    listElem.append(deleteButton);
    list.append(listElem);

    deleteButton.onclick = (event) => {
      event.preventDefault();
      elementForDelete = deleteButton.itemID;
      document.body.append(deletePopup);
    };

    const editButton = document.createElement('button');
    editButton.itemID = item.itemID;
    editButton.innerText = 'edit';
    listElem.append(editButton);

    editButton.addEventListener('click', (event) => {
      const editInput = document.createElement('input');
      editInput.type = 'text';
      const elem = arrayOfUsers.find((item) => item.itemID === editButton.itemID);
      editInput.value = `${elem.name} ${elem.surname}`;
      listElem.innerHTML = '';
      listElem.append(editInput);
      listElem.append(deleteButton);

      editInput.addEventListener('change', (event) => {
        const [name, surname] = event.target.value.split(' ');
        elem.name = name;
        elem.surname = surname;
        listElem.innerHTML = `${elem.name} ${elem.surname} ${elem.age}`;
        listElem.append(deleteButton);
        listElem.append(editButton);
      })
    });
  });
};

sortByAgeInput.addEventListener('change', (event) => {
  if (searchInput.value) {
    const filteredItems = arrayOfUsers.filter(item => {
      if (item.surname.toLowerCase().includes(searchInput.value.toLowerCase())) return true;
      return false;
    });
    const sortedItems = [...filteredItems].sort((a, b) => a.age - b.age);
    renderList(sortedItems);
  } else {
    if (event.target.checked) {
      const sortedItems = [...arrayOfUsers].sort((a, b) => a.age - b.age);
      renderList(sortedItems);
    } else {
      renderList();
    }
  }
});

if (arrayOfUsers.length) {
  renderList();
};
