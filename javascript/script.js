let countHomeEl = document.getElementById('count-home-el');
let countGuestEl = document.getElementById('count-guest-el');
let oneHomeEl = document.getElementById('one-home-el');
let twoHomeEl = document.getElementById('two-home-el');
let threeHomeEl = document.getElementById('three-home-el');
let homeScore = 0;
let guestScore = 0;
countHomeEl.textContent = homeScore;
countGuestEl.textContent = guestScore;
countHomeEl.onclick = () => {
  homeScore -= 1;
  countHomeEl.textContent = homeScore;
};
oneHomeEl.onclick = () => {
  homeScore += 1;
  countHomeEl.textContent = homeScore;
};
twoHomeEl.onclick = () => {
  homeScore += 2;
  countHomeEl.textContent = homeScore;
};
threeHomeEl.onclick = () => {
  homeScore += 3;
  countHomeEl.textContent = homeScore;
};
function decrementGuest() {
  guestScore -= 1;
  countGuestEl.textContent = guestScore;
}
function oneGuestEl() {
  guestScore += 1;
  countGuestEl.textContent = guestScore;
}
function twoGuestEl() {
  guestScore += 2;
  countGuestEl.textContent = guestScore;
}
function threeGuestEl() {
  guestScore += 3;
  countGuestEl.textContent = guestScore;
}
