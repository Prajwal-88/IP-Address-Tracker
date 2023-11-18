const ip_holder = document.querySelector("#ip_holder");
const form = document.querySelector("form");
const submit_btn = document.querySelector("#submit");
const ip_adress = document.querySelector("#ip_adres");
const locat = document.querySelector("#location");
const time = document.querySelector("#timezone");
const isp = document.querySelector("#isp");



var map = L.map('map').setView([51.505, -0.09], 13);
var marker = L.marker([51.5,-0.09]).addTo(map);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


    
const fetch_pop = async ()=>{
    const custom_api=ip_holder.value;
    const fetch_req = new Request(`https://geo.ipify.org/api/v2/country,city?apiKey=at_jbeW2lh0RPt6AN7UFPETcecCGy34v&ipAddress=${custom_api}`);
    const fetch_response = await fetch(fetch_req)
    const data = await fetch_response.json()
    map_panning(data);
    console.log(data)
    article_sec(data);

}

submit_btn.addEventListener('click',e=>{
    e.preventDefault();
    fetch_pop();
})
function map_panning(obj){
    var latlng = L.latLng(obj.location.lat,obj.location.lng)
    map.panTo(latlng)
    var marker = L.marker([obj.location.lat,obj.location.lng]).addTo(map);
}

function article_sec (obj){
    ip_adress.textContent=obj.ip;
    locat.textContent=`${obj.location.city},${obj.location.geonameId}`
    time.textContent=`${obj.location.timezone}`
    isp.textContent=`${obj.isp}`

}


