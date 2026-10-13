/* OompahME: small progressive enhancements. The page works without this file. */
(function () {
  'use strict';

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

  /* ---------- Set list genre filter ---------- */
  var filterBar = document.querySelector('.setlist__filters');
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
      b.setAttribute('aria-controls', 'setlist-groups');
      filterBar.appendChild(b);
      buttons.push(b);
    }

    addButton('All', 'All');
    groups.forEach(function (g) {
      addButton(g.dataset.genre, g.dataset.label || g.dataset.genre);
    });

    var container = document.querySelector('.setlist__groups');
    if (container) container.id = 'setlist-groups';

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
})();
