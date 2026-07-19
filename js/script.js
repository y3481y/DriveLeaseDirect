// ---------- Lease calculator ----------
// Simple illustrative pricing model — pas de basisprijs en factoren
// hieronder aan naar jouw eigen tarieven.
(function () {
  const looptijdInput = document.getElementById('looptijd');
  const kmInput = document.getElementById('kmPerJaar');
  const looptijdVal = document.getElementById('looptijdVal');
  const kmVal = document.getElementById('kmVal');
  const odometer = document.getElementById('odometer');

  if (!looptijdInput || !kmInput || !odometer) return;

  const BASISPRIJS = 349; // richtprijs bij 60 mnd / 10.000 km
  const MAX_TOESLAG = 180; // extra bij kortste looptijd + meeste km

  function berekenPrijs(looptijd, km) {
    const looptijdFactor = (60 - looptijd) / 48; // 0 bij 60 mnd, 1 bij 12 mnd
    const kmFactor = (km - 10000) / 20000; // 0 bij 10.000, 1 bij 30.000
    const opslag = (looptijdFactor * 0.6 + kmFactor * 0.4) * MAX_TOESLAG;
    return Math.round(BASISPRIJS + opslag);
  }

  function renderOdometer(value) {
    const digits = String(value).padStart(3, '0').split('');
    odometer.innerHTML = digits
      .map((d) => `<span class="digit">${d}</span>`)
      .join('');
  }

  function update() {
    const looptijd = Number(looptijdInput.value);
    const km = Number(kmInput.value);
    looptijdVal.textContent = looptijd + ' mnd';
    kmVal.textContent = km.toLocaleString('nl-NL') + ' km';
    renderOdometer(berekenPrijs(looptijd, km));
  }

  looptijdInput.addEventListener('input', update);
  kmInput.addEventListener('input', update);
  update();
})();

// ---------- Scroll reveal ----------
(function () {
  const items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window) || items.length === 0) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  items.forEach((item) => observer.observe(item));
})();

// ---------- Contact form (front-end only) ----------
(function () {
  const form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    alert(
      'Bedankt voor je aanvraag! Dit formulier is nog niet gekoppeld aan een verzendservice — zie de README voor hoe je dit instelt (bv. via Formspree).'
    );
    form.reset();
  });
})();
