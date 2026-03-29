/**
 * script.js – StyleMen Men's Clothing Shop
 *
 * Sections:
 *   1. Product Data (brands & products per category)
 *   2. Navigation – Scroll Effect & Active Link
 *   3. Hamburger Menu Toggle
 *   4. Hero Image Fallback
 *   5. Category Card Clicks → Show Product Details
 *   6. Render Product Cards
 *   7. Back Button – Return to Categories View
 *   8. Scroll-Triggered Entrance Animations (Intersection Observer)
 *   9. Smooth Scroll for all anchor links
 *  10. Keyboard Accessibility for Category Cards
 */

/* ============================================================
   1. PRODUCT DATA
   ============================================================
   Structure:
     categoryKey: {
       label: 'Display Name',
       products: [
         { brand: 'Brand Name', image: 'images/category/product-name.jpg', name: 'Product Name' },
         ...
       ]
     }
   ============================================================ */

const PRODUCT_DATA = {

  // ── SHIRTS (16 images available) ──────────────────────────────
  shirts: {
    label: 'Shirts',
    products: [
      {
        brand: 'Burberry',
        image: "images/shirts/WhatsApp Image 2026-03-26 at 9.28.49 PM.jpeg",
        name: 'Lacoste Classic Shirt'
      },
      {
        brand:'Burberry',
        image: "images/shirts/WhatsApp Image 2026-03-26 at 9.28.54 PM.jpeg",
        name: 'Polo Oxford Shirt'
      },
      {
        brand: 'Burberry',
        image: "images/shirts/WhatsApp Image 2026-03-26 at 9.28.57 PM.jpeg",
        name: 'US Polo Assn. Shirt'
      },
      {
        brand: 'Lacoste',
        image: "images/shirts/WhatsApp Image 2026-03-26 at 9.32.39 PM.jpeg",
        name: 'Burberry Classic Shirt'
      },
      {
        brand: 'Lacoste',
        image: "images/shirts/WhatsApp Image 2026-03-26 at 9.32.47 PM.jpeg",
        name: 'Burberry Check Shirt'
      },
      {
        brand: 'Lacoste',
        image: "images/shirts/WhatsApp Image 2026-03-26 at 9.35.19 PM.jpeg",
        name: 'Lacoste Slim Fit'
      },
      {
        brand: 'Lacoste',
        image: "images/shirts/WhatsApp Image 2026-03-26 at 9.35.21 PM.jpeg",
        name: 'Lacoste Casual Shirt'
      },
      {
        brand: 'Lacoste',
        image: "images/shirts/WhatsApp Image 2026-03-26 at 9.35.25 PM.jpeg",
        name: 'Lacoste Formal Shirt'
      },
      {
        brand: 'Lacoste',
        image: "images/shirts/WhatsApp Image 2026-03-26 at 9.35.29 PM.jpeg",
        name: 'Lacoste Linen Shirt'
      },
      {
        brand: 'Lacoste',
        image: "images/shirts/WhatsApp Image 2026-03-26 at 9.35.30 PM.jpeg",
        name: 'Polo Striped Shirt'
      },
      {
        brand: 'Polo',
        image: "images/shirts/WhatsApp Image 2026-03-26 at 9.35.33 PM.jpeg",
        name: 'Burberry Printed Shirt'
      },
      {
        brand: 'Polo',
        image: "images/shirts/WhatsApp Image 2026-03-26 at 9.35.35 PM.jpeg",
        name: 'US Polo Denim Shirt'
      },
      {
        brand: 'Polo',
        image: "images/shirts/WhatsApp Image 2026-03-26 at 9.35.37 PM.jpeg",
        name: 'Lacoste Sport Shirt'
      },
      {
        brand: 'US Polo',
        image: "images/shirts/us-polo1.jpg",
        name: 'US Polo Polo Shirt'
      },
      {
        brand: 'US Polo',
        image: "images/shirts/us-polo3.jpg",
        name: 'US Polo Casual Shirt'
      },
      {
        brand: 'US Polo',
        image: "images/shirts/us-polo4.webp",
        name: 'US Polo Slim Shirt'
      },
    ]
  },

  // ── T-SHIRTS (8 images available) ─────────────────────────────
  tshirts: {
    label: 'T-Shirts',
    products: [
      {
        brand: 'Sim Boutique',
        image: "images/t-shirts/WhatsApp Image 2026-03-26 at 9.28.30 PM.jpeg",
        name: 'Sim Boutique Essential T-Shirt'
      },
      {
        brand: 'Sim Boutique',
        image: "images/t-shirts/WhatsApp Image 2026-03-26 at 9.28.34 PM.jpeg",
        name: 'Sim Boutique Graphic T-Shirt'
      },
      { 
        brand: 'Round Neck Classic',
        image: "images/t-shirts/round-nk-classic.webp",
        name: 'Round Neck Classic T-Shirt'
      },
      {
        brand: 'Round Neck Slim Fit',
        image: "images/t-shirts/round-neck-slimfit.webp",
        name: 'Round Neck Slim Fit T-Shirt'
      },
      {
        brand: ' Premium',
        image: "images/t-shirts/round-neck.jpeg",
        name: 'Sim Boutique Premium T-Shirt'
      },
      {
        brand: 'Round Neck Oversized',
        image: "images/t-shirts/round-nk-oversized.webp",
        name: 'Round Neck Oversized T-Shirt'
      },
      {
        brand: 'Drop Shoulder',
        image: "images/t-shirts/Sim Boutique Drop Shoulder.webp",
        name: 'Sim Boutique Drop Shoulder T-Shirt'
      },
      {
        brand: 'Round Neck Printed',
        image: "images/t-shirts/t-shirt printed.webp",
        name: 'Round Neck Printed T-Shirt'
      },
    ]
  },

  // ── PANTS (4 images available) ─────────────────────────────────
  pants: {
    label: 'Pants',
    products: [
      {
        brand: 'Slim Chino Pants',
        image: "images/pants/WhatsApp Image 2026-03-26 at 9.35.14 PM.jpeg",
        name: 'Slim Chino Pants'
      },
      {
        brand: 'Scratch Jeans',
        image: "images/pants/WhatsApp Image 2026-03-26 at 9.35.18 PM.jpeg",
        name: 'Classic Formal Trousers'
      },
      {
        brand: 'Aarmani Pants',
        image: "images/pants/aarmani pants.jpg",
        name: 'Aarmani Pants'
      },
      {
        brand: 'Multi Pockets Pants',
        image: "images/pants/multipockets.webp",
        name: 'Multi Pockets Pants'
      },
    ]
  },

  // ── NIGHT PANTS (8 images available) ──────────────────────────
  nightpants: {
    label: 'Night Pants',
    products: [
      {
        brand: 'StyleMen',
        image: "images/night_pants/WhatsApp Image 2026-03-26 at 9.26.02 PM.jpeg",
        name: 'Cotton Night Pants'
      },
      {
        brand: 'StyleMen',
        image: "images/night_pants/WhatsApp Image 2026-03-26 at 9.26.03 PM (1).jpeg",
        name: 'Printed Pyjama Set'
      },
      {
        brand: 'StyleMen',
        image: "images/night_pants/WhatsApp Image 2026-03-26 at 9.26.03 PM.jpeg",
        name: 'Striped Night Pants'
      },
      {
        brand: 'StyleMen',
        image: "images/night_pants/WhatsApp Image 2026-03-26 at 9.26.04 PM (1).jpeg",
        name: 'Comfort Lounge Pants'
      },
      {
        brand: 'StyleMen',
        image: "images/night_pants/WhatsApp Image 2026-03-26 at 9.26.04 PM.jpeg",
        name: 'Flannel Night Pants'
      },
      {
        brand: 'StyleMen',
        image: "images/night_pants/WhatsApp Image 2026-03-26 at 9.26.05 PM.jpeg",
        name: 'Drawstring Sleep Pants'
      },
      {
        brand: 'StyleMen',
        image: "images/night_pants/WhatsApp Image 2026-03-26 at 9.35.04 PM.jpeg",
        name: 'Elastic Waist Night Pants'
      },
      {
        brand: 'StyleMen',
        image: "images/night_pants/WhatsApp Image 2026-03-26 at 9.35.06 PM.jpeg",
        name: 'Checkered Pyjama'
      },
    ]
  },

  // ── SHOES / Nike (7 images available) ─────────────────────────
  shoes: {
    label: 'Shoes',
    products: [
      {
        brand: 'Nike',
        image: "images/shoes/WhatsApp Image 2026-03-25 at 8.48.05 PM (1).jpeg",
        name: 'Nike Air Max'
      },
      {
        brand: 'Nike',
        image: "images/shoes/WhatsApp Image 2026-03-25 at 8.48.05 PM (2).jpeg",
        name: 'Nike Revolution'
      },
      {
        brand: 'Nike',
        image: "images/shoes/WhatsApp Image 2026-03-25 at 8.48.05 PM.jpeg",
        name: 'Nike Court Vision'
      },
      {
        brand: 'Nike',
        image: "images/shoes/WhatsApp Image 2026-03-25 at 8.48.06 PM.jpeg",
        name: 'Nike Downshifter'
      },
      {
        brand: 'Nike',
        image: "images/shoes/WhatsApp Image 2026-03-26 at 9.28.59 PM.jpeg",
        name: 'Nike Pegasus'
      },
      {
        brand: 'Nike',
        image: "images/shoes/WhatsApp Image 2026-03-26 at 9.32.52 PM.jpeg",
        name: 'Nike Vomero'
      },
      {
        brand: 'Nike',
        image: "images/shoes/WhatsApp Image 2026-03-26 at 9.32.59 PM.jpeg",
        name: 'Nike Structure'
      },
    ]
  },

  // ── SLIPPERS (4 images available) ─────────────────────────────
  slippers: {
    label: 'Slippers',
    products: [
      {
        brand: 'Political Pattern',
        image: "images/slippers/WhatsApp Image 2026-03-26 at 9.29.04 PM.jpeg",
        name: 'Political Pattern Slides'
      },
      {
        brand: 'Hitcolus',
        image: "images/slippers/WhatsApp Image 2026-03-26 at 9.29.08 PM.jpeg",
        name: 'Hitcolus Comfort Slipper'
      },
      {
        brand: 'Addoxy',
        image: "images/slippers/WhatsApp Image 2026-03-26 at 9.33.06 PM.jpeg",
        name: 'Addoxy Classic Flip Flop'
      },
      {
        brand: 'Addoxy',
        image: "images/slippers/WhatsApp Image 2026-03-26 at 9.33.09 PM.jpeg",
        name: 'Addoxy Premium Slide'
      },
    ]
  },

  // ── SUNGLASSES (8 images available) ──────────────────────────
  sunglasses: {
    label: 'Sunglasses',
    products: [
      { brand: 'StyleMen', image: 'images/sunglasses/sunglass1.jpg', name: 'Aviator Sunglasses' },
      { brand: 'StyleMen', image: 'images/sunglasses/sunglass2.jpg', name: 'Wayfarer Sunglasses' },
      { brand: 'StyleMen', image: 'images/sunglasses/sunglasss3.jpg', name: 'Round Frame Sunglasses' },
      { brand: 'StyleMen', image: 'images/sunglasses/sunglass4.jpg', name: 'Sport Wrap Sunglasses' },
      { brand: 'StyleMen', image: 'images/sunglasses/sunglass5.jpg', name: 'Oversized Sunglasses' },
      { brand: 'StyleMen', image: 'images/sunglasses/sunglass6.jpg', name: 'Square Frame Sunglasses' },
      { brand: 'StyleMen', image: 'images/sunglasses/sunglass7.jpg', name: 'Cat Eye Sunglasses' },
      { brand: 'StyleMen', image: 'images/sunglasses/sunglass8.jpg', name: 'Retro Sunglasses' },
    ]
  },

  // ── UNDERGARMENTS (5 images available) ───────────────────────
  undergarments: {
    label: 'Undergarments',
    products: [
      { brand: 'Calvin Klein', image: 'images/undergarments/calvin clein.jpg', name: 'Calvin Klein Cotton Brief' },
      { brand: 'Lux Cozi', image: 'images/undergarments/lux cozi.jpg', name: 'Lux Cozi Trunk' },
      { brand: 'Macho', image: 'images/undergarments/macho.jpg', name: 'Macho Athletic Brief' },
      { brand: 'Printed Boxers', image: 'images/undergarments/printed.jpg', name: 'Printed Boxers' },
      // { brand: 'StyleMen', image: 'images/undergarments/undergarment.jpg', name: 'Classic Innerwear' },
    ]
  },

  // ── WATCHES (8 images available) ──────────────────────────────
  watches: {
    label: 'Watches',
    products: [
      { brand: 'StyleMen', image: "images/watches/WhatsApp Image 2026-03-27 at 9.15.35 AM.jpeg", name: 'Classic Analogue Watch' },
      { brand: 'StyleMen', image: "images/watches/WhatsApp Image 2026-03-27 at 9.15.35 AM (1).jpeg", name: 'Minimalist Leather Strap' },
      { brand: 'StyleMen', image: "images/watches/WhatsApp Image 2026-03-27 at 9.15.35 AM (2).jpeg", name: 'Sport Chronograph' },
      { brand: 'StyleMen', image: "images/watches/WhatsApp Image 2026-03-27 at 9.15.36 AM.jpeg", name: 'Steel Mesh Bracelet Watch' },
      { brand: 'StyleMen', image: "images/watches/WhatsApp Image 2026-03-27 at 9.15.36 AM (1).jpeg", name: 'Day-Date Luxury Watch' },
      { brand: 'StyleMen', image: "images/watches/WhatsApp Image 2026-03-27 at 9.15.36 AM (2).jpeg", name: 'Diver Automatic Watch' },
      { brand: 'StyleMen', image: "images/watches/WhatsApp Image 2026-03-27 at 9.15.37 AM.jpeg", name: 'Slim Dress Watch' },
      { brand: 'StyleMen', image: "images/watches/WhatsApp Image 2026-03-27 at 9.15.37 AM (1).jpeg", name: 'Pilot Chronograph Watch' },
    ]
  },

  // ── HOODIES (5 images available) ──────────────────────────────
  hoodies: {
    label: 'Hoodies',
    products: [
      {
        brand: 'Stylish Hoodies',
        image: "images/hoodies/WhatsApp Image 2026-03-26 at 9.33.31 PM.jpeg",
        name: 'Oversized Drop Shoulder Hoodie'
      },
      {
        brand: 'Stylish Hoodies',
        image: "images/hoodies/WhatsApp Image 2026-03-26 at 9.33.48 PM.jpeg",
        name: 'Pullover Fleece Hoodie'
      },
      {
        brand: 'Stylish Hoodies',
        image: "images/hoodies/WhatsApp Image 2026-03-26 at 9.34.04 PM.jpeg",
        name: 'Zip-Up Graphic Hoodie'
      },
      {
        brand: 'Stylish Hoodies',
        image: "images/hoodies/WhatsApp Image 2026-03-26 at 9.34.52 PM.jpeg",
        name: 'Minimal Logo Hoodie'
      },
      {
        brand: 'Stylish Hoodies',
        image: "images/hoodies/WhatsApp Image 2026-03-26 at 9.34.54 PM.jpeg",
        name: 'Classic Zip Hoodie'
      },
    ]
  },

  // ── LOAFERS (13 images available) ─────────────────────────────
  loafers: {
    label: 'Loafers',
    products: [
      {
        brand: 'Classic Penny Loafer',
        image: "images/loafers/WhatsApp Image 2026-03-26 at 9.52.56 PM (1).jpeg",
        name: 'Classic Penny Loafer'
      },
      {
        brand: 'Suede Tassel Loafer',
        image: "images/loafers/WhatsApp Image 2026-03-26 at 9.52.56 PM.jpeg",
        name: 'Suede Tassel Loafer'
      },
      {
        brand: 'Leather Driving Loafer',
        image: "images/loafers/WhatsApp Image 2026-03-26 at 9.52.57 PM (1).jpeg",
        name: 'Leather Driving Loafer'
      },
      {
        brand: 'Casual Slip-On Loafer',
        image: "images/loafers/WhatsApp Image 2026-03-26 at 9.52.57 PM (2).jpeg",
        name: 'Casual Slip-On Loafer'
      },
      {
        brand: 'Horsebit Loafer',
        image: "images/loafers/WhatsApp Image 2026-03-26 at 9.52.57 PM.jpeg",
        name: 'Horsebit Loafer'
      },
      {
        brand: 'Venetian Loafer',
        image: "images/loafers/WhatsApp Image 2026-03-26 at 9.52.58 PM (1).jpeg",
        name: 'Venetian Loafer'
      },
      {
        brand: 'Monk Strap Loafer',
        image: "images/loafers/WhatsApp Image 2026-03-26 at 9.52.58 PM.jpeg",
        name: 'Monk Strap Loafer'
      },
      {
        brand: 'Oxford Loafer',
        image: "images/loafers/WhatsApp Image 2026-03-26 at 9.52.59 PM (1).jpeg",
        name: 'Oxford Loafer'
      },
      {
        brand: 'Moccasin Loafer',
        image: "images/loafers/WhatsApp Image 2026-03-26 at 9.52.59 PM (2).jpeg",
        name: 'Moccasin Loafer'
      },
      {
        brand: 'Boat Shoe Loafer',
        image: "images/loafers/WhatsApp Image 2026-03-26 at 9.52.59 PM.jpeg",
        name: 'Boat Shoe Loafer'
      },
      {
        brand: 'Chelsea Loafer',
        image: "images/loafers/WhatsApp Image 2026-03-26 at 9.53.00 PM (1).jpeg",
        name: 'Chelsea Loafer'
      },
      {
        brand: 'Derby Loafer',
        image: "images/loafers/WhatsApp Image 2026-03-26 at 9.53.00 PM (2).jpeg",
        name: 'Derby Loafer'
      },
      {
        brand: 'Wingtip Loafer',
        image: "images/loafers/WhatsApp Image 2026-03-26 at 9.53.00 PM.jpeg",
        name: 'Wingtip Loafer'
      },
    ]
  }

};


