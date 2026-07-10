/* ===================================================
   RideEasy – Booking Confirmation Page Logic
=================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const bookingData = JSON.parse(sessionStorage.getItem('booking') || '{}');

  // If no booking data, use demo data
  const data = Object.keys(bookingData).length > 0 ? bookingData : {
    vehicleId: 7, vehicleName: 'Royal Enfield Classic 350', vehicleImage: 'assets/images/royal_enfield.png',
    vehicleType: 'bike', hours: 24, basePrice: 2040, serviceFee: 204, insurance: 50, total: 2294,
    pickupDate: new Date().toISOString().split('T')[0],
    returnDate: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    pickupTime: '09:00', city: 'Delhi'
  };

  // Populate summary card
  const summaryImg = document.getElementById('summary-img');
  const summaryName = document.getElementById('summary-name');
  const summaryType = document.getElementById('summary-type');
  const summaryPickup = document.getElementById('summary-pickup');
  const summaryReturn = document.getElementById('summary-return');
  const summaryDuration = document.getElementById('summary-duration');
  const summaryCity = document.getElementById('summary-city');
  const summaryTotal = document.getElementById('summary-total');
  const summaryBase = document.getElementById('summary-base');
  const summaryService = document.getElementById('summary-service');
  const summaryInsurance = document.getElementById('summary-insurance');

  if (summaryImg) { summaryImg.src = data.vehicleImage; summaryImg.alt = data.vehicleName; }
  if (summaryName) summaryName.textContent = data.vehicleName;
  if (summaryType) summaryType.textContent = data.vehicleType === 'scooter' ? '🛵 Scooter' : '🏍️ Bike';
  if (summaryPickup) summaryPickup.textContent = formatDate(data.pickupDate) + ' ' + formatTime(data.pickupTime);
  if (summaryReturn) summaryReturn.textContent = formatDate(data.returnDate);
  if (summaryDuration) summaryDuration.textContent = data.hours >= 24 ? `${Math.round(data.hours/24)} day(s)` : `${data.hours} hour(s)`;
  if (summaryCity) summaryCity.textContent = data.city;
  if (summaryTotal) summaryTotal.textContent = `₹${data.total}`;
  if (summaryBase) summaryBase.textContent = `₹${data.basePrice}`;
  if (summaryService) summaryService.textContent = `₹${data.serviceFee}`;
  if (summaryInsurance) summaryInsurance.textContent = `₹${data.insurance}`;

  // Payment method selection
  document.querySelectorAll('.payment-method').forEach(method => {
    method.addEventListener('click', () => {
      document.querySelectorAll('.payment-method').forEach(m => m.classList.remove('selected'));
      method.classList.add('selected');
      method.querySelector('input[type="radio"]').checked = true;
    });
  });

  // Form validation
  const form = document.getElementById('booking-form');
  const confirmBtn = document.getElementById('confirm-btn');
  const successScreen = document.getElementById('success-screen');
  const formSection = document.getElementById('form-section');

  if (confirmBtn) {
    confirmBtn.addEventListener('click', () => {
      if (!validateForm()) return;

      confirmBtn.disabled = true;
      confirmBtn.innerHTML = '<span class="spinner"></span> Processing...';

      setTimeout(() => {
        // Show success
        if (formSection) formSection.style.display = 'none';
        if (successScreen) {
          successScreen.classList.add('visible');
          const bookingId = 'RE' + Date.now().toString().slice(-8).toUpperCase();
          const bookingIdEl = document.getElementById('booking-id');
          if (bookingIdEl) bookingIdEl.textContent = bookingId;

          // Store booking ID
          sessionStorage.setItem('lastBookingId', bookingId);
        }
        showToast('Booking confirmed! 🎉', 'success');
      }, 2000);
    });
  }

  function validateForm() {
    const name = document.getElementById('full-name')?.value?.trim();
    const phone = document.getElementById('phone')?.value?.trim();
    const email = document.getElementById('email')?.value?.trim();
    const paymentSelected = document.querySelector('.payment-method.selected');

    if (!name) { showToast('Please enter your full name', 'error'); return false; }
    if (!phone || !/^[6-9]\d{9}$/.test(phone)) { showToast('Enter a valid 10-digit Indian mobile number', 'error'); return false; }
    if (!email || !/\S+@\S+\.\S+/.test(email)) { showToast('Enter a valid email address', 'error'); return false; }
    if (!paymentSelected) { showToast('Please select a payment method', 'error'); return false; }
    return true;
  }

  // Go back button
  const backBtn = document.getElementById('back-btn');
  if (backBtn) backBtn.addEventListener('click', () => window.history.back());
});

function formatDate(dateStr) {
  if (!dateStr) return '—';
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
}
function formatTime(timeStr) {
  if (!timeStr) return '';
  const [h, m] = timeStr.split(':');
  const hour = parseInt(h);
  return `${hour % 12 || 12}:${m} ${hour < 12 ? 'AM' : 'PM'}`;
}
