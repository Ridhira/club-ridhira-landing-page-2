(function ($) {
  "use strict";

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner();

  // Initiate the wowjs
  new WOW().init();

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".sticky-top").addClass("shadow-sm").css("top", "0px");
    } else {
      $(".sticky-top").removeClass("shadow-sm").css("top", "-100px");
    }
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Facts counter
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 2000,
  });

  $(".lifestyle-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 500,
    loop: true,
    nav: true,
    dots: false,
    items: 1,
    dotsData: false,
    navText: [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>',
    ],
  });

  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    items: 1,
    dots: false,
    loop: true,
    nav: true,
    navText: [
      '<i class="bi bi-chevron-left"></i>',
      '<i class="bi bi-chevron-right"></i>',
    ],
  });
})(jQuery);

// CONTACT US FORM VALIDATION

const contactUsSubmitHandler = () => {
  let contactUsForm = document.getElementById("contact-us-form");
  contactUsForm.addEventListener("onclick", (e) => {
    e.preventDefault();
    let userName = document.getElementById("user-name");
    let userEmail = document.getElementById("user-email");
    let userPhone = document.getElementById("user-phone");
    let userMessage = document.getElementById("user-message");
    console.log(
      userName.value,
      userEmail.value,
      userPhone.value,
      userMessage.value
    );
    alert("This form has been successfully submitted!");
    userName.value = "";
    userEmail.value = "";
    userPhone.value = "";
    userMessage.value = "";
  });
};

// REGISTRATION FORM VALIDATION
const registrationFormSubmitHandler = () => {
  let registrationForm = document.getElementById("registration-form");
  registrationForm.addEventListener("onclick", (e) => {
    e.preventDefault();

    let fname = document.getElementById("fname");
    let age = document.getElementById("age");
    let streetAddress = document.getElementById("street-address");
    let city = document.getElementById("city");
    let zip = document.getElementById("zip");
    let emailAddress = document.getElementById("email-address");
    let phone = document.getElementById("phone");
    let spouseName = document.getElementById("spouseName");
    let family = document.getElementById("family");
    let kids = document.getElementById("kids");
    let kidsAge = document.getElementById("kids-age");
    let occupation = document.getElementById("occupation");
    let carOwned = document.getElementById("car-owned");
    let lastHoliday = document.getElementById("last-holiday");
    let spending = document.getElementById("spending");
    let destination = document.getElementById("destination");
    let motive = document.getElementById("motive");
    let investmentType = document.getElementById("investment-type");
    let sourceRelaxation = document.getElementById("source-relaxation");
    let secondHome = document.getElementById("second-home");
    let secondPlot = document.getElementById("second-plot");
    let aboutRidhira = document.getElementById("about-ridhira");

    console.log(
      fname.value,
      age.value,
      streetAddress.value,
      city.value,
      zip.value,
      emailAddress.value,
      phone.value,
      spouseName.value,
      family.value,
      kids.value,
      kidsAge.value,
      occupation.value,
      carOwned.value,
      lastHoliday.value,
      spending.value,
      destination.value,
      motive.value,
      investmentType.value,
      sourceRelaxation.value,
      secondHome.value,
      secondPlot.value,
      aboutRidhira.value
    );

    alert("This form has been successfully submitted!");

    fname.value = "";
    age.value = "";
    streetAddress.value = "";
    city.value = "";
    zip.value = "";
    emailAddress.value = "";
    phone.value = "";
    spouseName.value = "";
    family.value = "";
    kids.value = "";
    kidsAge.value = "";
    occupation.value = "";
    carOwned.value = "";
    lastHoliday.value = "";
    spending.value = "";
    destination.value = "";
    motive.value = "";
    investmentType.value = "";
    sourceRelaxation.value = "";
    secondHome.value = "";
    secondPlot.value = "";
    aboutRidhira.value = "";
  });
};
