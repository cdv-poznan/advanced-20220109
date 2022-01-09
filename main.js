
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


var listA = document.querySelectorAll('ul');

var listB = $('ul');

/*
var array = ['a', 'b'];

array.map(function(element, index) {
  console.log(index, element);
});

var mappedListB = listB.map(function(index, element) {
  console.log(index, element);
  return element;
});

var filteredListB = listB.filter(function(index, element) {
  return index === 1;
});

listB.each(function(index, element) {
  console.log('each', element);
});
*/

/*
$('ul').hide(); // ukrywa elementy
$('ul').show(); // pokazuje elementy
$('ul').toggle(); // ukrywa elementy widoczne a pokazuje ukryte
*/

$('li').fadeOut(); // ukrywa elementy z animacją
$('li').fadeIn(); // pokazuje elementy z animacją
$('li').fadeToggle(); // jak `.toggle()` ale z animacją
