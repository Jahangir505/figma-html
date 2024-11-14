document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  const totalSlides = slides.length;
  let currentSlide = 0;

  // Function to show a specific slide
  function showSlide(index) {
    const slider = document.querySelector(".slider");
    const totalWidth = slider.offsetWidth;
    slider.style.transform = `translateX(-${totalWidth * index}px)`;
    // Add/remove 'active' class to dots for current slide
    updateDots(index);
  }

  // Function to update the active dot
  function updateDots(index) {
    const dots = document.querySelectorAll(".dot");
    dots.forEach((dot, i) => {
      dot.classList.remove("active");
      if (i === index) {
        dot.classList.add("active");
      }
    });
  }

  // Autoplay function
  function autoplay() {
    currentSlide = (currentSlide + 1) % totalSlides; // Cycle through slides
    showSlide(currentSlide);
  }

  // Set the autoplay interval (e.g., 3 seconds)
  const autoplayInterval = setInterval(autoplay, 3000);

  // Initialize the first slide
  showSlide(currentSlide);

  // Event listeners for the dots to allow manual navigation
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      clearInterval(autoplayInterval); // Stop autoplay on manual click
      showSlide(index);
      currentSlide = index;
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const sliders = document.querySelectorAll(".slider2");

  sliders.forEach((slider) => {
    const slides = slider.querySelector(".slides");
    const slideItems = slider.querySelectorAll(".slide");
    const prevBtn = slider.querySelector(".prev");
    const nextBtn = slider.querySelector(".next");
    let currentSlide = 0;

    function updateSlide() {
      const slideWidth = slideItems[0].clientWidth;
      slides.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    }

    nextBtn.addEventListener("click", () => {
      currentSlide = (currentSlide + 1) % slideItems.length;
      updateSlide();
    });

    prevBtn.addEventListener("click", () => {
      currentSlide = (currentSlide - 1 + slideItems.length) % slideItems.length;
      updateSlide();
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const verticalButtons = document.querySelector(".vertical-buttons");
  const sections = document.querySelectorAll(".section");
  const backToTopBtn = document.querySelector(".back-to-top");

  window.addEventListener("scroll", () => {
    const thirdSection = sections[4];
    const thirdSectionTop = thirdSection.getBoundingClientRect().top;

    if (thirdSectionTop <= window.innerHeight) {
      verticalButtons.classList.remove("hidden");
    } else {
      verticalButtons.classList.add("hidden");
    }
  });

  // Scroll back to top smoothly when the "Back to Top" button is clicked
  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
