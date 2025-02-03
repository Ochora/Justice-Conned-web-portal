// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Contact Form Validation
  const contactForm = document.querySelector('.contact-form form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;
  
      if (!name || !email || !subject || !message) {
        e.preventDefault();
        alert('Please fill out all fields before submitting.');
      }
    });
  }
  
// Testimonials Carousel (Homepage)
const testimonials = document.querySelector('.testimonials');
if (testimonials) {
  let currentIndex = 0;
  const testimonialsList = testimonials.querySelector('.testimonials-list');
  const testimonialItems = testimonialsList.querySelectorAll('.testimonial-item');
  const totalItems = testimonialItems.length;

  // Navigation Buttons
  const prevButton = testimonials.querySelector('.testimonials-nav .prev');
  const nextButton = testimonials.querySelector('.testimonials-nav .next');

  // Function to move to the next testimonial
  const moveToNextTestimonial = () => {
    currentIndex = (currentIndex + 1) % totalItems;
    testimonialsList.style.transform = `translateX(-${currentIndex * 100}%)`;
  };

  // Function to move to the previous testimonial
  const moveToPrevTestimonial = () => {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    testimonialsList.style.transform = `translateX(-${currentIndex * 100}%)`;
  };

  // Add event listeners for navigation buttons
  if (prevButton) {
    prevButton.addEventListener('click', moveToPrevTestimonial);
  }
  if (nextButton) {
    nextButton.addEventListener('click', moveToNextTestimonial);
  }

  // Optional: Auto-scroll every 35 seconds
  let autoScrollInterval;
  const startAutoScroll = () => {
    autoScrollInterval = setInterval(moveToNextTestimonial, 35000); // 35 seconds
  };

  const stopAutoScroll = () => {
    clearInterval(autoScrollInterval);
  };

  // Start auto-scroll when the page loads
  startAutoScroll();

  // Stop auto-scroll when the user interacts with the carousel
  testimonials.addEventListener('mouseenter', stopAutoScroll);
  testimonials.addEventListener('mouseleave', startAutoScroll);
}
  
  // Subscription Plan Toggle (Subscription Page)
  const subscriptionPlans = document.querySelector('.subscription-plans');
  if (subscriptionPlans) {
    const plans = subscriptionPlans.querySelectorAll('.plan');
    plans.forEach(plan => {
      plan.addEventListener('click', () => {
        plans.forEach(p => p.classList.remove('active'));
        plan.classList.add('active');
      });
    });
  }
