let input = document.querySelector('.input');
let addBtn = document.querySelector('.add-btn');
let taskList = document.querySelector('.task-here');
addBtn.addEventListener('click',()=>{
  if(input.value == '') {
    alert('Enter Something...');
  }
  else {
    let ListItem = document.createElement('li');

    // left side 

    let tasks = document.createElement('div');
    tasks.className = 'tasks';

    let image = document.createElement('img');
    image.className = 'uncheck-img';
    image.src = './Images/unchecked.png';
    image.addEventListener('click',()=>{
      if(image.src.includes('unchecked.png')) {
        image.src = './Images/checked.png';
      }
      else {
        image.src = './Images/unchecked.png';
      }
    });

    let inp = document.createElement('input');
    inp.className = 'value-here';
    inp.value = input.value ;
    inp.setAttribute('readonly','');

    // right side
    
    let buttons = document.createElement('div');
    buttons.className = 'buttons'

    let editBtn = document.createElement('button');
    editBtn.className = 'edit-btn';
    editBtn.innerText = 'Edit';
    editBtn.addEventListener('click',()=>{
      if(editBtn.innerText.includes('Edit')) {
        editBtn.innerText = 'Save';
        inp.removeAttribute('readonly');
      }
      else {
        editBtn.innerText = 'Edit';
        inp.setAttribute('readonly','');
      }
    });

    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.innerText = 'Delete';
    deleteBtn.addEventListener('click',()=>{
      ListItem.remove();
    });

    // Appending Elements

    taskList.append(ListItem);
    ListItem.append(tasks);
    tasks.append(image);
    tasks.append(inp);
    ListItem.append(buttons);
    buttons.append(editBtn);
    buttons.append(deleteBtn);
    input.value = '';
  }
});
