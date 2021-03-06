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

/*
response
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
  */

/* Zadanie 2
Napisz funkcję, która pobierze informacje o użytkowniku poprzez GitHub API oraz wyświetli je na ekranie.
*/

/*
var getUserInfo = function(user) {
  var users = "https://api.github.com/users/"+ user
  return fetch(users)
}.then(function (users) {
  return users.json();
})
.then(function (data) {
  console.log(data);
});
*/

function getUserInfo(user) {
  var url = "https://api.github.com/users/" + user;
  return fetch(url)
    .then(function (userInfo) {
      return userInfo.json();
    })
    .then(function (data) {
      return data;
    });
}

/*
getUserInfo("juszczak").then(function (user) {
  console.log(user);
});
*/

var user = {
  name: "morpheus",
  job: "leader",
};

var reqConfig = {
  method: "POST",
  headers: {
    Accept: "application/json",
  },
  body: JSON.stringify(user),
};

/*
fetch("https://reqres.in/api/users", reqConfig).then(function (response) {
  console.log(response);
});
*/

/* Cookies */

// document.cookie = 'username=Adrian';
// document.cookie = 'lastname=Juszczak;max-age=100'; // max-age w sekundach
// document.cookie = 'a=b';

/*
 * Zadanie 3
Napisz skrypt, który poprosi użytkownika o podanie swojego imienia a następnie
przywita go wykorzystując tę informację przy każdej kolejnej wizycie na stronie.
*/

var cookies = document.cookie.split('; ').map(function(cookie) {
  return cookie.split('=');
});

var returningVisitor = cookies.find(function(cookie) {
  return cookie[0] === 'username';
});

/*
if (returningVisitor) {
  document.getElementById('greeting').innerText = 'Hello ' + returningVisitor[1] + '!';
} else {
  var input = document.createElement('input');
  input.placeholder = 'What is your name?';
  input.addEventListener('change', function() {
    document.cookie = 'username=' + input.value;
  });
  document.getElementById('greeting').append(input);
}
*/
/*
if (returningVisitor) {
  alert('Hello ' + returningVisitor[1]);
} else {
  var username = prompt('What is your name?');
  document.cookie = 'username=' + username;
}
*/

// dane przechowywane w nieskończoność
localStorage.setItem('local_user_name', 'Adrian');

localStorage.getItem('local_user_name');

localStorage.removeItem('local_user_name');


// dane per zakładka, czyszczone po zamknięciu przeglądarki
sessionStorage.setItem('session_user_name', 'Adrian');

sessionStorage.getItem('session_user_name');

sessionStorage.removeItem('session_user_name');

/*
 * Zadanie 4
Napisz skrypt, który podczas zmiany wartości pól formularza zapisze je w przeglądarce
i odtworzy przy kolejnej wizycie użytkownika.
*/

var form = document.querySelector('#zadanie4');
var inputs = form.getElementsByTagName('input');

for (var i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener('change', function(event) {
    localStorage.setItem(event.target.name, event.target.value);
  });

  var val = localStorage.getItem(inputs[i].name);
  if(val) {
    inputs[i].value = val;
  }
}
