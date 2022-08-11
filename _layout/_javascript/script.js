'use strict';
// ! *********** FOR LESSONS NAMES *********** //
// ? *********** FOR REGULAR COMMENTS *********** //
const counters = document.querySelectorAll('.counter');

counters.forEach(function (counter) {
  counter.innerText = '0';

  const updateCounter = function () {
    const target = +counter.getAttribute('data-target');

    const c = +counter.innerText;

    const increment = target / 400;

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 1);
    }
  };

  updateCounter();
});
