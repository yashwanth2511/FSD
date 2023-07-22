// document.addEventListener('DOMContentLoaded', function() {
//     function addTask() {
//       const inputBox = document.getElementById('input-text');
//       const listContainer = document.getElementById('list-body');
  
//       if (inputBox.value === '') {
//         alert('You must write something');
//       } else {
//         const li = document.createElement('li');
//         li.classList.add('task');
//         li.innerHTML = `<span>${inputBox.value}</span>
//                         <button class="edit">edit</button>
//                         <button class="delete">delete</button>`;
//         listContainer.appendChild(li);
//         inputBox.value = '';
//       }
//     }
  
//     const deleteButtons = document.querySelectorAll('.delete');
  
//     deleteButtons.forEach(button => {
//       button.addEventListener('click', function() {
//         const parentLi = this.parentElement;
//         parentLi.remove();
//       });
//     });
//   });

document.addEventListener("DOMContentLoaded",function(){
const addButton=document.querySelectorAll('#add-button');
const deleteButton=document.querySelectorAll('.delete');
const editButton=document.querySelectorAll('.edit');

addButton.addEventListener('click',function(){
    const inputBox = document.getElementById('input-text');
    const listContainer = document.getElementById('list-body');

    if (inputBox.value === '') {
                alert('You must write something');
              } else {
                const li = document.createElement('LI');
                li.classList.add('task');
                li.innerHTML = `<span>${inputBox.value}</span>
                                <button class="edit">edit</button>
                                <button class="delete">delete</button>`;
                listContainer.appendChild(li);
                inputBox.value = '';
    }

    


});

deleteButton.addEventListener("click",function(){

});

});
