// Add console.log to check to see if our code is working
console.log("working");

// // Create the map object with a center and zoom level/
// let map = L.map('mapid').setView([30, 30], 2);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
  "Streets": streets,
  "satelliteStreets": satelliteStreets
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [39.5, -98.5],
  zoom: 11,
  layers: [satelliteStreets]
});

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Accessing the Toronto neighborhoods GeoJSON URL
let torontoHoods = "https://raw.githubusercontent.com/K-Beadle/Mapping_Earthquakes/main/torontoNeighborhoods.json"

// Create a style for the lines.
let myStyle = {
  color: "#fcf119",
  weight: 1,
  fillcolor: 'yellow'
}

// Grabbing our GeoJSON data.
d3.json(torontoHoods).then(function(data) {
  console.log(data);

  // Creating the GeoJSON layer with the retrieved data.
  L.geoJson(data, {
    style: myStyle,
    onEachFeature: function(feature, layer) {
          console.log(layer);

          // return L.marker(latlng)
          layer.bindPopup("<h2>Neighborhood: " + feature.properties.AREA_NAME + "</h2>");
        }
  }).addTo(map);
});


// Then we add our 'graymap' tile layer to the map.
light.addTo(map);






//////////////////////////////////////////////////////// The folowing code/notes are from the module work that are kept for reference ////////////////////////////////////////////////////////




// style: myStyle,
// onEachFeature: function(feature, layer) {
//       console.log(layer);

//       // return L.marker(latlng)
//       layer.bindPopup("<h2>Airline Code: " + feature.properties.airline + "</h2> <hr> <h3>Airport Destination Code: " + feature.properties.dst + "</h3>");

// // Add GeoJSON data.
// let sanFranAirport =
// {"type":"FeatureCollection","features":[{
//     "type":"Feature",
//     "properties":{
//         "id":"3469",
//         "name":"San Francisco International Airport",
//         "city":"San Francisco",
//         "country":"United States",
//         "faa":"SFO",
//         "icao":"KSFO",
//         "alt":"13",
//         "tz-offset":"-8",
//         "dst":"A",
//         "tz":"America/Los_Angeles"},
//         "geometry":{
//             "type":"Point",
//             "coordinates":[-122.375,37.61899948120117]}}
// ]};

// // Grabbing our GeoJSON data.
// L.geoJSON(sanFranAirport, {
//   // We turn each feature into a marker on the map
//   onEachFeature: function(feature, layer) {
//     console.log(layer);
//     // return L.marker(latlng)
//     layer.bindPopup("<h2>Airport code: " + feature.properties.faa + "</h2> <hr> <h3>Airport Name: " + feature.properties.name+ "</h3>");
//   }
// }).addTo(map);




// SKILL DRILL TWO 13.5.2
// // Grabbing our GeoJSON data.
// L.geoJSON(sanFranAirport, {
//   // We turn each feature into a marker on the map
//   onEachFeature: function(feature, layer) {
//     console.log(layer);
//     // return L.marker(latlng)
//     layer.bindPopup("<h2>Airport code: " + feature.properties.faa + "</h2> <hr> <h3>Airport Name: " + feature.properties.name+ "</h3>");
//   }
// }).addTo(map);

// // We create the tile layer that will be the background of our map.
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {


// SKILL DRILL ONE 13.5.2
// Grabbing our GeoJSON data.
// L.geoJSON(sanFranAirport, {
//   // We turn each feature into a marker on the map
//   pointToLayer: function(feature, latlng) {
//     console.log(feature);
//     return L.marker(latlng)
//     .bindPopup("<h2>" + feature.properties.name + "</h2> <hr> <h3>" + feature.properties.city + ", " + feature.properties.country + "</h3>");
//   }
// }).addTo(map);

// // We create the tile layer that will be the background of our map.
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/navigation-night-v1/tiles/{z}/{x}/{y}?access_token={accessToken}',


// Coordinates for each point to be used in the line
// let line = [
//   [37.6213, -122.3790],
//   [30.1975, -97.6664],
//   [43.6777, -79.6248],
//   [40.6413, -73.7781]
// ];

// // SKILL DRILL 13.4.3 Create a blue dashed line from SFO to JFK with two stops.
// L.polyline(line, {
//   color: 'blue',
//   dashArray: '10, 10'
// }).addTo(map);

// LAX coordinates  [33.9416, -118.4085],
// SLC coordinates  [40.7899, -111.9791],
// SEA coordinates  [47.4502, -122.3088]

// The following is another way to code line 5
  // let map = L.map("mapid", { center: [40.7, -94.5], zoom: 4});

// Add a marker for each city's location to the map 
  // cityData.forEach(function(city) {
  //       console.log(city)
  //       L.circleMarker(city.location, {
  //         radius: city.population/100000,
  //         color: 'orange',
  //         weight: 4
  //       })
  //       .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
  //     .addTo(map);
  // });

















// let marker = L.circleMarker([34.0522, -118.2437], {
//     radius: 200,
//     color: 'black',
//     fillcolor: '#fcf119'