/* ============================================================
   2. NAVIGATION – SCROLL EFFECT & ACTIVE LINK
   ============================================================ */

const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');

// Add "scrolled" class to navbar when page is scrolled down
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  // Update active nav link based on scroll position
  updateActiveNavLink();
});

/**
 * Determine which section is currently in view and
 * highlight the matching nav link.
 */
function updateActiveNavLink() {
  // Sections we track (map href to section id)
  const sectionIds = ['home', 'products', 'offers', 'contact'];

  let currentSection = 'home';

  sectionIds.forEach(id => {
    const section = document.getElementById(id);
    if (!section) return;

    const rect = section.getBoundingClientRect();
    // Consider a section "active" when its top is within the top 40% of viewport
    if (rect.top <= window.innerHeight * 0.4) {
      currentSection = id;
    }
  });

  navLinks.forEach(link => {
    const href = link.getAttribute('href').replace('#', '');
    link.classList.toggle('active', href === currentSection);
  });
}


/* ============================================================
   3. HAMBURGER MENU TOGGLE
   ============================================================ */

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  const isOpen = hamburger.classList.toggle('open');
  navMenu.classList.toggle('open', isOpen);
  hamburger.setAttribute('aria-expanded', String(isOpen));
});

// Close mobile menu when a nav link is clicked
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navMenu.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});


