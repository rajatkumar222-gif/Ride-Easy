/* ===================================================
   RideEasy – Vehicle Data & Listing Logic
=================================================== */

const VEHICLES = [
  {
    id: 1, name: 'Honda Activa 6G', type: 'scooter', brand: 'Honda',
    price: 40, rating: 4.7, reviews: 312, availability: true,
    city: 'Delhi', fuel: 'Petrol', engine: '109.51cc', mileage: '60 kmpl',
    image: 'assets/images/activa.png',
    features: ['Keyless Start', 'LED Headlight', 'Mobile Charging', 'Silent Start'],
    description: 'The most popular scooter in India. Honda Activa 6G comes with a powerful BS6 engine, LED all-around lighting, and a comfortable riding position perfect for city commutes.'
  },
  {
    id: 2, name: 'TVS Jupiter Classic', type: 'scooter', brand: 'TVS',
    price: 35, rating: 4.5, reviews: 198, availability: true,
    city: 'Mumbai', fuel: 'Petrol', engine: '109.7cc', mileage: '62 kmpl',
    image: 'assets/images/jupiter.png',
    features: ['Under-seat Storage', 'USB Charger', 'Retro Design', 'Eco Mode'],
    description: 'TVS Jupiter Classic blends retro styling with modern convenience. Spacious underbody storage and a smooth ride make it ideal for daily use.'
  },
  {
    id: 3, name: 'Ola S1 Pro', type: 'scooter', brand: 'Ola',
    price: 55, rating: 4.3, reviews: 145, availability: true,
    city: 'Bangalore', fuel: 'Electric', engine: 'Electric Motor', mileage: '181 km/charge',
    image: 'assets/images/ola.png',
    features: ['App Connected', 'Fast Charging', 'Reverse Mode', 'Cruise Control'],
    description: 'India\'s premium electric scooter. Ola S1 Pro delivers thrilling performance with zero emissions. Connected technology and a massive 5.1" display set it apart.'
  },
  {
    id: 4, name: 'Suzuki Access 125', type: 'scooter', brand: 'Suzuki',
    price: 38, rating: 4.6, reviews: 231, availability: false,
    city: 'Hyderabad', fuel: 'Petrol', engine: '124cc', mileage: '65 kmpl',
    image: 'assets/images/activa.png',
    features: ['Auto Start/Stop', 'Digital Console', 'Smooth Ride', 'Spacious Seat'],
    description: 'Suzuki Access 125 is known for its exceptional refinement and ride quality. The 125cc engine offers effortless cruising on busy roads.'
  },
  {
    id: 5, name: 'Hero Maestro Edge', type: 'scooter', brand: 'Hero',
    price: 30, rating: 4.2, reviews: 167, availability: true,
    city: 'Delhi', fuel: 'Petrol', engine: '110.9cc', mileage: '58 kmpl',
    image: 'assets/images/jupiter.png',
    features: ['I3S Technology', 'Auto Headlamp', 'Bluetooth Console', 'ABS'],
    description: 'Hero Maestro Edge brings sporty design to the scooter segment. The idle stop-start (i3S) system saves fuel in heavy city traffic.'
  },
  {
    id: 6, name: 'Vespa SXL 125', type: 'scooter', brand: 'Vespa',
    price: 65, rating: 4.8, reviews: 89, availability: true,
    city: 'Mumbai', fuel: 'Petrol', engine: '125cc', mileage: '50 kmpl',
    image: 'assets/images/ola.png',
    features: ['Premium Build', 'Iconic Design', 'Front Disc', 'LED DRL'],
    description: 'Ride in Italian style with the Vespa SXL 125. A premium icon on Indian roads, it offers unmatched style and build quality for those who want to stand out.'
  },
  {
    id: 7, name: 'Royal Enfield Classic 350', type: 'bike', brand: 'Royal Enfield',
    price: 85, rating: 4.9, reviews: 512, availability: true,
    city: 'Delhi', fuel: 'Petrol', engine: '349cc', mileage: '35 kmpl',
    image: 'assets/images/royal_enfield.png',
    features: ['Dual Channel ABS', 'Tripper Navigation', 'USB Charging', 'Classic Sound'],
    description: 'The Royal Enfield Classic 350 is an icon of Indian motorcycling. With its thumping engine note and timeless design, it\'s perfect for weekend getaways and city rides.'
  },
  {
    id: 8, name: 'KTM Duke 200', type: 'bike', brand: 'KTM',
    price: 80, rating: 4.7, reviews: 278, availability: true,
    city: 'Bangalore', fuel: 'Petrol', engine: '199.5cc', mileage: '32 kmpl',
    image: 'assets/images/ktm.png',
    features: ['Slipper Clutch', 'WP Suspension', 'Aggressive Style', 'Quick Shifter'],
    description: 'KTM Duke 200 is the go-to choice for performance enthusiasts. Its sharp handling and punchy motor deliver an exhilarating ride on both city streets and open highways.'
  },
  {
    id: 9, name: 'Bajaj Pulsar NS200', type: 'bike', brand: 'Bajaj',
    price: 65, rating: 4.5, reviews: 342, availability: true,
    city: 'Hyderabad', fuel: 'Petrol', engine: '199.5cc', mileage: '34 kmpl',
    image: 'assets/images/royal_enfield.png',
    features: ['Liquid Cooling', 'Back-lit Console', 'Clip-on Handlebars', 'Perimeter Frame'],
    description: 'Bajaj Pulsar NS200 packs serious performance in an accessible package. The liquid-cooled engine and sporty ergonomics make it a thrill to ride.'
  },
  {
    id: 10, name: 'Hero Splendor Plus', type: 'bike', brand: 'Hero',
    price: 28, rating: 4.4, reviews: 421, availability: true,
    city: 'Delhi', fuel: 'Petrol', engine: '97.2cc', mileage: '80 kmpl',
    image: 'assets/images/ktm.png',
    features: ['Fuel Efficient', 'Comfortable Seat', 'Easy Maintenance', 'Reliable Engine'],
    description: 'India\'s best-selling motorcycle. The Hero Splendor Plus is the most reliable and economical bike for everyday commuting with exceptional fuel efficiency.'
  },
  {
    id: 11, name: 'Yamaha FZ-S V3', type: 'bike', brand: 'Yamaha',
    price: 55, rating: 4.6, reviews: 255, availability: false,
    city: 'Mumbai', fuel: 'Petrol', engine: '149cc', mileage: '45 kmpl',
    image: 'assets/images/royal_enfield.png',
    features: ['Bluetooth Connect', 'LED Lights', 'Y-Connect App', 'Assist & Slipper Clutch'],
    description: 'Yamaha FZ-S V3 combines sporty street-fighter looks with daily rideability. The fuel-injected engine delivers smooth power with excellent throttle response.'
  },
  {
    id: 12, name: 'RE Himalayan', type: 'bike', brand: 'Royal Enfield',
    price: 100, rating: 4.8, reviews: 189, availability: true,
    city: 'Bangalore', fuel: 'Petrol', engine: '411cc', mileage: '30 kmpl',
    image: 'assets/images/ktm.png',
    features: ['Adventure Ready', 'Long Travel Suspension', 'GPS Mount', 'Bash Plate'],
    description: 'Built for exploration. The RE Himalayan conquers both city roads and mountain passes with equal confidence. The ideal companion for weekend adventure rides.'
  }
];

