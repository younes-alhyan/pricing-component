document.addEventListener('DOMContentLoaded', () => {
    const priceText = document.getElementById('price');
    const priceTextMobile = document.getElementById('price-mobile');
    const slider = document.getElementById('slider');
    const discountText = document.getElementById('discount');
    const viewsText = document.getElementById('views');
    function updatePrice() {
        priceText.textContent = `$${slider.value}`;
        priceTextMobile.textContent = priceText.textContent;
    }
    function changeDiscountText() {
        if (window.innerWidth < 450) {
            discountText.textContent = '-25%';
        } else {
            discountText.textContent = '25% discount'
        }
    }
    function updateTraker() {
        const progress = (slider.value / slider.max) * 100;

        slider.style.background = `linear-gradient(to right, hsl(174, 77%, 80%) ${progress}%, hsl(224, 65%, 95%) ${progress}%)`;
    }
    function updateViews() {
        let views = (100/16)*slider.value;
        viewsText.textContent = `${Math.round(views)}K PAGEVIEWS`;
    }
    slider.addEventListener('input', () => {
        updatePrice()
        updateTraker();
        updateViews();
    });
    window.addEventListener('resize', changeDiscountText)
    updatePrice();
    updateTraker();
    updateViews();

})