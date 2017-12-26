var $grid = $('.grid').isotope({
  itemSelector: '.grid-item',
  masonry: {
  }
});

// filter items on button click
$('.filter').on( 'click', 'a', function() {
  event.preventDefault();
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});