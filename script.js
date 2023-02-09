const form = document.getElementById("purchase-form");
const rewardsEl = document.getElementById("rewards");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  const amount = parseInt(event.target.elements.amountInput.value, 10);
  let rewards = "";
  if (amount >= 100) {
    rewards += "You will receive a 10% discount on your next purchase.";
  }
  if (amount >= 500) {
    rewards += " You will also receive a free gift.";
  }
  rewardsEl.textContent = rewards;
});
