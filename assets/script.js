// tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
tooltipTriggerList.forEach(el => new bootstrap.Tooltip(el));

// init increase decrease
$(function () {
    $(".inc-dec").userincr({
        buttonClass: 'btn btn-pink fs-sm px-2 py-1'
    });
});
$(document).ready(function () {
    $('#languageSelect').select2({
        minimumResultsForSearch: Infinity, // Hides search
        placeholder: "Select Language",
        allowClear: true
    });
    $('#currencySelect').select2({
        minimumResultsForSearch: Infinity, // Hides search
        placeholder: "Select Currency",
        allowClear: true
    });
});
// navbar fixed
window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");
    const mobNavbar = document.getElementById("mob-nav");
    const triggerHeight = 215;
    const smallTriggerHeight = 120;
    // large screen navbar
    if (window.scrollY >= triggerHeight) {
        navbar.classList.add("fixed");
    } else {
        navbar.classList.remove("fixed");
    }
    // small screen navbar
    if (window.scrollY >= smallTriggerHeight) {
        mobNavbar.classList.add("fixed");
    } else {
        mobNavbar.classList.remove("fixed");
    }

});
