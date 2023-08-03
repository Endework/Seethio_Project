const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const emailAddressInput = document.getElementById("email");
const phoneNumberInput = document.getElementById("phoneNumber");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const submitButton = document.getElementById("submit-btn");

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  const firstName = firstNameInput.value;
  const lastName = lastNameInput.value;
  const email = emailAddressInput.value;
  const phoneNumber = phoneNumberInput.value;
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  if (firstName === "") return alert("First name cannot be empty");
  else if (lastName === "") return alert("Last name cannot be empty");
  else if (email === "") return alert("email cannot be empty");
  else if (phoneNumber === "") return alert("Phone number cannot be empty");
  else if (password === "") return alert("Password cannot be empty");
  else if (confirmPassword === "") return alert("Please confirm your password");
  else if (confirmPassword !== password)
    return alert("Password and confirm password must match");

  const userData = {
    firstName,
    lastName,
    email,
    phoneNumber,
    password,
  };

  console.log(userData);
});
