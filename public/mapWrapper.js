var MapWrapper = function(container, coords, zoom){

  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  })
}

MapWrapper.prototype = {

  setCenter: function(coords){
    this.googleMap.setCenter(coords);
    this.addMarker(coords, "Is this Chicago yet??");
  },

  addMarker: function(coords, description){

    var infowindow = new google.maps.InfoWindow({
      content: description
    });

    var marker = new google.maps.Marker({
      position: coords,
      map: this.googleMap
    });

    marker.addListener('click', function() {
      infowindow.open(this, marker);
    }.bind(this));
  },

  addMapClickEvent: function(){
    this.googleMap.addListener('click', function(event){

      console.log("Lat: "+event.latLng.lat(), "Long: "+event.latLng.lng());

      var coords = { lat: event.latLng.lat(), lng: event.latLng.lng()}
      this.addMarker(coords, "Would you want to live here?");

    }.bind(this)); //binds the callback to the context of the MapWrapper
  }
}
