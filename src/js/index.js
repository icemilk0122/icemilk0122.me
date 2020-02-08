$(function(){
    var mymap = L.map('myMap').setView([25.0175862, 121.2261817], 13);

	L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
			'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox/streets-v11'
	}).addTo(mymap);

	var markerArray = [];
    for (point in data) {
        L.circle([data[point].lat, data[point].lng], parseInt(getSearchParams('r')), {
            stroke: false,
            fillColor: '#f03',
            fillOpacity: 0.3
        }).addTo(mymap);
    };
	
	result = getSearchParams();
	for( point in result )
	{
		if(point != 'r'){
			let data = decodeURI(getSearchParams(point)).split(',');
			let p = L.marker([data[0], data[1]]).addTo(mymap).bindPopup("在"+moment(data[2]).format('L LT')+"來過 "+decodeURI(point)+" 附近").openPopup();
			markerArray.push(p);
		}
	}
	var group = L.featureGroup(markerArray);
	mymap.fitBounds(group.getBounds());
})

function getSearchParams(k){
 var p={};
 location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(s,k,v){p[k]=v})
 return k?p[k]:p;
}