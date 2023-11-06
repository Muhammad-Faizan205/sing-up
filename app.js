
const firebaseConfig = {
  apiKey: "AIzaSyD_qPdgfqmkKJ-l54IoUCM_1XTWd8AaiyE",
  authDomain: "sing-up-c2e1e.firebaseapp.com",
  projectId: "sing-up-c2e1e",
  storageBucket: "sing-up-c2e1e.appspot.com",
  messagingSenderId: "360645092094",
  appId: "1:360645092094:web:37d8aa29e938ccb3ce7baf"
};

// Initialize Firebase
const firebase = firebase.initializeApp(firebaseConfig);

// console.log(app);

function getvalue()
{
    var email = document.getElementById("email");
    var pass = document.getElementById("password");
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    console.log(user);
    window.location.href  = 'dashboard.html'
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage);
  });
}