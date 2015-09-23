L.mapbox.accessToken = 'pk.eyJ1IjoicnlhbmpzbWl0aCIsImEiOiJGdUZ1VllrIn0.3CnpoqP4UtaQPRHvEzssgA';
// Construct a bounding box for this map that the user cannot move out of
var southWest = L.latLng(39.196, -76.728),
    northEast = L.latLng(39.379, -76.525),
    bounds = L.latLngBounds(southWest, northEast);

var map = L.mapbox.map('map', 'ryanjsmith.map-xzl7zs2y', {
    // set that bounding box as maxBounds to restrict moving the map
    // see full maxBounds documentation:
    // http://leafletjs.com/reference.html#map-maxbounds
    maxBounds: bounds,
    maxZoom: 17,
    minZoom: 12
});

// zoom the map to that bounding box
map.fitBounds(bounds);

// Add optional fullscreen zoom
L.control.fullscreen().addTo(map);