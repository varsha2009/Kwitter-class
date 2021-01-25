//YOUR FIREBASE LINKS
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
    user_name = localStorage.getItem("login_name");
    room_name = localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code]
console.log(firebase_message_id);
console.log(message_data);
var name = message_data['user_name'];
var message = message_data['message'];
var like = message_data['like'];
var n = "<h4>"+name+"<img src='tick.png' class='user_tick'></h4>";
var m = "<h4 class='message_h4'>"+message+"</h4>";
var l = "<button value="+like+" id='"+firebase_message_id+"' class='btn btn-warning' onclick='update_like(this.id)'><span class='glyphicon glyphicon-thumbs-up'></span>like : "+like+"</button><hr>";
var row = n+m+l;
document.getElementById("output").innerHTML += row;

//End code
      } });  }); }
getData();

function send1(){
      console.log(user_name);
      console.log(room_name);
      var msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            user_name : user_name,
            message : msg,
            like : 0
      });
     document.getElementById("msg").innerHTML = "";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
function update_like(message_id){
      var button_id = message_id;
      var likes = document.getElementById(button_id).value;
      var update_likes = Number(likes) + 1;
      firebase.database().ref(room_name).child(button_id).update({
            like : update_likes 
      });
}

function back(){
      window.location = 'kwitter_room.html';
}