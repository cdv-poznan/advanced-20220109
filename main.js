window.addEventListener("beforeunload", function (event) {
  console.log(event);
});

window.addEventListener("hashchange", function (event) {
  console.log("navigation:", event.oldURL, "->", event.newURL);
});

/**
 * Zadanie 12
Napisz skrypt wyświetlający aktualny adres URL strony na której został załadowany.
Wartość powinna być również aktualizowana w przypadku zmiany hasha bez przeładowania strony.
 */

document.addEventListener("DOMContentLoaded", function () {
  var locationLabel = document.getElementById("location");
  locationLabel.innerText = window.location.toString();

  window.addEventListener("hashchange", function (event) {
    locationLabel.innerText = event.newURL;
  });
});

var listA = document.querySelectorAll("ul");

var listB = $("ul");

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

// $('li').fadeOut(); // ukrywa elementy z animacją
// $('li').fadeIn(); // pokazuje elementy z animacją
// $('li').fadeToggle(); // jak `.toggle()` ale z animacją

$("button").attr("disabled", false);

$("input").css("background", "#0f0");

var heading = $('<h3 id="idh3" class="heading">Hello jQuery</h3>');

$("section:nth-of-type(3)").html(heading);
$("section").first().append(heading);

$("section").last().remove();

$("li").click(function (event) {
  console.log(event.target);
});

/*
$('input').hover(function(event) {
  console.log(event);
});
*/

$("input").first().val(); // zwraca wartość elementu
$("input").first().val("adrian"); // ustawia wartość elementu

$("input")
  .first()
  .change(function (event) {
    console.log(event);
  });

$(".red").animate({ opacity: 0.2 }, 1000);
$("h1").animate({ fontSize: "50px" }, 2000);

function getErrorPromise() {
  return fetch("http://google.com");
}

function getPromise() {
  return fetch("https://api.github.com/users/juszczak");
}

/*
var promise1 = getPromise();
console.log('Promise 1', promise1);
promise1.then(function(promisedValue) { // przejście ze stanu pending -> fulfilled
  console.log('Promise 1', promise1);
});
promise1.finally(function() {
  console.log('Promise 1 finally');
});

var promise2 = getErrorPromise();
console.log('Promise 2', promise2);

promise2.catch(function(errorValue) {
  console.log('Promise 2', promise2);
});

promise2.finally(function() {
  console.log('Promise 2 finally');
});
*/

/*
var promise3 = getPromise();

promise3.then(function(value) {
  console.log('promise has returned value', value);
}).catch(function(error) {
  console.log('promise error', error);
}).finally(function() {
  console.log('promise has finished');
});
*/

/*
var promise = new Promise(function(resolve, reject) {
  setTimeout(function() {
    if (Math.random() > 0.5) {
      resolve();
    } else {
      reject();
    }
  }, 5000)
});
*/

/*
  Promise:
    * pending - początkowy stan
    * a) fulfilled - sukces
    * b) rejected - błąd

 */

/*
// przejście ze stanu pendig do stanu fulfilled (metoda then)
promise.then(function(value) {
  console.log('promise has been resolved', value);
}).catch(function(error) { // przejście ze stanu pending do stanu rejected
  console.log('error during async operation');
}).finally(function() { // zawsze na koniec
  console.log('end');
});
*/

var promise4 = Promise.resolve();
// var promise5 = Promise.reject();

/**
 * Zadanie 1
Napisz funkcję zwracającą Promise, który po pewnym czasie losowo zmieni status na fulfilled bądź rejected.
*/

function getRandomPromise() {
  return new Promise(function (resolve, reject) {
    var timeout = Math.floor(Math.random() * 5) * 1000;

    setTimeout(function () {
      if (Math.random() > 0.5) {
        resolve(timeout);
      } else {
        reject(timeout);
      }
    }, timeout);
  });
}

/*
var randomPromise = getRandomPromise();

randomPromise.then(function(timeout) {
  console.log('promise przeszedł do stanu fulfilled po', timeout, 's');
}).catch(function(timeout) {
  console.log('promise przeszedł do stanu rejected po', timeout, 's');
})
*/

var req = new XMLHttpRequest();
var obj;

req.open("GET", "https://reqres.in/api/colors");
// req.open('GET', 'https://api.github.com/users/juszczakaaaaaa');

// a)
req.addEventListener("load", function (event) {
  console.log(event.target);
  if (event.target.status === 200) {
    console.log("ok");
  } else {
    console.log("możliwy błąd", event.target.status);
  }
});

// b)
// req.onload = function(event) {
//   console.log(event.target.responseText);
// }

req.addEventListener("error", function (event) {
  console.log("cannot get data", event);
});

// req.send();

var req2 = new XMLHttpRequest();

req2.addEventListener("load", function (event) {
  console.log(event.target);
});

req2.open("POST", "https://reqres.in/api/users");

var user = {
  name: "morpheus",
  job: "leader",
};

var body = JSON.stringify(user);

req2.setRequestHeader("Accept", "application/json");
// req2.send(body);

/* Fetch API */
var response = fetch("https://reqres.in/api/colors");

/*
response
  .then(function (response) {
    var json = response.json();
    json.then(function (data) {
      console.log(data);
    });
  })
  .catch(function (error) {});
  */

response
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
