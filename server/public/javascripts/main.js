function loadMap(plat, plong) {
	// Initialize the platform object:
	var platform = new H.service.Platform({
		'app_id': '0etNHVQpVlYq19ZIMA8r',
		'app_code': 'GnTQW_LcBFER-c7EX-0b3g'
	});

	// Obtain the default map types from the platform object
	var maptypes = platform.createDefaultLayers();

	// Instantiate (and display) a map object:
	var map = new H.Map(
		document.getElementById('mapContainer'),
		maptypes.normal.map, {
			zoom: 10,
			center: {
				lng: plong,
				lat: plat
			}
		});
}
