import React, { useRef, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl-csp';
import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker';
require('./bootstrap');

mapboxgl.workerClass = MapboxWorker;
mapboxgl.accessToken = 'pk.eyJ1IjoidGltdWlzbSIsImEiOiJja2h1Mml0ZzMwd2p4MnJvNWp1dGRzbjUwIn0.-mN_m8e5C7ieMUkf8HGtMg';

const Map = () => {
    const mapContainer = useRef();
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(9);

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        });
            
        return () => map.remove();
    }, []);

    return (
        <div className="w-full h-full">
            <div 
                className="absolute top-0 bottom-0 left-0 right-0 map-container" 
                ref={mapContainer} 
            />
        </div>
    );
};

ReactDOM.render(
    <Map />,
    document.getElementById("app")
);



// document.addEventListener("DOMContentLoaded", (event)=>{
//     var map = new mapboxgl.Map({
//         container: 'capoeira-map',
//         style: 'mapbox://styles/mapbox/streets-v11',
//         center: [-74.5, 40], // starting position
//         zoom: 9 // starting zoom
//     });

//     // Add zoom and rotation controls to the map.
//     map.addControl(new mapboxgl.NavigationControl());    
// })
