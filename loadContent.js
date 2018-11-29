/* Автор - Пряхин Игорь  ::  BART96  ::  Author - Prjakhin Igor */
/* Уважайте чужой труд.  ::  Respect other peoples work. */

'use strict';

const delay = document.currentScript.getAttribute('delay');
const cards = document.currentScript.getAttribute('cards');


let container = document.querySelector('#content .container');
container.innerHTML = container.innerHTML.repeat(cards);


setTimeout(() => {
  function fadeOut() {(app.style.opacity -= .05) > 0 ? setTimeout(fadeOut, 20) : next();}
  function next() {loader.style.display = "none"; elems.forEach(el => el.removeAttribute('style')); fadeIn();}
  function fadeIn() {(app.style.opacity = +app.style.opacity + .05) < 1 ? setTimeout(fadeIn, 20) : app.removeAttribute('style');}

  let app = document.getElementById('app');
  let loader = document.getElementById('loader');
  let elems = document.querySelectorAll('#app > *:not(#loader)');

  fadeOut(app.style.opacity = 1)
}, delay * 1000);
