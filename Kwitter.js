const firebaseConfig = {
    apiKey: "AIzaSyCsLV6qzp4QM0i0Qcig-QcVO-pm3aYUJ1s",
    authDomain: "c90-test.firebaseapp.com",
    databaseURL: "https://c90-test-default-rtdb.firebaseio.com",
    projectId: "c90-test",
    storageBucket: "c90-test.appspot.com",
    messagingSenderId: "929412028378",
    appId: "1:929412028378:web:f7a8af801f64ea99ef12e3"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

function addRoom() 
{
 room_name = document.getElementById("room_name").value;

 firebase.database().ref("/").child(room_name).update({
       purpose : "adding room name"
 });

 localStorage.setItem("room_name", room_name);

 window.location = "kwitter_page.html";
}

function addUser()
{
    user_name = document.getElementById("user_name").value;

    localStorage.setItem("user_name", user_name);

    window.location = "Kwitter_room.html"
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
//Start code
 console.log("Room Name - " + Room_names);
 row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
 document.getElementById("output").innerHTML += row;
 //End code
 });});}
getData();

function redirectToRoomName(name)
{
 console.log(name);
 localStorage.setItem("room_name", name);
       window.location = "kwitter_page.html";
}