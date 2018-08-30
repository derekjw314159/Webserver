// Lat Lon calculations
var rad = function(x) {
  return x * Math.PI / 180;
};

var getDistance = function(p1, p2) {
  var R = 6378137; // Earth’s mean radius in meter
  var dLat = rad(p2[0] - p1[0]);
  var dLong = rad(p2[1] - p1[1]);
  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(rad(p1[0])) * Math.cos(rad(p2[0])) *
    Math.sin(dLong / 2) * Math.sin(dLong / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  d = d * 1.09361; // Convert to yards
  return d; // returns the distance in yards
};

   function addPivot(name,p){
		/* LatLng is mid-point between back tee and green centre */
		var lat = parseFloat(document.getElementById("markerT" + glTees.charAt(0) + "lat").value);
		lat += parseFloat(document.getElementById("markerGC" + "lat").value);
		lat *= 0.5;
		var lng = parseFloat(document.getElementById("markerT" + glTees.charAt(0) + "lng").value);
		lng += parseFloat(document.getElementById("markerGC" + "lng").value);
		lng *= 0.5;
        document.getElementById(name + "lat").value = lat;
        document.getElementById(name + "lng").value = lng;
        document.getElementById(name + "meas").value = "";
		   
		var position= new google.maps.LatLng(lat, lng);
		markers[p-1].setPosition(position);
		markers[p-1].setMap(map);
		redrawpolyline(glTees);
        }

	function deletePivot(name,p){
        document.getElementById(name + "lat").value = "91";
        document.getElementById(name + "lng").value = "181";
        document.getElementById(name + "meas").value = "";
		   
		markers[p-1].setMap(null);
		redrawpolyline(glTees);
        }

    function redrawpolyline(tees){
		ct = 0;
		flightPath.setMap(null); /* Global variable */
		var coord = [];
		for (var i = 0; i<tees.length; i++){
			var lat = parseFloat(document.getElementById("markerT" + tees.charAt(i) + "lat" ).value);
			var lng = parseFloat(document.getElementById("markerT" + tees.charAt(i) + "lng" ).value);
			coord[i] = [lat, lng];
			ct++;
			}
		var firstpivot = -1;
		for (i = 1; i < 6 ; i++){
			lat = parseFloat(document.getElementById("markerP" + i + "lat" ).value);
			lng = parseFloat(document.getElementById("markerP" + i + "lng" ).value);
			if (lat <= 90 ){
				coord[ct] = [lat, lng];
				if (firstpivot == -1){
					firstpivot = ct;
					}
				ct++;
				}
			}
		lat = parseFloat(document.getElementById("markerGClat"  ).value);
		lng = parseFloat(document.getElementById("markerGClng" ).value);
		coord[ct] = [lat, lng];
		if (firstpivot == -1){
			firstpivot = ct;
			}
		/* Shuffle coordinates into correct sequence */
		var newcoord = [];
		ct=0;
		for( i = 0; i < tees.length ; i++){
			newcoord[ct++] = new google.maps.LatLng(coord[firstpivot][0], coord[firstpivot][1]);
			newcoord[ct++] = new google.maps.LatLng(coord[i][0], coord[i][1]);
			}
		for( i = tees.length; i < coord.length ; i++){
			newcoord[ct++] = new google.maps.LatLng(coord[i][0], coord[i][1]);
			}
	    flightPath = new google.maps.Polyline({
		    path: newcoord,
		    geodesic: true,
		    strokeColor: '#FFFFFF',
		    strokeOpacity: 1,
		    strokeWeight: 1,
		    });
	    flightPath.setMap(map);
		}

