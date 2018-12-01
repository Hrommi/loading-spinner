document.querySelector('#loader').addEventListener('click', loading);

function loading() {
  var loader = this;
  loader.classList.add('loader--loading');
  setTimeout(function() {
    loader.classList.add('loader--loaded');
  }, 4000);

  // reload
  setTimeout(function() {
    reload()
  }, 6000);
}

function reload() {
  var loader = document.getElementById('loader');
  loader.classList.remove('loader--loading');
  loader.classList.remove('loader--loaded');
}
