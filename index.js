var mainText = document.getElementById("mainText");
var submitBtn = document.getElementById("submitBtn");

//var storage = firebase.storage("storage");

function submitClick() {

  var firebaseRef = firebase.database().ref();

  var messageText = mainText.value;

  window.alert("it worked... but since it's not plugged in, nothing was added... so fuckoff");

  //firebaseRef.child("test").child("test").set(messageText);

}

// document.getElementById("addPet").onclick = function() {

//     window.alert("more than one record?");

//     var myForm = document.getElementById("myForm");
//     var input = document.createElement("input");
//     input.type = "text";
//     var br = document.createElement("br");
//     myForm.appendChild(input);
//     myForm.appendChild(br);
// }


$(function() {
  $("#addPet").click(function() {
    $("#myForm").append($("#myForm .crateRecord:last-child").clone());
  });
});

// document.getElementById("addPet").onclick = function() {

//     window.alert("more than one record?");

//     var myForm = document.getElementById("myForm");
//     var input = document.createElement("input");
//     input.type = "text";
//     var br = document.createElement("br");
//     myForm.appendChild(input);
//     myForm.appendChild(br);
// }
