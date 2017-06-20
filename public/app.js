var initialise = function(){

  var container = document.getElementById('main-map');
  var london = { lat: 51.50, lng: -0.127 }
  var mainMap = new MapWrapper(container, london, 10);

  var londonDescription =
    "<h1>London</h1>"+
    "<p><b>London</b> is a big, smelly place with lots of people and "+
    "amazing food. You can't live there, unfortunately, because it costs"+
    " too much.</p>";

  var infowindow = new google.maps.InfoWindow({
    content: londonDescription
  });

  var marker = mainMap.addMarker(london);

  marker.addListener('click', function() {
    infowindow.open(mainMap, marker);
  });

  mainMap.addClickEvent();
}

window.addEventListener('load', initialise);
