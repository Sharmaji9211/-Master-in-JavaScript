
// --------------------Event Handling in the DOM

// Adding event listeners: addEventListener(): Attaches an event handler function to an element for a specific event.
// Removing event listeners: removeEventListener(): Removes an event handler that was previously added with addEventListener.
// Event object, event propagation (bubbling and capturing): The event object contains details about the event. Event propagation refers to the order in which events are handled (bubbling or capturing).
// Event delegation: A technique to handle events efficiently by assigning a single event handler to a parent element instead of multiple handlers.
// Common events: click, focus, blur, change, submit, etc.: Examples of frequently used DOM events that can be handled with JavaScript.

// ------------------- Working with Forms

// Accessing form elements: form.elements, form.submit(): Methods for accessing and submitting form data.
// Validating form input: Techniques for ensuring user input is valid before submitting a form.
// Handling form submissions with JavaScript: Methods for capturing and processing form data on the client side using JavaScript.



// 1. Adding Event Listeners (addEventListener)
// This example demonstrates adding a click event listener to a button element:

// <button id="myButton">Click Me</button>

// <script>
//   document.getElementById('myButton').addEventListener('click', function() {
//     alert('Button was clicked!');
//   });
// </script>
// 2. Removing Event Listeners (removeEventListener)
// Here, we add an event listener and then remove it after a certain condition is met:
// <button id="myButton">Click Me</button>
// <button id="removeButton">Remove Click Listener</button>

// <script>
//   function handleClick() {
//     alert('Button was clicked!');
//   }

//   const button = document.getElementById('myButton');
//   button.addEventListener('click', handleClick);

//   document.getElementById('removeButton').addEventListener('click', function() {
//     button.removeEventListener('click', handleClick);
//     alert('Click event listener removed!');
//   });
// </script>
// 3. Event Object, Event Propagation (Bubbling and Capturing)
// This example demonstrates event bubbling and capturing:
// <div id="parent" style="width: 300px; height: 300px; background-color: lightblue;">
//   Parent Element
//   <div id="child" style="width: 100px; height: 100px; background-color: lightcoral; margin-top: 50px;">
//     Child Element
//   </div>
// </div>

// <script>
//   // Capturing phase
//   document.getElementById('parent').addEventListener('click', function(event) {
//     alert('Parent clicked (Capturing phase)');
//   }, true);

//   // Bubbling phase
//   document.getElementById('child').addEventListener('click', function(event) {
//     alert('Child clicked (Bubbling phase)');
//   }, false);
// </script>
// 4. Event Delegation
// Event delegation allows attaching a single event listener to a parent element, which handles events for all child elements:
// <ul id="myList">
//   <li>Item 1</li>
//   <li>Item 2</li>
//   <li>Item 3</li>
// </ul>

// <script>
//   document.getElementById('myList').addEventListener('click', function(event) {
//     if (event.target.tagName === 'LI') {
//       alert('List item clicked: ' + event.target.textContent);
//     }
//   });
// </script>
// 5. Common Events (click, focus, blur, change, submit)
// This example covers multiple common events:
// <form id="myForm">
//   <input type="text" id="inputField" placeholder="Focus on me">
//   <input type="submit" value="Submit">
// </form>

// <script>
//   // Focus event
//   document.getElementById('inputField').addEventListener('focus', function() {
//     alert('Input field focused!');
//   });

//   // Blur event
//   document.getElementById('inputField').addEventListener('blur', function() {
//     alert('Input field lost focus!');
//   });

//   // Change event
//   document.getElementById('inputField').addEventListener('change', function() {
//     alert('Input value changed!');
//   });

//   // Submit event
//   document.getElementById('myForm').addEventListener('submit', function(event) {
//     event.preventDefault();  // Prevent the form from submitting
//     alert('Form submitted!');
//   });
// </script>
// 6. Accessing Form Elements
// <form id="myForm">
//   <input type="text" name="username" placeholder="Enter your username">
//   <input type="password" name="password" placeholder="Enter your password">
//   <button type="submit">Submit</button>
// </form>

// <script>
//   const form = document.getElementById('myForm');

//   form.addEventListener('submit', function(event) {
//     event.preventDefault();

//     // Accessing form elements
//     const username = form.elements['username'].value;
//     const password = form.elements['password'].value;

//     console.log('Username:', username);
//     console.log('Password:', password);
//   });
// </script>
// 7. Validating Form Input
// <form id="myForm">
//   <input type="text" name="email" placeholder="Enter your email" required>
//   <input type="submit" value="Submit">
// </form>

// <script>
//   document.getElementById('myForm').addEventListener('submit', function(event) {
//     const emailField = document.querySelector('[name="email"]');

//     if (!emailField.value.includes('@')) {
//       alert('Please enter a valid email address!');
//       event.preventDefault();
//     } else {
//       alert('Form submitted successfully!');
//     }
//   });
// </script>
// 8. Handling Form Submissions with JavaScript
// <form id="myForm">
//   <input type="text" name="name" placeholder="Enter your name">
//   <input type="submit" value="Submit">
// </form>

// <script>
//   document.getElementById('myForm').addEventListener('submit', function(event) {
//     event.preventDefault();

//     // Handling form data
//     const name = event.target.elements['name'].value;

//     // Process form data (for example, send it to the server)
//     console.log('Form submitted with name:', name);
//   });
// </script>