/* ============================================================
   4. HERO IMAGE FALLBACK
   ============================================================
   If banner.jpg doesn't exist, the hero falls back to a
   dark background gradient (defined in CSS).
   ============================================================ */

// Nothing extra needed – handled by onerror attribute in HTML
// + CSS background on .hero already provides the dark fallback.


/* ============================================================
   5. CATEGORY CARD CLICKS → SHOW PRODUCT DETAILS
   ============================================================ */

const categoryCards = document.querySelectorAll('.category-card');
const productDetailsSection = document.getElementById('product-details');
const categoriesSection = document.getElementById('products');
const detailsLabel = document.getElementById('details-label');
const detailsTitle = document.getElementById('details-title');
const productsGrid = document.getElementById('products-grid');

/**
 * Handle a category selection.
 * @param {string} categoryKey – e.g. 'shirts', 'tshirts', etc.
 */
function openCategory(categoryKey) {
  const data = PRODUCT_DATA[categoryKey];
  if (!data) return;

  // 1. Update the section header
  detailsLabel.textContent = 'Our Collection';
  detailsTitle.textContent = data.label;

  // 2. Render product cards
  renderProducts(data.products);

  // 3. Hide categories section, show product details
  categoriesSection.classList.add('hidden');
  productDetailsSection.classList.remove('hidden');

  // 4. Smooth scroll to the product details section
  scrollToSection('product-details');
}

