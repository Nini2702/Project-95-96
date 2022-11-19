const firebaseConfig = {
    apiKey: "AIzaSyDKjsOOV7BW4TugWnxpPtJsbdkfWTkbpfg",
    authDomain: "project-94-60788.firebaseapp.com",
    databaseURL: "https://project-94-60788-default-rtdb.firebaseio.com",
    projectId: "project-94-60788",
    storageBucket: "project-94-60788.appspot.com",
    messagingSenderId: "769849771303",
    appId: "1:769849771303:web:702ee546b0f3d286101502"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
  console.log(user_name);
document.getElementById("name1").innerHTML = "Welcome " + user_name + "!";

function add_room(){
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });
  localStorage.setItem("room_name",room_name);
  window.location = "chat_page.html";
}
function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("room name-" + Room_names);
row = "<div class='room_name' id='" + Room_names + "' onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div> <hr>";
document.getElementById("output").innerHTML += row;
//End code
});});}
getData();
function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "chat_page.html";
}
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";  
}