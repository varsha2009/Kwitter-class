var firebaseConfig = {
      apiKey: "AIzaSyCnKLi96cqQxnw1zcKOP8cr28cnOFM8Uqc",
      authDomain: "kwitter-dea56.firebaseapp.com",
      projectId: "kwitter-dea56",
      storageBucket: "kwitter-dea56.appspot.com",
      messagingSenderId: "919927810613",
      appId: "1:919927810613:web:2e5ec3407e897c48ab1f7c",
      databaseURL: "https://kwitter-dea56-default-rtdb.firebaseio.com"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey =
childSnapshot.key;
 Room_names = childKey;
 //Start code
 console.log(Room_names);
      var row = "<div id='"+Room_names+"' class='room_name' onclick='redirectToRoomname(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
 //End code
 });});}
getData();

var get_name = localStorage.getItem("login_name");
document.getElementById("user_name").innerHTML = "Welcome " + get_name;

function add_user(){
      console.log("inside add room")
      var room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "add room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location = "kwitter_page.html";
}
function redirectToRoomname(name){
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}