// Smooth Scroll for Navigation Links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Hero Section: Typewriter Effect for Welcome Message
function typeWriter(text, elementId, speed = 100) {
    let i = 0;
    const element = document.getElementById(elementId);
    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }
    typing();
}
typeWriter("Welcome to Our Restaurant", "hero-text");

// About Us Section: Show More/Less Text Toggle
document.getElementById("about-toggle").addEventListener("click", function() {
    const moreText = document.getElementById("about-more");
    if (moreText.style.display === "none" || !moreText.style.display) {
        moreText.style.display = "block";
        this.innerText = "Show Less";
    } else {
        moreText.style.display = "none";
        this.innerText = "Read More";
    }
});

// Seasonal Specials Section: Countdown Timer
function countdown(endDate, elementId) {
    const element = document.getElementById(elementId);
    const timer = setInterval(() => {
        const now = new Date().getTime();
        const distance = endDate - now;
        if (distance < 0) {
            clearInterval(timer);
            element.innerHTML = "Expired";
            return;
        }
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        element.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }, 1000);
}
// Example: countdown to a specific date
const specialEndDate = new Date("2024-12-31T23:59:59").getTime();
countdown(specialEndDate, "special-timer");

// Gallery Section: Dynamic Image Gallery with Lightbox
document.querySelectorAll(".gallery-item").forEach(item => {
    item.addEventListener("click", function() {
        const lightbox = document.createElement("div");
        lightbox.id = "lightbox";
        lightbox.style.position = "fixed";
        lightbox.style.top = 0;
        lightbox.style.left = 0;
        lightbox.style.width = "100%";
        lightbox.style.height = "100%";
        lightbox.style.background = "rgba(0, 0, 0, 0.8)";
        lightbox.style.display = "flex";
        lightbox.style.alignItems = "center";
        lightbox.style.justifyContent = "center";
        lightbox.style.zIndex = 1000;
        const img = document.createElement("img");
        img.src = this.src;
        img.style.maxWidth = "80%";
        img.style.maxHeight = "80%";
        lightbox.appendChild(img);
        lightbox.addEventListener("click", () => document.body.removeChild(lightbox));
        document.body.appendChild(lightbox);
    });
});

// Customer Reviews: Carousel for Testimonials
let reviewIndex = 0;
function showReview() {
    const reviews = document.querySelectorAll(".review");
    reviews.forEach((review, index) => {
        review.style.display = index === reviewIndex ? "block" : "none";
    });
    reviewIndex = (reviewIndex + 1) % reviews.length;
}
setInterval(showReview, 5000);
showReview();

// Location Section: Show/Hide Map Toggle
document.getElementById("map-toggle").addEventListener("click", function() {
    const map = document.getElementById("location-map");
    if (map.style.display === "none" || !map.style.display) {
        map.style.display = "block";
        this.innerText = "Hide Map";
    } else {
        map.style.display = "none";
        this.innerText = "Show Map";
    }
});

// Reservation Section: Form Validation
document.getElementById("reservation-form").addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    if (!name || !email || !date || !time) {
        alert("Please fill in all fields.");
        return;
    }
    alert("Reservation request submitted!");
});

// Footer: Social Media Links Highlight
document.querySelectorAll(".social-link").forEach(link => {
    link.addEventListener("mouseenter", () => {
        link.style.color = "#e67e22";
    });
    link.addEventListener("mouseleave", () => {
        link.style.color = "#fff";
    });
});
