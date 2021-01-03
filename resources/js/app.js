require('./bootstrap');
var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
 
mapboxgl.accessToken = 'pk.eyJ1IjoidGltdWlzbSIsImEiOiJja2h1Mml0ZzMwd2p4MnJvNWp1dGRzbjUwIn0.-mN_m8e5C7ieMUkf8HGtMg';


document.addEventListener("DOMContentLoaded", (event)=>{
    var map = new mapboxgl.Map({
        container: 'capoeira-map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-74.5, 40], // starting position
        zoom: 9 // starting zoom
    });

    // Add zoom and rotation controls to the map.
    map.addControl(new mapboxgl.NavigationControl());    
})
