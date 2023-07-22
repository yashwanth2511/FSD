// const inputText=document.getElementById('input-text');
// const listBody=document.getElementById('list-body');

// function addTask(){
//     if(inputText.value===''){
//         alert("task should no be empty");
//     }else{
//         // let span=document.createElement("SPAN")
//         // span.innerHTML=inputText.value;
//         // var temp="<span>"+inputText.value+"</span>";
//         let li=document.createElement("LI");
//         li.classList.add("task");
//         // li.innerHTML=temp;
//         // listBody.appendChild(li);
//         // console.log(li);

//     const span = document.createElement("span");
//     span.textContent = inputText.value;
//     li.appendChild(span);

//     const editButton = document.createElement("button");
//     editButton.textContent = "Edit";
//     editButton.classList.add("edit");
//     li.appendChild(editButton);

//     const deleteButton = document.createElement("button");
//     deleteButton.textContent = "Delete";
//     deleteButton.classList.add("delete");
//     li.appendChild(deleteButton);

//     listBody.appendChild(li);

//     }
//     inputText.value="";
// }


// function deleteTask(e) {
//     if (e.target.classList.contains('delete')) {
//       const parentLi = e.target.parentElement;
//       parentLi.remove();
//     }
// }

// listContainer.addEventListener('click', deleteTask);

// listBody.addEventListener("click",function(e){

// })



// const deleteButton=document.querySelectorAll(".delete");

// deleteButton.forEach(button => {
//     button.addEventListener("click",function(){
//         const parentLi=this.parentElement;
//         parentLi.remove();
//     });
// });
// const deleteButtons=document.querySelectorAll('.delete');

// deleteButtons.forEach(button=>{
//     button.addEventListener('click',function(){
//         const parentLi=this.parentElement;
//         parentLi.remove()
//     });
// });

// function deleteTask(e) {
//     if (e.target.classList.contains('delete')) {
//       const parentLi = e.target.parentElement;
//       parentLi.remove();
//     }
//   }


// // Select the delete buttons
// const deleteButtons = document.querySelectorAll('.delete');

// // Add event listener to each delete button
// deleteButtons.forEach(button => {
//   button.addEventListener('click', function() {
//     // Get the parent li element
//     const parentLi = this.parentElement;
//     // Remove the parent li element
//     parentLi.remove();
//   });
// });

// listContainer.addEventListener('click', deleteTask);


document.addEventListener('DOMContentLoaded', function() {
    function addTask() {
      const inputBox = document.getElementById('input-text');
      const listContainer = document.getElementById('list-body');
  
      if (inputBox.value === '') {
        alert('You must write something');
      } else {
        const li = document.createElement('li');
        li.classList.add('task');
        li.innerHTML = `<span>${inputBox.value}</span>
                        <button class="edit">edit</button>
                        <button class="delete">delete</button>`;
        listContainer.appendChild(li);
        inputBox.value = '';
  
        const deleteButton = li.querySelector('.delete');
        deleteButton.addEventListener('click', function() {
          li.remove();
        });
  
        const editButton = li.querySelector('.edit');
        editButton.addEventListener('click', function() {
          const span = li.querySelector('span');
          const text = span.innerText;
          const newText = prompt('Edit task:', text);
          if (newText !== null && newText.trim() !== '') {
            span.innerText = newText;
          }
        });

        li.addEventListener('click', function() {
          this.classList.toggle('checked');
        });

      }
    }
  
    const addButton = document.getElementById('add-button');
    addButton.addEventListener('click', addTask);
  
    // const deleteButtons = document.querySelectorAll('.delete');
    // deleteButtons.forEach(button => {
    //   button.addEventListener('click', function() {
    //     const parentLi = this.parentElement;
    //     parentLi.remove();
    //   });
    // });
  });
  