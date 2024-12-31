const add = document.getElementById('Add');
const taskcontainer = document.querySelector('.taskcontainer');
let inputtext = document.getElementById('inputtext');


let createTaskElement = function(text) {
    let litag = document.createElement('li');
    litag.id = "li";
    let para = document.createElement('p');
    para.id = "para";
    let del = document.createElement('button');
    del.id = "delete";
    del.innerText = 'Delete';
    let up = document.createElement('button');
    up.id = "update";
    up.innerText = 'Update';

    para.textContent = text;
    litag.appendChild(para);
    litag.appendChild(del);
    litag.appendChild(up);
    taskcontainer.appendChild(litag);

    del.addEventListener('click', () => {
        alert("Are you Sure ");
        taskcontainer.removeChild(litag);
        
    });


    up.addEventListener('click', () => {
        let newText = prompt('Update task:', para.textContent);
        if (newText) {
            para.textContent = newText;
        }
        alert("Updated");
    });
};


add.addEventListener('click', () => {
    let text = inputtext.value.trim(); 

    if (text !== "") {
        createTaskElement(text); 
        alert("Added");
        inputtext.value = ''; 
    } else {
        alert("Please Enter Task");
    }
});
