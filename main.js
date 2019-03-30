 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDcCa0uDtEHEsNEVQAqac7JAa8ubmdx4O8",
    authDomain: "project-83512.firebaseapp.com",
    databaseURL: "https://project-83512.firebaseio.com",
    projectId: "project-83512",
    storageBucket: "",
    messagingSenderId: "403799166839"
  };
  firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var last = getInputVal('last');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, last, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, last, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    last:last,
    email:email,
    phone:phone,
    message:message
  });
}