const monthEl = document.getElementById("month");
const dayEl = document.getElementById("day");
const dateEl = document.getElementById("date");
const yearEl = document.getElementById("year");


const date = new Date();
const month = date.getMonth();
monthEl.innerText = date.toLocalString("en", {
    month: "long",
});

dayEl.innerText = date.toLocalString("en", {
    weekday: "long",
});

dayEl.innerText = date.getDate();

yearEl.innerText = date.getFullYear();