document.addEventListener("DOMContentLoaded", () => {
  const priceText = document.getElementById("price");
  const priceTextMobile = document.getElementById("price-mobile");
  const slider = document.getElementById("slider");
  const discountText = document.getElementById("discount");
  const viewsText = document.getElementById("views");
  const checkbox = document.getElementById("checkbox");
  const per = document.getElementById("per");

  const basePrice = 16; // Base price for 100K pageviews
  const baseViews = 100; // Base views in K
  const maxPrice = 30; // Max price in dollars
  let multiplayer = 1;

  function updatePrice() {
    let price = (slider.value / slider.max) * maxPrice;
    if (price > maxPrice) price = maxPrice;
    price = price.toFixed(2);
    priceText.textContent = `$${price * multiplayer}`;
    priceTextMobile.textContent = priceText.textContent;
  }

  function changeDiscountText() {
    if (window.innerWidth < 450) {
      discountText.textContent = "-25%";
    } else {
      discountText.textContent = "25% discount";
    }
  }

  function updateTraker() {
    const progress = (slider.value / slider.max) * 100;
    slider.style.background = `linear-gradient(to right, hsl(174, 77%, 80%) ${progress}%, hsl(224, 65%, 95%) ${progress}%)`;
  }

  function updateViews() {
    let views =
      (baseViews / basePrice) * (slider.value / slider.max) * maxPrice;
    viewsText.textContent = `${Math.round(views) * multiplayer}K PAGEVIEWS`;
  }

  slider.addEventListener("input", () => {
    updatePrice();
    updateTraker();
    updateViews();
  });

  checkbox.addEventListener("change", (event) => {
    if (event.target.checked) {
      multiplayer = 10;
      per.textContent = "/year";
    } else {
      multiplayer = 1;
      per.textContent = "/month";
    }
    updatePrice();
    updateTraker();
    updateViews();
  });

  window.addEventListener("resize", changeDiscountText);

  updatePrice();
  updateTraker();
  updateViews();
});