// Store vehicles in window
window.VEHICLES = VEHICLES;

// ── Render ──
document.addEventListener('DOMContentLoaded', () => {
  if (!document.getElementById('vehicles-grid')) return;

  let filtered = [...VEHICLES];
  let activeType = 'all';
  let activeCity = 'all';
  let maxPrice = 120;
  let searchQuery = '';
  let sortBy = 'popular';

  const grid = document.getElementById('vehicles-grid');
  const countEl = document.getElementById('results-count');
  const searchInput = document.getElementById('search-input');
  const sortSelect = document.getElementById('sort-select');
  const priceSlider = document.getElementById('price-slider');
  const priceVal = document.getElementById('price-val');

  function renderGrid() {
    grid.innerHTML = '';
    if (filtered.length === 0) {
      grid.innerHTML = `<div class="no-results">
        <div class="no-results-icon">🔍</div>
        <h3>No vehicles found</h3>
        <p>Try adjusting your filters or search terms</p>
      </div>`;
      if (countEl) countEl.innerHTML = 'Showing <span>0</span> vehicles';
      return;
    }
    if (countEl) countEl.innerHTML = `Showing <span>${filtered.length}</span> vehicles`;
    filtered.forEach(v => {
      const card = document.createElement('div');
      card.className = 'v-card fade-up';
      card.innerHTML = `
        <div class="v-card-img">
          <img src="${v.image}" alt="${v.name}" onerror="this.src='assets/images/activa.png'">
          <div class="v-card-badges">
            ${v.availability ? '<span class="badge badge-success">Available</span>' : '<span class="badge badge-error">Booked</span>'}
            ${v.fuel === 'Electric' ? '<span class="badge badge-primary">⚡ Electric</span>' : ''}
          </div>
          <span class="v-card-type">${v.type === 'scooter' ? '🛵 Scooter' : '🏍️ Bike'}</span>
          <button class="v-card-wishlist" onclick="toggleWishlist(this)" title="Add to wishlist">🤍</button>
        </div>
        <div class="v-card-body">
          <div class="v-card-top">
            <span class="v-card-name">${v.name}</span>
            <div class="v-card-price">
              <span class="amount">₹${v.price}</span>
              <span class="per">/hour</span>
            </div>
          </div>
          <div class="v-card-location">📍 ${v.city}</div>
          <div class="v-card-rating">
            <span class="stars">${renderStars(v.rating)}</span>
            <span class="val">${v.rating} (${v.reviews} reviews)</span>
          </div>
          <div class="v-card-specs">
            <div class="spec-pill"><span class="icon">⛽</span>${v.fuel}</div>
            <div class="spec-pill"><span class="icon">🔧</span>${v.engine}</div>
            <div class="spec-pill"><span class="icon">💨</span>${v.mileage}</div>
            <div class="spec-pill"><span class="icon">🏷️</span>${v.brand}</div>
          </div>
          <div class="v-card-footer">
            <a href="vehicle-detail.html?id=${v.id}" class="v-card-btn">
              Book Now →
            </a>
          </div>
        </div>
      `;
      grid.appendChild(card);
    });
    // Re-init scroll animations
    document.querySelectorAll('.fade-up').forEach(el => {
      el.classList.add('visible');
    });
  }

  function applyFilters() {
    filtered = VEHICLES.filter(v => {
      const typeOk = activeType === 'all' || v.type === activeType;
      const cityOk = activeCity === 'all' || v.city === activeCity;
      const priceOk = v.price <= maxPrice;
      const searchOk = searchQuery === '' || v.name.toLowerCase().includes(searchQuery.toLowerCase()) || v.brand.toLowerCase().includes(searchQuery.toLowerCase());
      return typeOk && cityOk && priceOk && searchOk;
    });

    // Sort
    if (sortBy === 'price-asc') filtered.sort((a, b) => a.price - b.price);
    else if (sortBy === 'price-desc') filtered.sort((a, b) => b.price - a.price);
    else if (sortBy === 'rating') filtered.sort((a, b) => b.rating - a.rating);
    else filtered.sort((a, b) => b.reviews - a.reviews);

    renderGrid();
  }

  // Type filter
  document.querySelectorAll('[data-type]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-type]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeType = btn.dataset.type;
      applyFilters();
    });
  });

  // City filter
  document.querySelectorAll('[data-city]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-city]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCity = btn.dataset.city;
      applyFilters();
    });
  });

  // Price slider
  if (priceSlider) {
    priceSlider.addEventListener('input', () => {
      maxPrice = parseInt(priceSlider.value);
      if (priceVal) priceVal.textContent = `₹${maxPrice}/hr`;
      applyFilters();
    });
  }

  // Search
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      searchQuery = searchInput.value.trim();
      applyFilters();
    });
  }

  // Sort
  if (sortSelect) {
    sortSelect.addEventListener('change', () => {
      sortBy = sortSelect.value;
      applyFilters();
    });
  }

  // Reset
  const resetBtn = document.getElementById('filter-reset');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      activeType = 'all'; activeCity = 'all'; maxPrice = 120; searchQuery = ''; sortBy = 'popular';
      document.querySelectorAll('[data-type]').forEach(b => b.classList.remove('active'));
      document.querySelector('[data-type="all"]')?.classList.add('active');
      document.querySelectorAll('[data-city]').forEach(b => b.classList.remove('active'));
      document.querySelector('[data-city="all"]')?.classList.add('active');
      if (priceSlider) priceSlider.value = 120;
      if (priceVal) priceVal.textContent = '₹120/hr';
      if (searchInput) searchInput.value = '';
      if (sortSelect) sortSelect.value = 'popular';
      applyFilters();
    });
  }

  applyFilters();
});

function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  let stars = '★'.repeat(full);
  if (half) stars += '½';
  stars += '☆'.repeat(5 - full - (half ? 1 : 0));
  return stars;
}

function toggleWishlist(btn) {
  btn.classList.toggle('loved');
  btn.textContent = btn.classList.contains('loved') ? '❤️' : '🤍';
  showToast(btn.classList.contains('loved') ? 'Added to wishlist!' : 'Removed from wishlist', btn.classList.contains('loved') ? 'success' : 'info');
}
window.toggleWishlist = toggleWishlist;
