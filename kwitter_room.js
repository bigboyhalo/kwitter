var firebaseConfig = { apiKey: "AIzaSyAay0NZPMP2U_7pDtuH42ML3RT7JSJfA1Q", authDomain: "vivid-60cd9.firebaseapp.com", databaseURL: "https://vivid-60cd9-default-rtdb.firebaseio.com", projectId: "vivid-60cd9", storageBucket: "vivid-60cd9.appspot.com", messagingSenderId: "67054601578", appId: "1:67054601578:web:0f29e35d2128bcad701113", measurementId: "G-3606HD83EG" };

// Initialize Firebase
 firebase.initializeApp(firebaseConfig);


    username=localStorage.getItem("username");
    document.getElementById("username").innerHTML="welcome "+username+"!"
    function addroom() {
       room_name = document.getElementById("roomname").value;
        firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });
         localStorage.setItem("room_name", room_name);
          window.location = "kwitter_page.html"; }

          function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;


            Room_names = childKey;
           //Start code
           row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
           document.getElementById("output").innerHTML += row;
           //End code
           });});}
      getData();

      function redirectToRoomName(name){
        localStorage.setItem("room_name",name)
        window.location = "kwitter_page.html";
        
      }
      function logout(){
        window.location="index.html";
        localStorage.removeItem("username")
        localStorage.removeItem("room_name")
      }
      