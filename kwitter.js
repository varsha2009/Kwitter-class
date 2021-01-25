
function next_page(){
    var UserName = document.getElementById("user_name").value;
    localStorage.setItem("login_name",UserName);
    window.location = "kwitter_room.html";
}