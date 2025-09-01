// Simple button scroll animation
document.querySelector(".btn").addEventListener("click", () => {
  document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
});

// Mobile menu toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
  });
});

// Add subtle animation to project cards
const projectCards = document.querySelectorAll(".project-card");
const certCards = document.querySelectorAll(".certification-card");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.1 });

// Set initial state for animation
projectCards.forEach(card => {
  card.style.opacity = 0;
  card.style.transform = "translateY(20px)";
  card.style.transition = "opacity 0.5s ease, transform 0.5s ease";
  observer.observe(card);
});

// Set initial state for certification cards animation
certCards.forEach(card => {
  card.style.opacity = 0;
  card.style.transform = "translateY(20px)";
  card.style.transition = "opacity 0.5s ease, transform 0.5s ease";
  observer.observe(card);
});

// Add animation to skill tags
const skillTags = document.querySelectorAll(".skill-tag");

skillTags.forEach(tag => {
  tag.addEventListener("mouseenter", () => {
    tag.style.transform = "scale(1.05)";
  });
  
  tag.addEventListener("mouseleave", () => {
    tag.style.transform = "scale(1)";
  });
});

// Timeline item animation
const timelineItems = document.querySelectorAll('.timeline-item');

const timelineObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateX(0)";
    }
  });
}, { threshold: 0.2 });

// Set initial state for timeline animation
timelineItems.forEach(item => {
  if (item.classList.contains('timeline-item')) {
    item.style.opacity = 0;
    item.style.transform = "translateX(-50px)";
    item.style.transition = "opacity 0.5s ease, transform 0.5s ease";
  } else {
    item.style.opacity = 0;
    item.style.transform = "translateX(50px)";
    item.style.transition = "opacity 0.5s ease, transform 0.5s ease";
  }
  timelineObserver.observe(item);
});