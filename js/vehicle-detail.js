/* ===================================================
   RideEasy – Vehicle Detail Page Logic
=================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const vehicleId = parseInt(params.get('id')) || 1;

  const VEHICLES = [
    { id:1, name:'Honda Activa 6G', type:'scooter', brand:'Honda', price:40, rating:4.7, reviews:312, availability:true, city:'Delhi', fuel:'Petrol', engine:'109.51cc', mileage:'60 kmpl', image:'assets/images/activa.png', features:['Keyless Start','LED Headlight','Mobile Charging','Silent Start','Side Stand Indicator','Pass Switch'], description:'The most popular scooter in India. Honda Activa 6G comes with a powerful BS6 engine, LED all-around lighting, and a comfortable riding position perfect for city commutes. With a large under-seat storage and silent start technology, it offers daily convenience like no other.' },
    { id:2, name:'TVS Jupiter Classic', type:'scooter', brand:'TVS', price:35, rating:4.5, reviews:198, availability:true, city:'Mumbai', fuel:'Petrol', engine:'109.7cc', mileage:'62 kmpl', image:'assets/images/jupiter.png', features:['Under-seat Storage','USB Charger','Retro Design','Eco Mode','Auto Headlamp','Sync Braking'], description:'TVS Jupiter Classic blends retro styling with modern convenience. Spacious underbody storage and a smooth ride make it ideal for daily use. The synchronised braking system adds extra safety.' },
    { id:3, name:'Ola S1 Pro', type:'scooter', brand:'Ola', price:55, rating:4.3, reviews:145, availability:true, city:'Bangalore', fuel:'Electric', engine:'Electric Motor', mileage:'181 km/charge', image:'assets/images/ola.png', features:['App Connected','Fast Charging','Reverse Mode','Cruise Control','Hill Hold','Voice Control'], description:"India's premium electric scooter. Ola S1 Pro delivers thrilling performance with zero emissions. Connected technology and a massive 5.1 touchscreen set it apart from the competition." },
    { id:4, name:'Suzuki Access 125', type:'scooter', brand:'Suzuki', price:38, rating:4.6, reviews:231, availability:false, city:'Hyderabad', fuel:'Petrol', engine:'124cc', mileage:'65 kmpl', image:'assets/images/activa.png', features:['Auto Start/Stop','Digital Console','Smooth Ride','Spacious Seat'], description:'Suzuki Access 125 is known for its exceptional refinement and ride quality. The 125cc engine offers effortless cruising on busy roads.' },
    { id:5, name:'Hero Maestro Edge', type:'scooter', brand:'Hero', price:30, rating:4.2, reviews:167, availability:true, city:'Delhi', fuel:'Petrol', engine:'110.9cc', mileage:'58 kmpl', image:'assets/images/jupiter.png', features:['I3S Technology','Auto Headlamp','Bluetooth Console','ABS'], description:'Hero Maestro Edge brings sporty design to the scooter segment. The idle stop-start system saves fuel in heavy city traffic.' },
    { id:6, name:'Vespa SXL 125', type:'scooter', brand:'Vespa', price:65, rating:4.8, reviews:89, availability:true, city:'Mumbai', fuel:'Petrol', engine:'125cc', mileage:'50 kmpl', image:'assets/images/ola.png', features:['Premium Build','Iconic Design','Front Disc','LED DRL'], description:'Ride in Italian style with the Vespa SXL 125. A premium icon on Indian roads, it offers unmatched style and build quality.' },
    { id:7, name:'Royal Enfield Classic 350', type:'bike', brand:'Royal Enfield', price:85, rating:4.9, reviews:512, availability:true, city:'Delhi', fuel:'Petrol', engine:'349cc', mileage:'35 kmpl', image:'assets/images/royal_enfield.png', features:['Dual Channel ABS','Tripper Navigation','USB Charging','Classic Sound','Halogen Headlamp','Rearset Footpegs'], description:"The Royal Enfield Classic 350 is an icon of Indian motorcycling. With its thumping engine note and timeless design, it's perfect for weekend getaways and city rides alike." },
    { id:8, name:'KTM Duke 200', type:'bike', brand:'KTM', price:80, rating:4.7, reviews:278, availability:true, city:'Bangalore', fuel:'Petrol', engine:'199.5cc', mileage:'32 kmpl', image:'assets/images/ktm.png', features:['Slipper Clutch','WP Suspension','Aggressive Style','Quick Shifter','Supermoto ABS'], description:'KTM Duke 200 is the go-to choice for performance enthusiasts. Its sharp handling and punchy motor deliver an exhilarating ride on both city streets and open highways.' },
    { id:9, name:'Bajaj Pulsar NS200', type:'bike', brand:'Bajaj', price:65, rating:4.5, reviews:342, availability:true, city:'Hyderabad', fuel:'Petrol', engine:'199.5cc', mileage:'34 kmpl', image:'assets/images/royal_enfield.png', features:['Liquid Cooling','Back-lit Console','Clip-on Handlebars','Perimeter Frame'], description:'Bajaj Pulsar NS200 packs serious performance in an accessible package. The liquid-cooled engine and sporty ergonomics make it a thrill to ride.' },
    { id:10, name:'Hero Splendor Plus', type:'bike', brand:'Hero', price:28, rating:4.4, reviews:421, availability:true, city:'Delhi', fuel:'Petrol', engine:'97.2cc', mileage:'80 kmpl', image:'assets/images/ktm.png', features:['Fuel Efficient','Comfortable Seat','Easy Maintenance','Reliable Engine'], description:"India's best-selling motorcycle. The Hero Splendor Plus is the most reliable and economical bike for everyday commuting with exceptional fuel efficiency." },
    { id:11, name:'Yamaha FZ-S V3', type:'bike', brand:'Yamaha', price:55, rating:4.6, reviews:255, availability:false, city:'Mumbai', fuel:'Petrol', engine:'149cc', mileage:'45 kmpl', image:'assets/images/royal_enfield.png', features:['Bluetooth Connect','LED Lights','Y-Connect App','Assist & Slipper Clutch'], description:'Yamaha FZ-S V3 combines sporty street-fighter looks with daily rideability. The fuel-injected engine delivers smooth power.' },
    { id:12, name:'RE Himalayan', type:'bike', brand:'Royal Enfield', price:100, rating:4.8, reviews:189, availability:true, city:'Bangalore', fuel:'Petrol', engine:'411cc', mileage:'30 kmpl', image:'assets/images/ktm.png', features:['Adventure Ready','Long Travel Suspension','GPS Mount','Bash Plate','Knobby Tyres'], description:'Built for exploration. The RE Himalayan conquers both city roads and mountain passes with equal confidence. The ideal companion for weekend adventure rides.' }
  ];

  const vehicle = VEHICLES.find(v => v.id === vehicleId) || VEHICLES[0];

  // Populate UI
  document.title = `${vehicle.name} – RideEasy`;

  // Images
  const mainImg = document.getElementById('gallery-main-img');
  const thumbsContainer = document.getElementById('gallery-thumbs');
  if (mainImg) mainImg.src = vehicle.image;
  if (thumbsContainer) {
    [vehicle.image, vehicle.image, vehicle.image].forEach((img, i) => {
      const thumb = document.createElement('div');
      thumb.className = `gallery-thumb ${i === 0 ? 'active' : ''}`;
      thumb.innerHTML = `<img src="${img}" alt="View ${i+1}">`;
      thumb.addEventListener('click', () => {
        document.querySelectorAll('.gallery-thumb').forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
        if (mainImg) mainImg.src = img;
      });
      thumbsContainer.appendChild(thumb);
    });
  }

  // Name, Type
  const nameEl = document.getElementById('vehicle-name');
  const typeEl = document.getElementById('vehicle-type');
  const availEl = document.getElementById('vehicle-availability');
  const priceEl = document.getElementById('vehicle-price');
  const ratingEl = document.getElementById('vehicle-rating');
  const reviewsEl = document.getElementById('vehicle-reviews');
  const descEl = document.getElementById('vehicle-desc');

  if (nameEl) nameEl.textContent = vehicle.name;
  if (typeEl) typeEl.textContent = vehicle.type === 'scooter' ? '🛵 Scooter' : '🏍️ Bike';
  if (availEl) {
    availEl.textContent = vehicle.availability ? '✅ Available' : '❌ Unavailable';
    availEl.className = `badge ${vehicle.availability ? 'badge-success' : 'badge-error'}`;
  }
  if (priceEl) priceEl.textContent = `₹${vehicle.price}`;
  if (ratingEl) ratingEl.textContent = vehicle.rating;
  if (reviewsEl) reviewsEl.textContent = `${vehicle.reviews} reviews`;
  if (descEl) descEl.textContent = vehicle.description;

  // Specs
  const specFuel = document.getElementById('spec-fuel');
  const specEngine = document.getElementById('spec-engine');
  const specMileage = document.getElementById('spec-mileage');
  const specBrand = document.getElementById('spec-brand');
  const specCity = document.getElementById('spec-city');
  const specType = document.getElementById('spec-type');
  if (specFuel) specFuel.textContent = vehicle.fuel;
  if (specEngine) specEngine.textContent = vehicle.engine;
  if (specMileage) specMileage.textContent = vehicle.mileage;
  if (specBrand) specBrand.textContent = vehicle.brand;
  if (specCity) specCity.textContent = vehicle.city;
  if (specType) specType.textContent = vehicle.type.charAt(0).toUpperCase() + vehicle.type.slice(1);

  // Features
  const featuresContainer = document.getElementById('vehicle-features');
  if (featuresContainer) {
    vehicle.features.forEach(f => {
      const tag = document.createElement('span');
      tag.className = 'feature-tag';
      tag.innerHTML = `✓ ${f}`;
      featuresContainer.appendChild(tag);
    });
  }

  // Stars
  document.querySelectorAll('.vehicle-stars').forEach(el => {
    const full = Math.floor(vehicle.rating);
    el.textContent = '★'.repeat(full) + (vehicle.rating % 1 >= 0.5 ? '½' : '') + '☆'.repeat(5 - full - (vehicle.rating % 1 >= 0.5 ? 1 : 0));
  });

  // Booking form
  const pickupDate = document.getElementById('pickup-date');
  const returnDate = document.getElementById('return-date');
  const pickupTime = document.getElementById('pickup-time');

  // Set min dates
  const now = new Date();
  const todayStr = now.toISOString().split('T')[0];
  if (pickupDate) { pickupDate.min = todayStr; pickupDate.value = todayStr; }
  if (returnDate) {
    const tomorrow = new Date(now); tomorrow.setDate(tomorrow.getDate() + 1);
    returnDate.min = todayStr; returnDate.value = tomorrow.toISOString().split('T')[0];
  }
  if (pickupTime) pickupTime.value = '09:00';

  function calcPrice() {
    const pd = new Date(pickupDate?.value || todayStr);
    const rd = new Date(returnDate?.value || todayStr);
    let hours = Math.max(1, Math.round((rd - pd) / (1000 * 60 * 60)));
    if (hours <= 0) hours = 24;

    const basePrice = vehicle.price * hours;
    const serviceFee = Math.round(basePrice * 0.1);
    const insurance = 50;
    const total = basePrice + serviceFee + insurance;

    const durationEl = document.getElementById('duration-display');
    const basePriceEl = document.getElementById('base-price');
    const serviceFeeEl = document.getElementById('service-fee');
    const insuranceEl = document.getElementById('insurance-fee');
    const totalEl = document.getElementById('total-price');

    if (durationEl) durationEl.textContent = hours >= 24 ? `${Math.round(hours/24)} day(s)` : `${hours} hour(s)`;
    if (basePriceEl) basePriceEl.textContent = `₹${basePrice}`;
    if (serviceFeeEl) serviceFeeEl.textContent = `₹${serviceFee}`;
    if (insuranceEl) insuranceEl.textContent = `₹${insurance}`;
    if (totalEl) totalEl.textContent = `₹${total}`;

    // Save booking data for next page
    sessionStorage.setItem('booking', JSON.stringify({
      vehicleId: vehicle.id, vehicleName: vehicle.name, vehicleImage: vehicle.image,
      vehicleType: vehicle.type, hours, basePrice, serviceFee, insurance, total,
      pickupDate: pickupDate?.value, returnDate: returnDate?.value, pickupTime: pickupTime?.value,
      city: vehicle.city
    }));
  }

  if (pickupDate) pickupDate.addEventListener('change', calcPrice);
  if (returnDate) returnDate.addEventListener('change', calcPrice);
  if (pickupTime) pickupTime.addEventListener('change', calcPrice);
  calcPrice();

  // Book Now button
  const bookBtn = document.getElementById('book-now-btn');
  if (bookBtn) {
    bookBtn.addEventListener('click', () => {
      if (!vehicle.availability) { showToast('This vehicle is currently unavailable', 'error'); return; }
      window.location.href = 'booking.html';
    });
  }
});
