function init_isotope_grid() {
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
}

function init_tilter() {   
   var idx = 0;   
   [].slice.call(document.querySelectorAll('a.tilter')).forEach(function(el, pos) {     
     idx = pos%2 === 0 ? idx+1 : idx;   
     new TiltFx(el);    
   });    
}


$('.tilter__figure').imagesLoaded( { background: true }, function() {
  $('.spinner').remove();
  $('main').removeClass('hidden');
  init_tilter();
  init_isotope_grid();
});