var initialise = function(){

  var container = document.getElementById('main-map');
  var london = { lat: 51.50, lng: -0.127 }
  // var chicago = { lat: 52.50, lng: -0.127 }
  var chicago = { lat: 41.87, lng: -87.63 }

  var mainMap = new MapWrapper(container, london, 10);

  var londonDescription =
    "<h1>London</h1>"+
    "<p><b>London</b> is a big, smelly place with lots of people and "+
    "amazing food. You can't live there, unfortunately, because it costs"+
    " too much.</p>";

  mainMap.addMarker(london, londonDescription);
  mainMap.addMapClickEvent();

  var button = document.querySelector("input");
  button.addEventListener('click', function(){
    console.log("Let's go to Chicago!");
    mainMap.setCenter(chicago);
  })
}

window.addEventListener('load', initialise);
