/* OompahME: small progressive enhancements. The page works without this file. */
(function () {
  'use strict';

  var CONTACT_EMAIL = 'hello@oompah.me';

  /* ---------- Mobile nav toggle ---------- */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');

  function setNav(open) {
    toggle.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('is-open', open);
  }

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      setNav(toggle.getAttribute('aria-expanded') !== 'true');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) setNav(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        setNav(false);
        toggle.focus();
      }
    });
  }

  /* ---------- Songbook genre filter ---------- */
  var filterBar = document.querySelector('.songbook__filters');
  var groups = Array.prototype.slice.call(document.querySelectorAll('.genre[data-genre]'));

  // Keep "N selections" in sync with the list, so editors only touch the <li>s.
  groups.forEach(function (g) {
    var count = g.querySelectorAll('.genre__songs li').length;
    var label = g.querySelector('.genre__count');
    if (label) label.textContent = count + (count === 1 ? ' selection' : ' selections');
  });

  if (filterBar && groups.length) {
    var buttons = [];

    function addButton(value, label) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'filter';
      b.textContent = label;
      b.dataset.filter = value;
      b.setAttribute('aria-pressed', value === 'All' ? 'true' : 'false');
      b.setAttribute('aria-controls', 'songbook-groups');
      filterBar.appendChild(b);
      buttons.push(b);
    }

    addButton('All', 'All');
    groups.forEach(function (g) {
      addButton(g.dataset.genre, g.dataset.label || g.dataset.genre);
    });

    var container = document.querySelector('.songbook__groups');
    if (container) container.id = 'songbook-groups';

    filterBar.addEventListener('click', function (e) {
      var btn = e.target.closest('.filter');
      if (!btn) return;
      var value = btn.dataset.filter;
      buttons.forEach(function (b) {
        b.setAttribute('aria-pressed', b === btn ? 'true' : 'false');
      });
      groups.forEach(function (g) {
        g.hidden = value !== 'All' && g.dataset.genre !== value;
      });
    });

    filterBar.hidden = false;
  }

  /* ---------- Booking form (Formspree) ---------- */
  var form = document.getElementById('booking-form');
  var thanks = document.getElementById('booking-thanks');
  var reset = document.getElementById('booking-reset');
  var errorBox = document.getElementById('booking-error');

  function fieldValue(name) {
    var el = form.elements[name];
    return el ? el.value.trim() : '';
  }

  function mailtoHref() {
    var body = [
      'Name: ' + fieldValue('name'),
      'Email: ' + fieldValue('email'),
      'Event date: ' + fieldValue('date'),
      'Occasion: ' + fieldValue('type'),
      '',
      'Venue & details:',
      fieldValue('message')
    ].join('\n');
    return 'mailto:' + CONTACT_EMAIL +
      '?subject=' + encodeURIComponent('Booking inquiry') +
      '&body=' + encodeURIComponent(body);
  }

  function showThanks() {
    form.hidden = true;
    errorBox.hidden = true;
    thanks.hidden = false;
    thanks.focus();
  }

  function showError() {
    errorBox.textContent = '';
    errorBox.appendChild(document.createTextNode('Sorry, that didn’t go through. Please '));
    var a = document.createElement('a');
    a.href = mailtoHref();
    a.textContent = 'email us at ' + CONTACT_EMAIL;
    errorBox.appendChild(a);
    errorBox.appendChild(document.createTextNode(' and your details will be filled in for you.'));
    errorBox.hidden = false;
  }

  if (form && thanks && window.fetch && window.FormData) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var submit = form.querySelector('[type="submit"]');

      // Honeypot tripped: pretend success, send nothing.
      if (fieldValue('_gotcha')) { form.reset(); showThanks(); return; }

      // Form ID not configured yet: go straight to the email fallback.
      if (/\/FORM_ID$/.test(form.action)) { showError(); return; }

      submit.disabled = true;
      fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      }).then(function (res) {
        if (!res.ok) throw new Error('HTTP ' + res.status);
        form.reset();
        showThanks();
      }).catch(function () {
        showError();
      }).then(function () {
        submit.disabled = false;
      });
    });

    reset.addEventListener('click', function () {
      thanks.hidden = true;
      form.hidden = false;
      document.getElementById('f-name').focus();
    });
  }
})();
