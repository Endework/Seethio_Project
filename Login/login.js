const emailAddressInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const submitButton = document.getElementById("submit-btn");

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  const email = emailAddressInput.value;
  const password = passwordInput.value;

  if (email === "") return alert("Login failed! Email address not provided.");
  else if (password === "") return alert("Login failed! Password not provided.");

  const loginData = {
    email,
    password,
  };

  console.log(loginData);
});
