//check valid time period with same timezone
//same timezone
const openTime = new Date("2025-11-19T12:00:00");
const closeTime = new Date("2025-11-20T12:00:00");

const myBookingTime = new Date("2025-11-19T11:59:59");

const result = document.getElementById("result");

if (myBookingTime >= openTime && myBookingTime <= closeTime) {
  result.innerText = `valid booking time, myBookingTime:  <span>${myBookingTime}</span> - openTime: <span>${openTime}</span>`;
} else {
  result.innerText = `invalid booking time, myBookingTime: <span>${myBookingTime}</span> - openTime: <span>${openTime}</span>`;
}
