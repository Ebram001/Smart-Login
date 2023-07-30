function getDataFromLocalStorage() {
    const userDataString = localStorage.getItem("userData");
    if (userDataString) {
      userData = JSON.parse(userDataString);
    } else {
      userData = [];
    }
  }
  getDataFromLocalStorage();
  console.log(userData);
  
  for (let i = 0; i < userData.length; i++) {
    var newMessage = `Welcome ${userData[i].name}`;
    var welcomeHeading = document.getElementById("welcome");
    welcomeHeading.innerHTML = newMessage;
    
  }