// Attach click listeners to every category card
categoryCards.forEach(card => {
  card.addEventListener('click', () => {
    const key = card.getAttribute('data-category');
    openCategory(key);
  });
});


/* ============================================================
   6. RENDER PRODUCT CARDS
   ============================================================ */

/**
 * Populate the products grid with cards for the given products.
 * @param {Array} products – array of { brand, image, name }
 */
function renderProducts(products) {
  // Clear previous content
  productsGrid.innerHTML = '';

  products.forEach((product, index) => {
    // Build the card element
    const card = document.createElement('article');
    card.className = 'product-card';
    card.setAttribute('aria-label', `${product.brand} – ${product.name}`);

    card.innerHTML = `
      <!-- Brand name displayed above the image -->
      <p class="product-brand">${escapeHTML(product.brand)}</p>

      <!-- Product image with fallback placeholder -->
      <div class="product-img-wrap" data-ph="${escapeHTML(product.name)}">
        <img
          src="${escapeHTML(product.image)}"
          alt="${escapeHTML(product.name)}"
          class="product-img"
          loading="lazy"
          onerror="handleProductImgError(this)"
        />
        <div class="product-img-placeholder">
          <span class="ph-icon">👔</span>
          <span class="ph-text">${escapeHTML(product.name)}</span>
        </div>
      </div>
    `;

    productsGrid.appendChild(card);
  });
}

