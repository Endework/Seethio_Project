// elements select
const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const emailAddressInput = document.getElementById("email");
const phoneNumberInput = document.getElementById("phoneNumber");
const generalRadio = document.getElementById("general");
const adventureRadio = document.getElementById("adventure");
const pricingRadio = document.getElementById("pricing");
const complementComplainRadio = document.getElementById("complementComplain");
const messageInput = document.getElementById("message");
const submitButton = document.getElementById("submit-btn");

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  const firstName = firstNameInput.value;
  const lastName = lastNameInput.value;
  const emailAddress = emailAddressInput.value;
  const phoneNumber = phoneNumberInput.value;
  const message = messageInput.value;
  let subject;
  if (generalRadio.checked) {
    subject = generalRadio.value;
  } else if (adventureRadio.checked) {
    subject = adventureRadio.value;
  } else if (pricingRadio.checked) {
    subject = pricingRadio.value;
  } else if (complementComplainRadio.checked) {
    subject = complementComplainRadio.value;
  }

  if (firstName === "") {
    alert("Please provide your first name");
    return;
  }
  if (lastName === "") {
    alert("Please provide a last name");
    return;
  }
  if (emailAddress === "") {
    alert("Please provide an email address");
    return;
  }
  if (phoneNumber === "") {
    alert("Please provide a phone number");
    return;
  }
  if (message === "") {
    alert("Please provide a message");
    return;
  }
  if (!subject) {
    alert("Please provide a subject");
    return;
  }
  const data = {
    firstName,
    lastName,
    emailAddress,
    phoneNumber,
    message,
    subject,
  };

  // collected the data, it can be submitted to the backend
  console.log(data);
});
