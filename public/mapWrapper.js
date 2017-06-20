var MapWrapper = function(container, coords, zoom){

  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  })
}

MapWrapper.prototype = {

  addMarker: function(coords){

    var marker = new google.maps.Marker({
      position: coords,
      map: this.googleMap
    });
    return marker;
  },

  addClickEvent: function(){
    this.googleMap.addListener('click', function(event){

      console.log("Lat: "+event.latLng.lat(), "Long: "+event.latLng.lng());

      // var coords = { lat: event.latLng.lat(), lng: event.latLng.lng()}
      // this.addMarker(coords);

    }.bind(this)); //binds the callback to the context of the MapWrapper
  }
}