/**
 * Called when a product image fails to load.
 * Shows the placeholder panel instead.
 * @param {HTMLImageElement} imgEl
 */
function handleProductImgError(imgEl) {
  imgEl.style.display = 'none';
  imgEl.closest('.product-img-wrap').classList.add('img-placeholder');
}

/**
 * Escape special HTML characters to prevent XSS.
 * @param {string} str
 * @returns {string}
 */
function escapeHTML(str) {
  const div = document.createElement('div');
  div.appendChild(document.createTextNode(String(str)));
  return div.innerHTML;
}


/* ============================================================
   7. BACK BUTTON – RETURN TO CATEGORIES VIEW
   ============================================================ */

const btnBack = document.getElementById('btn-back');

btnBack.addEventListener('click', () => {
  // Hide product details, show categories section
  productDetailsSection.classList.add('hidden');
  categoriesSection.classList.remove('hidden');

  // Scroll back to the categories section
  scrollToSection('products');
});


/* ============================================================
   8. SCROLL-TRIGGERED ENTRANCE ANIMATIONS
      (Intersection Observer API)
   ============================================================ */

/**
 * Observe elements and add the 'visible' class when they
 * enter the viewport. Used for category card entrance animation.
 */
const observerOptions = {
  root: null,        // viewport
  rootMargin: '0px',
  threshold: 0.12         // trigger when 12% of element is visible
};

const entranceObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // Stop observing once visible (one-shot animation)
      entranceObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all category cards on page load
categoryCards.forEach(card => {
  entranceObserver.observe(card);
});


/* ============================================================
   9. SMOOTH SCROLL HELPER
   ============================================================ */

/**
 * Smoothly scroll to a section by its ID, accounting
 * for the fixed navbar height.
 * @param {string} sectionId
 */
function scrollToSection(sectionId) {
  const target = document.getElementById(sectionId);
  if (!target) return;

  const navHeight = navbar.getBoundingClientRect().height;
  const targetTop = target.getBoundingClientRect().top + window.scrollY - navHeight;

  window.scrollTo({ top: targetTop, behavior: 'smooth' });
}

// Override all internal anchor <a href="#section"> links
// to use our offset-aware smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#') return;

    const targetId = href.replace('#', '');
    const targetEl = document.getElementById(targetId);

    if (targetEl) {
      e.preventDefault();
      scrollToSection(targetId);
    }
  });
});


/* ============================================================
   10. KEYBOARD ACCESSIBILITY FOR CATEGORY CARDS
   ============================================================ */

// Allow Enter / Space key to trigger category card clicks
categoryCards.forEach(card => {
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const key = card.getAttribute('data-category');
      openCategory(key);
    }
  });
});


/* ============================================================
   INIT – Run on DOM ready
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  // Initialise active nav link on page load
  updateActiveNavLink();
});
