function init_isotope_grid() {
  var $grid = $('.grid').isotope({
    itemSelector: '.grid-item',
    masonry: {
    }
  });

  $('.filter').on( 'click', 'a', function() {
    event.preventDefault();
    $('a').removeClass('active'); // remove active class from *all* links
    $(this).addClass('active');
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });

  var iso = $grid.data('isotope');
  $grid.isotope('reveal', iso.items);
}

function init_tilter() {   
   [].slice.call(document.querySelectorAll('a.tilter')).forEach(function(el, pos) {     
     new TiltFx(el);    
   });    
}

$('.tilter__figure').imagesLoaded( { background: true }, function() {
  $('.spinner').remove();
  $('main').removeClass('hidden');
  init_tilter();
  init_isotope_grid();
});