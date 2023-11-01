// indexed.html

function checkInput(inputField) {
  let passwordInput = document.getElementById("password");
  let icon = document.getElementById("password-icon");

  if (inputField.value.length > 0) {
    if (icon.className === "fa-solid fa-lock") {
      icon.classList.remove("fa-lock");
      icon.classList.add("fa-eye-slash");
    }
  } else {
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
    icon.classList.remove("fa-eye");
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-lock");
    passwordInput.type = "password";
  }
}

function togglePasswordVisibility() {
  let passwordInput = document.getElementById("password");
  let icon = document.getElementById("password-icon");

  if (icon.classList.contains("fa-lock")) {
    return;
  }

  if (
    passwordInput.type === "password" &&
    icon.classList.contains("fa-eye-slash")
  ) {
    passwordInput.type = "text";
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  } else {
    passwordInput.type = "password";
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  }

  if (
    icon.classList.contains("fa-eye") ||
    icon.classList.contains("fa-eye-slash")
  ) {
    icon.style.cursor = "pointer";
  } else {
    icon.style.cursor = "default";
  }
}

// indexed.html

// sign-up.html

// function checkInput(inputField) {
//   let passwordInput = document.getElementById("password");
//   let icon = document.getElementById("password-icon");

//   if (inputField.value.length > 0) {
//     if (icon.className === "fa-solid fa-lock") {
//       icon.classList.remove("fa-lock");
//       icon.classList.add("fa-eye-slash");
//     }
//   } else {
//     icon.classList.remove("fa-eye");
//     icon.classList.add("fa-eye-slash");
//     icon.classList.remove("fa-eye");
//     icon.classList.remove("fa-eye-slash");
//     icon.classList.add("fa-lock");
//     passwordInput.type = "password";
//   }
// }

// function togglePasswordVisibility() {
//   let passwordInput = document.getElementById("password");
//   let icon = document.getElementById("password-icon");

//   if (icon.classList.contains("fa-lock")) {
//     return;
//   }

//   if (
//     passwordInput.type === "password" &&
//     icon.classList.contains("fa-eye-slash")
//   ) {
//     passwordInput.type = "text";
//     icon.classList.remove("fa-eye-slash");
//     icon.classList.add("fa-eye");
//   } else {
//     passwordInput.type = "password";
//     icon.classList.remove("fa-eye");
//     icon.classList.add("fa-eye-slash");
//   }

//   if (
//     icon.classList.contains("fa-eye") ||
//     icon.classList.contains("fa-eye-slash")
//   ) {
//     icon.style.cursor = "pointer";
//   } else {
//     icon.style.cursor = "default";
//   }
// }
// // sign-up.html

function validateForm() {
  const username = document.getElementById("fullname").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const usernameRegex = /^[a-zA-Z]+$/;
  const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  const passwordRegex = /^.{8,}$/;

  if (username == "" || email == "" || password == "") {
    alert("Please fill all the details");
    return false;
  }

  if (!username.match(usernameRegex)) {
    alert("Invalid username. Username must contain only letters.");
    return false;
  }

  if (!email.match(emailRegex)) {
    alert("Invalid email. Please enter a valid email address.");
    return false;
  }

  if (!password.match(passwordRegex)) {
    alert("Invalid password. Password must be at least 8 characters long.");
    return false;
  }

  return true;
}
