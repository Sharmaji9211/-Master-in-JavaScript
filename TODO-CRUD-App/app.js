const addBtn = document.getElementById('add'); // Grabs the "Add" button element by its ID
const myUL = document.querySelector('.routine'); // Selects the element with class 'routine' (likely a <ul> for the tasks list)

function creteListItems() {
    const litag = document.createElement('li'); // Creates a new <li> element for the task
    const para = document.createElement('p'); // Creates a new <p> element for task description
    const del = document.createElement('button'); // Creates a "Delete" button
    del.className = 'delete'; // Assigns 'delete' class to the "Delete" button
    const up = document.createElement('button'); // Creates an "Update" button
    up.className = 'update'; // Assigns 'update' class to the "Update" button
    let inputFormData = document.getElementById('tasks'); // Gets the input field with ID 'tasks' for the task data
    let text = inputFormData.value; // Grabs the value entered in the input field (task text)

    if (text != "") { // Checks if the input field is not empty
        para.textContent = text; // Sets the text of the paragraph to the task value
        up.innerText = "Update"; // Sets the text of the "Update" button
        del.innerText = "Delete"; // Sets the text of the "Delete" button
        myUL.appendChild(litag); // Appends the new <li> element (task) to the <ul> (task list)
        litag.appendChild(para); // Appends the paragraph (task text) to the <li> element
        litag.insertAdjacentElement('beforeend', up); // Inserts the "Update" button at the end of the <li> element
        litag.insertAdjacentElement('beforeend', del); // Inserts the "Delete" button at the end of the <li> element
    } else {
        alert("Please enter your task to do"); // Alerts the user if they try to add an empty task
    }

    // Delete button functionality
    const deleted = del.onclick = () => {
        alert("Are you Sure"); // Prompts the user for confirmation when "Delete" is clicked
        litag.remove(); // Removes the entire task <li> element from the list

        // Creates a new <li> element showing "Task Completed" in green
        const lita = document.createElement('li');
        const par = document.createElement('p');
        let text = "Task Completed"; // Sets the text for task completion
        par.innerText = text; // Sets the paragraph content to "Task Completed"
        par.style.color = "green"; // Styles the text color as green
        myUL.appendChild(lita); // Adds the completion message to the <ul>
        lita.appendChild(par); // Appends the paragraph to the new <li> element
    }

    // Update button functionality
    const updated = up.onclick = () => {
        alert("Are you Sure Update details"); // Prompts the user for confirmation to update the task
        para.remove(); // Removes the current paragraph (task text) for editing
        const updateI = document.createElement('input'); // Creates a new input field for the updated value
        updateI.className = "tasks"; // Adds a class 'tasks' to the new input field
        updateI.placeholder = "Update the value"; // Sets a placeholder for the input field
        litag.insertAdjacentElement('afterbegin', updateI); // Inserts the input field at the beginning of the <li>
        up.remove(); // Removes the old "Update" button

        // Creates a "Save" button for saving the updated value
        const save = document.createElement('button');
        save.className = 'update'; // Adds a class 'update' to the "Save" button
        save.innerText = "Save"; // Sets the text of the button to "Save"
        save.style.color = "black"; // Styles the button's text color to black
        litag.insertAdjacentElement('beforeend', save); // Inserts the "Save" button at the end of the <li>

        // Save button functionality
        save.onclick = () => {
            alert("save"); // Alerts that the task is being saved
            const upara = document.createElement('p'); // Creates a new paragraph for the updated task text
            upara.textContent = updateI.value; // Sets the updated text from the input field
            litag.insertAdjacentElement('afterbegin', upara); // Inserts the updated text at the beginning of the <li>
            updateI.remove(); // Removes the input field after saving
            save.remove(); // Removes the "Save" button after saving

            // Recreates the "Update" button after saving the changes
            const up = document.createElement('button');
            up.className = 'update'; // Adds the 'update' class to the new "Update" button
            up.innerText = "Update"; // Sets the text of the button to "Update"
            
            // Insert the "Update" button before the "Delete" button
            litag.insertAdjacentElement('beforeend', up); // Inserts the "Update" button at the end of the <li>
            litag.insertAdjacentElement('beforeend', del); // Ensures the "Delete" button comes after "Update"

            // Update button functionality again (recursive update)
            up.onclick = () => {
                updated(); // Re-runs the update process (recursive call)
                up.remove(); // Removes the "Update" button after it is clicked
                upara.remove(); // Removes the updated paragraph (prepares for new input)
            }
        }
    }
}

addBtn.addEventListener('click', () => {
    creteListItems(); // Calls the function to create and add list items when "Add" button is clicked
});


co