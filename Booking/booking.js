const roundTripRadio = document.getElementById("roundTrip");
const oneWayRadio = document.getElementById("oneWay");
const multiCityRadio = document.getElementById("multiCity");
const fromInput = document.getElementById("from");
const toInput = document.getElementById("to");
const checkInInput = document.getElementById("checkIn");
const checkOutInput = document.getElementById("checkOut");
const travelClassInput = document.getElementById("travelClass");
const numAdultsInput = document.getElementById("adults");
const numChildrenInput = document.getElementById("children");
const submitButton = document.getElementById("submit-btn");

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  const roundTrip = roundTripRadio.value;
  const oneWay = oneWayRadio.value;
  const multiCity = multiCityRadio.value;
  const from = fromInput.value;
  const to = toInput.value;
  const checkIn = checkInInput.value;
  const checkOut = checkOutInput.value;
  const travelClass = travelClassInput.value;
  const numAdults = numAdultsInput.value;
  const numChildren = numChildrenInput.value;
  let tripType;
  if (roundTripRadio.checked) tripType = roundTrip;
  else if (oneWayRadio.checked) tripType = oneWay;
  else if (multiCityRadio.checked) tripType = multiCity;

  if (from === "") return alert("From cannot be empty");
  else if (to === "") return alert("Destination (flying to) cannot be empty");
  else if (checkIn === "") return alert("Check in time cannot be empty");
  else if (checkOut === "") return alert("Check out time cannot be empty");
  else if (travelClass === "") return alert("Travel class cannot be empty");
  else if (numAdults === "") return alert("Number of adults cannot be empty");
  else if (!tripType) return alert("Please choose flight type");

  const bookingInformation = {
    from,
    to,
    checkIn,
    checkOut,
    travelClass,
    numAdults,
    tripType,
  };

  if (numChildren > 0) {
    bookingInformation.numChildren = numChildren;
  }

  console.log(bookingInformation);
});
