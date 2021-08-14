

var firebaseConfig = { 
  apiKey: "AIzaSyAay0NZPMP2U_7pDtuH42ML3RT7JSJfA1Q", 
  authDomain: "vivid-60cd9.firebaseapp.com", 
  databaseURL: "https://vivid-60cd9-default-rtdb.firebaseio.com", 
  projectId: "vivid-60cd9", 
  storageBucket: "vivid-60cd9.appspot.com", 
  messagingSenderId: "67054601578", 
  appId: "1:67054601578:web:0f29e35d2128bcad701113", 
  measurementId: "G-3606HD83EG"
};
firebase.initializeApp(firebaseConfig);

username=localStorage.getItem("username");
roomname=localStorage.getItem("room_name");

function send(){
  msg=document.getElementById("msg").value; 
  firebase.database().ref(roomname).push({
      name:username,
      message:msg,
      like:0
  });

  document.getElementById("msg").value="";
}
 
function getData() {
  firebase.database().ref("/"+ roomname).on('value', function(snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function(childSnapshot) {
      childKey  = childSnapshot.key;
      childData = childSnapshot.val();
      if (childKey !="purpose"){
        firebase_message_id = childKey;
        message_data = childData;
      }

  name12=message_data['name'];
  message=message_data['message'];
  like=message_data['like'];
  
   name_width_tag="<h4>"+name12+"<img src+'tick.png' class='user_tick'></h4>";
   message_width_tag="<h4 class='message_h4'>"+message+"</h4>";
   like_button="<button class='btn btn-warning' id="+firebase_message_id+"value="+like+"onclick='updatelike(this.id)'>";
   span_width_tag="<span class='glyphicon glyphicon-thumbs-up'>like: "+like+"</span></button><hr>";
  row=name_width_tag+message_width_tag+like_button+span_width_tag;
  document.getElementById("output").innerHTML +=row;
  //End code
  });});}
getData();


function logout(){
    window.location="index.html";
    localStorage.removeItem("username");
    localStorage.removeItem("room_name");

  }



