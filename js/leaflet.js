var leaflet = L.map('leaflet').setView([51.505, -0.09], 13);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery ? <a href="http://mapbox.com">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox.streets',
  accessToken: 'pk.eyJ1IjoiY2FpaXppbGF6IiwiYSI6ImNqODE4YXFyZDZsMGwyd3JyMGN5MTRkdG8ifQ.NAy2vHn0JLuDwSDZ-eI_SQ'
}).addTo(leaflet);

var customMarker = L.icon({
  iconUrl: './img/marker.png',
  iconSize: [38, 45]
})

var marker = L.marker([51.5, -0.09], {icon: customMarker}).addTo(leaflet);

var circle = L.circle([51.508, -0.11], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 500
}).addTo(leaflet);

var polygon = L.polygon([
  [51.509, -0.08],
  [51.503, -0.06],
  [51.51, -0.047]
]).addTo(leaflet);

marker.bindPopup('<b style="color:blue;">Hello world!</b><br>I am a popup.').openPopup();
circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon.");

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(leaflet);
}

leaflet.on('click', onMapClick);