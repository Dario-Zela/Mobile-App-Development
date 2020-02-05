var Button = document.getElementById("Enter");
var userName = "user";
var userPassword = "pass";
var Logg = document.getElementById("Logg");

(function (){
  function Login() {
      var userNameInput = document.getElementById("username").value;
      var userPasswordInput = document.getElementById("password").value;
      Logg.innerHTML = userNameInput;
      if(userName == userNameInput && userPassword == userPasswordInput)
      {
        ons.notification.alert("Succesful");
      }
      else if(userName == userNameInput)
      {
        ons.notification.alert("Incorrect Password");
      }
      else
      {
        ons.notification.alert("Fail");
      }
  }

  function Init(){
    Button.addEventListener("click", Login);
  }
  Init();
})();