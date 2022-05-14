const bookingModal = document.querySelector(".booking_modal");
const bookButton = document.querySelector(".book_button");
const cancelButton = document.querySelector("#cancel");
const confirmButton = document.querySelector(".confirm_button");

const recentBookings = JSON.parse(localStorage.getItem("recentBookings")) || [];

const bookingForm = document.querySelector(".booking_form");

const showBookingModal = () => (bookingModal.style.cssText = "display:block;");

const hideBookingModal = () => (bookingModal.style.cssText = "display:none;");

bookButton.addEventListener("click", showBookingModal);

cancelButton.addEventListener("click", hideBookingModal);

confirmButton.addEventListener("click", (evt) => {
  evt.preventDefault();

  const formdata = new FormData(bookingForm);
  const emailAdd = formdata.get("email");
  const phoneNumber = formdata.get("phone");
  const travelDate = formdata.get("date");
  const toDestination = formdata.get("destination-to");
  const fromDestination = formdata.get("destination-from");
  const numberOfSeats = formdata.get("seats");

  recentBookings.push({
    email: emailAdd,
    phone: phoneNumber,
    date: travelDate,
    to: toDestination,
    from: fromDestination,
    seats: numberOfSeats,
  });

  localStorage.setItem("recentBookings", JSON.stringify(recentBookings));

  window.location.reload();
});

console.log(recentBookings);

if (recentBookings?.length === 0)
  document.querySelector("#my-bookings").style.cssText = "display:none;";

document.querySelector("#travel-to").textContent = recentBookings[0]?.to;
document.querySelector("#travel-from").textContent = recentBookings[0]?.from;
document.querySelector("#travel_date").textContent = recentBookings[0]?.date;
