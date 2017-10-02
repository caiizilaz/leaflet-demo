var leaflet = L.map('leaflet', {
  center: [44.46515, -100.72266],
  zoom: 4.5
})

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery ? <a href="http://mapbox.com">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox.streets',
  accessToken: 'pk.eyJ1IjoiY2FpaXppbGF6IiwiYSI6ImNqODE4YXFyZDZsMGwyd3JyMGN5MTRkdG8ifQ.NAy2vHn0JLuDwSDZ-eI_SQ'
}).addTo(leaflet);

L.tileLayer.wms("http://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r.cgi", {
  layers: 'nexrad-n0r-900913',
  format: 'image/png',
  transparent: true,
  attribution: "Weather data ? 2012 IEM Nexrad"
}).addTo(leaflet);

var customMarker = L.icon({
  iconUrl: './img/marker.png',
  iconSize: [38, 45]
})

var marker = L.marker([44.5, -100.09], { icon: customMarker }).addTo(leaflet);

var circle = L.circle([43.508, -97.11], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 100000
}).addTo(leaflet);

var polygon = L.polygon([
  [47.509, -102.08],
  [45.503, -100.16],
  [47.51, -98.247]
]).addTo(leaflet);

// marker.bindPopup('<b style="color:blue;">Hello world!</b><br>I am a popup.').openPopup();
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