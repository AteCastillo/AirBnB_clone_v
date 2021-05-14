$('document').ready(function () {
    let amenities = {};
    $('INPUT[type="checkbox"]').change(function () {
      let id = $(this).attr('data-id');
      let name = $(this).attr('data-name');
      if ($(this).is(':checked')) {
        amenities[id] = name;
      } else {
        delete amenities[id];
      }
      $('.amenities H4').text(Object.values(amenities).join(', '));
    });
  });
