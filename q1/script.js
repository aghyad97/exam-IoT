var myEl = document.getElementById('flip');

myEl.addEventListener('click', function () {
  console.log('clicked');
  var divOneText = $('#card-1').html();
  var divTwoText = $('#card-2').html();

  if (divOneText != '' && divTwoText != '') {
    $('#card-1').html(divTwoText);
    $('#card-2').html(divOneText);
  }
}, false);