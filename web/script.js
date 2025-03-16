const mobileMenu = document.getElementById("mobileMenu");
const navbarMenu = document.getElementById("navbarMenu");
const navbarSearch = document.getElementById("navbarSearch");
const toggleIcon = document.getElementById("toggleIcon");

mobileMenu.addEventListener("click", () => {
  navbarMenu.classList.toggle("active");
  navbarSearch.classList.toggle("active");
  mobileMenu.classList.toggle("active");

  if (toggleIcon.classList.contains("fa-bars")) {
    toggleIcon.classList.remove("fa-bars");
    toggleIcon.classList.add("fa-times");
  } else {
    toggleIcon.classList.remove("fa-times");
    toggleIcon.classList.add("fa-bars");
  }

  const menuItems = document.querySelectorAll(".navbar-menu li");
  menuItems.forEach((item, index) => {
    item.style.setProperty("--i", index);
  });
});

const countdown = () => {
  const endDate = new Date("December 1, 2027 23:59:59").getTime();
  const now = new Date().getTime();
  const timeLeft = endDate - now;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days < 10 ? `0${days}` : days;
  document.getElementById("hours").innerText = hours < 10 ? `0${hours}` : hours;
  document.getElementById("minutes").innerText = minutes < 10 ? `0${minutes}` : minutes;
  document.getElementById("seconds").innerText = seconds < 10 ? `0${seconds}` : seconds;

  if (timeLeft < 0) {
    clearInterval(interval);
    document.querySelector(".countdown-timer").innerText = "Offer Expired!";
  }
};

const interval = setInterval(countdown, 1000);
document.addEventListener('DOMContentLoaded', () => {
  // Chọn các phần tử cần theo dõi
  const sections = document.querySelectorAll('.hero-content, .featured-products, .product-categories, .customer-reviews, .special-offers');

  // Tạo Intersection Observer
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Thêm class .animate khi phần tử xuất hiện trong viewport
        entry.target.classList.add('animate');
        // Ngừng theo dõi phần tử sau khi animation đã chạy
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2 // Animation chạy khi 20% phần tử xuất hiện trong viewport
  });

  // Theo dõi từng phần tử
  sections.forEach(section => {
    observer.observe(section);
  });
});