$(document).ready(function() {
  $('.modal').modal('show');

  var openDeets = function() {
    $('body').addClass('noscroll');
    $('.body-shadow').removeClass('hidden');
    $('.bottom-single-overlay').removeClass('hidden');
    $('#itinerary-details').removeClass('hidden');
  };
  var closeDeets = function() {
    $('body').removeClass('noscroll');
    $('.body-shadow').addClass('hidden');
    $('.bottom-single-overlay').addClass('hidden');
    $('#itinerary-details').addClass('hidden');
    $('#route-details').addClass('hidden');
  };

  $('.itinerary-short:first').click(function() {
    openDeets();
  });

  $('.body-shadow').click(function() {
    closeDeets();
  });
  $('#itinerary-details .close-button').click(function() {
    closeDeets();
  });

  $('.route-item').click(function() {
    $('#route-details').removeClass('hidden');
  });
  $('#route-details .close-button').click(function() {
    $('#route-details').addClass('hidden');
  });

  // Toggle overlay menu
  $('.navbar-toggler').click(function() {
    $('.overlay-menu').removeClass('hidden');
  });
});
