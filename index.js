(function(){

  'use strict';

  document.addEventListener('click', function(event) {
    console.log(event.target);

    if (event.target.matches('div input')) {
      alert('This is ' + event.target.value);
    }
  }, false);

}());
