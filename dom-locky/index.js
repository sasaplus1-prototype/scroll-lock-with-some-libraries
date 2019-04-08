(function(){
  'use strict';

  var unlock = function() {};

  function onDOMContentLoaded() {
    var menu = document.getElementById('js-menu');
    var button = document.getElementById('js-button');

    button.addEventListener('click', function() {
      if (/none/i.test(menu.style.display)) {
        menu.style.display = 'block';
        unlock = locky.lockyOn(menu, {});
      } else {
        unlock();
        menu.style.display = 'none';
      }
    }, false);
  }

  document.addEventListener('DOMContentLoaded', onDOMContentLoaded, false);
}());
