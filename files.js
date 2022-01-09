

var fileInput = document.querySelector('#file');

fileInput.addEventListener('change', function(event) {
  var fileList = event.target.files;
  var file = fileList[0];

  var url = URL.createObjectURL(file);

  console.log(url);
  var img = document.createElement('img');
  img.src = url;

  document.querySelector('section').append(img);
});
