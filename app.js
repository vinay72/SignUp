(function() {
 <script src="https://www.gstatic.com/firebasejs/5.3.0/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBzi3fEWKu4UbQQ69bAT3P1kPiAZOGevFU",
    authDomain: "signup-f26d3.firebaseapp.com",
    databaseURL: "https://signup-f26d3.firebaseio.com",
    projectId: "signup-f26d3",
    storageBucket: "signup-f26d3.appspot.com",
    messagingSenderId: "517322477659"
  };
  firebase.initializeApp(config);
</script>

// Get Elements
const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');
const btnLogin = document.getElementById('btnLogin');
const btnSignUp = document.getElementById('btnSignUp');
const btnLogout = document.getElementById('btnLogout');


// Add Login Event
btnLogin.addEventListener('click', e=> {
	//Get email and pass
	const email = txtEmail.value;
	const pass = txtPassword.value;
	const auth = firebase.auth();
	// Sign In
	const promise = auth.signInWitEmailAndPassword(email,pass);
	promise.catch(e=> console.log(e.message));
});

// Add signup event
btnSignUp.addEventListener('click, e =>'{
	//Get email and pass
	const email = txtEmail.value;
	const pass = txtPassword.value;
	const auth = firebase.auth();
	// Sign In
	const promise = auth.signInWitEmailAndPassword(email,pass);
	promise
	.catch(e=> console.log(e.message));

});

btnLogout.addEventListener('click', e=> {
   firebase.auth().signOut();
});







// Add a realtime listener
firebase.auth().onAuthStateChanged(firebaseUser => {
	if(firebaseUser) {
		console.log(firebaseUser);
		btnLogout.classList.remove('hide');
	} else {
		console.log('not logged in');
		btnLogout.classList.add('hide');
	}
});




}());