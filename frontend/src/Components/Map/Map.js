import React, { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';
import L, { marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './Map.css';
import touristData from './TouristData'; // Import tourist data

// Simulate a socket connection (replace with your server URL)
const socket = io();

const Map = () => {
    const mapRef = useRef(null); // Reference for map container
    const [map, setMap] = useState(null);

    useEffect(() => {
        if (mapRef.current) {
            // Initialize the map
            const mapInstance = L.map(mapRef.current).setView([20.5937, 78.9629], 5); // Center of India
            L.tileLayer('https://mt{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
                subdomains: ['0', '1', '2', '3'],
                attribution: '&copy; <a href="https://maps.google.com">Google</a>'
            }).addTo(mapInstance);


            // Set map boundaries (optional)
            // const indiaBounds = [[8.4, 68.7], [37.6, 97.25]];
            // mapInstance.setMaxBounds(indiaBounds);
            // mapInstance.fitBounds(indiaBounds);
            // mapInstance.options.minZoom = 5;

            // const markers = {};

            // if (navigator.geolocation) {
            //     navigator.geolocation.watchPosition(
            //         (position) => {
            //             const { latitude, longitude } = position.coords;
            //             console.log({ latitude, longitude });
            //             mapInstance.setView([latitude, longitude], 16);
            //             const id=0
            //             if(markers[id]){
            //                 markers[id].setLatLng([latitude, longitude])
            //             } else {
            //                 markers[id] = L.marker([latitude, longitude]).addTo(mapInstance)
            //             }
            //         },
            //         (error) => {
            //             console.log(error);
            //         }
            //     );
            // }


            // Define a common icon for state markers
            const stateIcon = L.icon({
                iconUrl: 'https://img.icons8.com/?size=100&id=OBmVbH2qOGwK&format=png&color=000000', // Common state icon URL
                iconSize: [32, 32],
                iconAnchor: [16, 32],
            });

            // Define state markers and tourist spot markers
            const stateMarkers = {};
            const touristMarkers = {};
            const cityMarkers = {}

            // Add state markers
            touristData.forEach((state) => {
                const stateMarker = L.marker(state.latLng, { icon: stateIcon }).addTo(mapInstance);
                stateMarkers[state.id] = stateMarker;

                // Create a popup with state details
                stateMarker.bindPopup(
                    `<div>
                        <b>${state.name}</b><br/>
                        <p><b>Famous Location:</b> ${state.details.famousLocation}</p>
                        <p><b>Festival:</b> ${state.details.festival}</p>
                        <p><b>Fun Fact:</b> ${state.details.funFact}</p>
                        <a href="${state.details.link}" target="_blank">More Info</a>
                    </div>`
                );

                // Add a click event listener to show tourist spots
                stateMarker.on('click', () => {
                    // Zoom in to the state marker
                    mapInstance.setView(state.latLng, 7); // Zoom level 10

                    // Remove existing tourist markers
                    Object.values(touristMarkers).forEach((marker) => mapInstance.removeLayer(marker));

                    // Add tourist spot markers for the clicked state
                    // state.touristSpots.forEach((spot) => {
                    //     const customIcon = L.icon({
                    //         iconUrl: spot.iconUrl,
                    //         iconSize: [32, 32],
                    //         iconAnchor: [16, 32],
                    //     });
                    //     const touristMarker = L.marker(spot.latLng, { icon: customIcon }).addTo(mapInstance);
                    //     touristMarkers[spot.name] = touristMarker;

                    //     touristMarker.bindPopup(`<b>${spot.name}</b><br/>${spot.info}<br/><a href="${spot.link}" target="_blank">More Info</a>`);
                    // });

                    state.cities.forEach((city) => {
                        const customIcon = L.icon({
                            iconUrl: city.iconUrl,
                            iconSize: [32, 32],
                            iconAnchor: [16,32]
                        });
                        const cityMarker = L.marker(city.latLng, {icon: customIcon}).addTo(mapInstance);
                        cityMarkers[city.name] = cityMarker;

                        cityMarker.bindPopup(`<b>${city.name}</b><br/>${city.info}<br/><a href="${city.link}" target="_blank">More Info</a>`);
                    
                        cityMarker.on('click', () => {
                            mapInstance.setView(city.latLng, 11);

                            city.touristSpots.forEach((spot) => {
                                const customIcon = L.icon({
                                            iconUrl: spot.iconUrl,
                                            iconSize: [20, 20],
                                            iconAnchor: [16, 32],
                                        });
                                        const touristMarker = L.marker(spot.latLng, { icon: customIcon }).addTo(mapInstance);
                                        touristMarkers[spot.name] = touristMarker;
                
                                        touristMarker.bindPopup(`<b>${spot.name}</b><br/>${spot.info}<br/><a href="${spot.link}" target="_blank">More Info</a>`);
                            })

                        })

                    })

                });
            });

            setMap(mapInstance);
            

            // Cleanup function to remove map and socket connections
            return () => {
                mapInstance.remove();
                socket.disconnect();
            };
        }
    }, []);

    return <div id="map" ref={mapRef} style={{ width: '100%', height: '100vh' }} />;
};

export default Map;
