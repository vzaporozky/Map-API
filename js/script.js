mapboxgl.accessToken =
    "pk.eyJ1IjoidmxhZC16YXoxIiwiYSI6ImNraXg0Z3I0ODNxMDcyeXFqbXI2ZjhtbmkifQ.iFqAFgrDnpyqQ7NtZNIaww";

let map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/dark-v10",
    center: [30.52503102133437, 50.448838721275024],
    zoom: 9,
});

let marker = new mapboxgl.Marker().setLngLat([30.52503102133437, 50.448838721275024]).addTo(map);

map.addControl(
    new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
    })
);

map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions: {
            enableHighAccuracy: true,
        },
        trackUserLocation: true,
    })
);

let nav = new mapboxgl.NavigationControl();
map.addControl(nav, "top-right");

map.on('move', () => {
    let { lng, lat } = map.getCenter();
    document.getElementById('cord').innerHTML = `<span>Longitude: ${lng}</span><span>Latitude: ${lat}</span>`;
});



