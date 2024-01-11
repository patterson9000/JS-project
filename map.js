"use strict";

function showMap() {
  // Page objects
  let bikeMap = document.getElementById("map");
  let bikeDirections = document.getElementById("bikeDirections");
  let startingPoint = document.getElementById("startingPoint");
  let endingPoint = document.getElementById("endingPoint");

  startingPoint.addEventListener("change", drawRoute);
  endingPoint.addEventListener("change", drawRoute);

  function drawRoute() {
    let selectedStartingPoint = startingPoint.value;
    let selectedEndingPoint = endingPoint.value;

    if (selectedStartingPoint && selectedEndingPoint) {
      let center = [-117.161084, 32.7157];
      const map = tt.map({
        key: "kHmhtxRPWf4atm0ZVTTLXJ2yId7djI9A",
        container: "map",
        center: center,
        zoom: 10
      });

      map.on("load", () => {
        new tt.Marker().setLngLat(center).addTo(map);

        let bikeRoute = {
          key: "kHmhtxRPWf4atm0ZVTTLXJ2yId7djI9A",
          locations: `${selectedStartingPoint}: ${selectedEndingPoint}`,
          travelMode: "bicycle"
        };

        tt.services
          .calculateRoute(bikeRoute)
          .go()
          .then(response => {
            let route = response.toGeoJson();
            map.addLayer({
              id: "route",
              type: "line",
              source: {
                type: "geojson",
                data: route
              },
              paint: {
                "line-color": "#FF0000",
                "line-width": 4
              }
            });
          })
          .catch(error => {
            bikeDirections.textContent = "Directions Unavailable: " + error.message;
          });
      });
    }
  }
}


showMap();
