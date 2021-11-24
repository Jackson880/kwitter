var firebaseConfig = {
    apiKey: "AIzaSyBAgf6ezVVaq1UEZrZlKLKoZ03lwgOxMhQ",
    authDomain: "jacksonkwitter-514bc.firebaseapp.com",
    databaseURL: "https://jacksonkwitter-514bc-default-rtdb.firebaseio.com",
    projectId: "jacksonkwitter-514bc",
    storageBucket: "jacksonkwitter-514bc.appspot.com",
    messagingSenderId: "315554058311",
    appId: "1:315554058311:web:2a4a355e8a7baa9e2fa162"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser() {

    user_name = document.getElementById("user_name").value;

    localStorage.setItem("user_name", user_name);

    window.location = "kwitter_room.html"
}