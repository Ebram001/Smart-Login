const userNemailInput = document.getElementById("userNewEmail")
const userNameInput = document.getElementById("userName")
const userNpassInput = document.getElementById("userNewPass")
const userEmailInput = document.getElementById("userEmail")
const userPassInput = document.getElementById("userPass")
let namePattern = /^[A-Z][a-z]{2,7}$/
let emailPattern = /@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
let passPattern = /^[0-9]{4,}[A-Za-z]{3,}$/
  var userData = []
  function addData() {
    if (!namePattern.test(userNameInput.value)) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Name should start with an uppercase letter, followed by 2 to 7 lowercase letters.',
      })
      return;
    }
    if (!emailPattern.test(userNemailInput.value)) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please enter a valid email.',
      })
      return;
    }
    if (!passPattern.test(userNpassInput.value)) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Password must start with four or more digits followed by three or more uppercase or lowercase letters.',
      })
      return;
    }
    const data ={
      name: userNameInput.value,
      email: userNemailInput.value,
      password: userNpassInput.value
    }
    Swal.fire({
      icon: 'success',
      title: 'Great!',
      text: 'Now sign in to enjoy your time Ebra',
    })
    
    userData.push(data)
    const userDataString = JSON.stringify(userData);
    localStorage.setItem("userData", userDataString) 
  }

function getDataFromLocalStorage() {
  const userDataString = localStorage.getItem("userData");
  if (userDataString) {
    userData = JSON.parse(userDataString);
  } else {
    userData = [];
  }
}
getDataFromLocalStorage();

function logIn() {
  for (let i = 0; i < userData.length; i++) {
    if (userEmailInput.value === userData[i].email && userPassInput.value === userData[i].password) {
      location.href = "welcome.html";
    }
  }

  Swal.fire({
    icon: 'error',
    title: 'Oops!',
    text: 'Invalid email or password or you might need to sign up first!',
  });
}


