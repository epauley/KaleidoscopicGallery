function toggleMenu(){
  var toggle = document.getElementById('toggle');
  var menu = document.getElementById('menu');

  if (menu.classList.contains('is-active')) {
    toggle.setAttribute('aria-expanded', 'false');
    menu.classList.remove('is-active');
  } else {
    menu.classList.add('is-active');
    toggle.setAttribute('aria-expanded', 'true');
  }
}
