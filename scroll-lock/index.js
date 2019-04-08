(function(){
  'use strict';

  function onDOMContentLoaded() {
    var menu = document.getElementById('js-menu');
    var button = document.getElementById('js-button');

    button.addEventListener('click', function() {
      if (/none/i.test(menu.style.display)) {
        menu.style.display = 'block';
        scrollLock.disablePageScroll(menu);
      } else {
        scrollLock.enablePageScroll(menu);
        menu.style.display = 'none';
      }
    }, false);
  }

  document.addEventListener('DOMContentLoaded', onDOMContentLoaded, false);
}());
