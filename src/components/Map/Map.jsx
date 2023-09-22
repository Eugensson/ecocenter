'use client'

import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css"

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const customIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/128/1201/1201643.png",
    iconSize: [40, 40]
})

const Map = () => {  
  return (
    <MapContainer center={[49.442626828602904, 32.05069391852951]} zoom={20} scrollWheelZoom={false}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[49.442626828602904, 32.05069391852951]} icon={customIcon}>
            <Popup className="popup">
                ТОВ ЕЦ ПНВ ПТ<br />18002, м. Черкаси,<br />вул. Святотроїцька,102/1,<br />оф.: 3, 5                                
            </Popup>
        </Marker>
    </MapContainer>
  )
}

export default Map;