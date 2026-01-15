// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const categoryMenu = document.querySelector('.category-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    categoryMenu.classList.toggle('active');
    
    // Change icon
    const icon = menuToggle.querySelector('i');
    if (navMenu.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Close menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link, .category-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        categoryMenu.classList.remove('active');
        const icon = menuToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// Language Selector
const langButtons = document.querySelectorAll('.lang-btn');
langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        langButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const lang = btn.getAttribute('data-lang');
        // Here you would implement language switching logic
        console.log(`Language changed to: ${lang}`);
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add to Cart Functionality
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartCount = document.querySelector('.cart-count');
let cartItems = 0;

addToCartButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.stopPropagation();
        cartItems++;
        cartCount.textContent = cartItems;
        
        // Add animation
        cartCount.style.transform = 'scale(1.3)';
        setTimeout(() => {
            cartCount.style.transform = 'scale(1)';
        }, 200);
        
        // Show notification (you can enhance this)
        console.log('Item added to cart!');
    });
});

// Product Card Click
const productCards = document.querySelectorAll('.product-card, .sale-product-card');
productCards.forEach(card => {
    card.addEventListener('click', (e) => {
        // Don't trigger if clicking on buttons
        if (!e.target.closest('.product-overlay') && !e.target.closest('.sale-badge')) {
            console.log('Product clicked - navigate to product page');
            // Add navigation logic here
        }
    });
});

// Search Functionality
const searchBtn = document.querySelector('.search-btn');
searchBtn.addEventListener('click', () => {
    // You can implement a search modal or redirect to search page
    const searchQuery = prompt('Enter your search:');
    if (searchQuery) {
        console.log(`Searching for: ${searchQuery}`);
    }
});

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe product cards for fade-in animation
document.querySelectorAll('.product-card, .sale-product-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});
