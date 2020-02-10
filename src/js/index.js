$(function(){
    var mymap = L.map('myMap').setView([25.0518978,121.5244963], 13);
	var needzoom = false;

	L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
			'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox/streets-v11'
	}).addTo(mymap);

	var markerArray = [];
    for (point in data) {
        L.circle([data[point].lat, data[point].lng], isNaN(parseInt(getSearchParams('r')))?500:parseInt(getSearchParams('r')), {
            stroke: false,
            fillColor: '#f03',
            fillOpacity: 0.1,
			interactive: false
        }).addTo(mymap);
		L.circleMarker([data[point].lat, data[point].lng], 
		{	radius: 5,
            stroke: false,
            fillColor: '#f03',
			fillOpacity: 0.7
        }).addTo(mymap).bindPopup(point+"周圍").openPopup();
    };
	
	result = getSearchParams();
	for( point in result )
	{
		if(point != 'r' && point != 'fbclid'){
			let data = getSearchParams(point).split(',');
			if(data.length==3)
			{
				let p = L.marker([data[0], data[1]]).addTo(mymap).bindPopup("在"+moment(data[2]).format('L LT')+"來過 "+decodeURI(point)+" 附近").openPopup();
				markerArray.push(p);
			}
		}
	}
	var group = L.featureGroup(markerArray);
	mymap.fitBounds(group.getBounds(),{maxZoom:14});
})

function getSearchParams(k){
 var p={};
 decodeURIComponent(location.search).replace(/[?&]+([^=&]+)=([^&]*)/gi,function(s,k,v){p[k]=v})
 return k?p[k]:p;
}