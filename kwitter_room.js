

 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyAXasngzF5LEwjyCzWhiGFdyRsVcIDT4BU",
  authDomain: "chat-app-project-part1.firebaseapp.com",
  databaseURL: "https://chat-app-project-part1.firebaseio.com",
  projectId: "chat-app-project-part1",
  storageBucket: "chat-app-project-part1.appspot.com",
  messagingSenderId: "661032681032",
  appId: "1:661032681032:web:9f473e451a28f9ac54e27d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
