
//constantes de configuaracion inicial
let centerLat = -18;
let centerLong = 10;
let maxZoom = 0;



const pixelProjection = L.CRS.Simple;
const  crs = new L.Proj.CRS(
    'CustomCartesian',
    '+para pruebas',
    {
        origin:[-480, 480],
        resolutions:[],
        bounds:L.bounds([])

    }
);

var map = L.map('map',{
    maxZoom: 2,
    zoom:0,
    crs: pixelProjection,
    attribution: 'de mi atoria',
})

let bounds = L.latLngBounds(
    L.latLng(23, 123),   // Esquina inferior izquierda (lat, lng)
    L.latLng(-291, 130)      // Esquina superior derecha (lat, lng)
);
let  screenWidth = window.innerWidth;

if(screenWidth <= 768){

    let desktopBounds = L.latLngBounds(
        
        L.latLng(23, 123),   // Esquina inferior izquierda (lat, lng)
        L.latLng(-291, 130)      // Esquina superior derecha (lat, lng)
    );

}else{
let bounds = L.latLngBounds(
    L.latLng(23, 123),   // Esquina inferior izquierda (lat, lng)
    L.latLng(-291, 130)      // Esquina superior derecha (lat, lng)
);
map.setMaxBounds(bounds);
}
L.tileLayer('./escenarios/{z}/{x}/{y}.png', {
    
  
}).addTo(map);


// Establecer los límites en el mapa


// Crear un mosaico y añadirlo al mapa
var tileLayer = L.tileLayer('URL_DEL_MOSAICO', {
    // Otras opciones del mosaico
}).addTo(map);

map.setView([0, 0], 0);

map.on('click', (event)=>{
    console.log('probando del uso del click en leaflef')
    console.log("el centro del mapa es", map.getCenter());
    console.log("el zoom es ", map.getZoom());
    console.log('coordenadas del click ',event.latlng);
    console.log('el centro esta en', bounds.getCenter())
    
    
});



map.on('zoomend', (event)=>{
    if(map.getZoom() == 2){
       L.circle([-144, 186], {radius:1, fillColor:'red',  fillOpacity: 1}).addTo(map).id="pruebas";
        L.circle([-143, 190], {radius:1, fillColor:'red',  fillOpacity: 1}).addTo(map);
        L.circle([-148, 192], {radius:1, fillColor:'red',  fillOpacity: 1}).addTo(map);
       
    }
 });