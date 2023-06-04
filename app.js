console.log("Hello world");
const btn = document.getElementById("button1");
btn.addEventListener("click", function (e) {
  console.log(e);
  alert("welcome");
});

const form= document.getElementById("email-form");
form.addEventListener("submit", function(e){
  
  const formData = new FormData(form);
  const email = formData.get("email");
  console.log("email", email);

})

function changeColor(){
  var divElement = document.getElementById('myBody');
  divElement.style.backgroundColor = 'red';
}