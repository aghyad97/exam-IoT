const main = document.querySelector('#main');


$(document).ready( function() {
  $.ajax({
    type: 'GET',
    url: 'http://127.0.0.1:8080',
    dataType: 'JSON',
    success: function (data) {
      console.log(data);
      for (let index = 0; index < data.length; index++) {
        const element = (100 - (data[index]["times"]["idle"] / 10000000)).toFixed(4);
        console.log(element);
        var para = $("<p class='para text-center'>" + (index + 1) + ".       " + element + "%</p>").appendTo(main);
      }
    }
  });
});