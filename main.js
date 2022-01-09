
window.addEventListener('beforeunload', function(event) {
  console.log(event);
});


window.addEventListener('hashchange', function(event) {
  console.log('navigation:', event.oldURL, '->', event.newURL);
});

/**
 * Zadanie 12
Napisz skrypt wyświetlający aktualny adres URL strony na której został załadowany.
Wartość powinna być również aktualizowana w przypadku zmiany hasha bez przeładowania strony.
 */

document.addEventListener('DOMContentLoaded', function() {
  var locationLabel = document.getElementById('location');
  locationLabel.innerText = window.location.toString();

  window.addEventListener('hashchange', function(event) {
    locationLabel.innerText = event.newURL;
  });
});
