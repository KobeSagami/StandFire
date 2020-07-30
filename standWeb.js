function createLink(link){
    var NELat = parseFloat(document.getElementById("rect_bound1_lat").value);
    var NELng = parseFloat(document.getElementById("rect_bound1_lng").value);
	var SWLat = parseFloat(document.getElementById("rect_bound2_lat").value);
    var SWLng = parseFloat(document.getElementById("rect_bound2_lng").value);
	if (!NELat || !NELng || !SWLat || !SWLng)
	{
		return false
	}
	var latitude = (NELat + SWLat) / 2;
	var longitude = (NELng + SWLng) / 2;
	if ((NELat - SWLat) >= (NELng - SWLng))
	{
		var extent = (latitude - SWLat) * 69.2
	}
	else
	{
		var extent = (longitude - SWLng) * ((90.0 - latitude) * Math.PI / 180.0 * 69.172)
	}
    var uri ="http://aws.wfas.net/geoserver/ows?service=WPS&version=1.0.0&request=execute&identifier=gs:LandscapeExport&DataInputs=Longitude=" + longitude + ";Latitude=" + latitude + ";version=LF140;Scale+Factor=1;Extent=" + extent + "&RawDataOutput=output";
    link.setAttribute("href", uri);
	window.open(uri);
    return false;
}