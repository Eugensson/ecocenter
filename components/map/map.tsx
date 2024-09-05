"use client";

import { Icon } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const customIcon = new Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/128/1201/1201643.png",
  iconSize: [40, 40],
});

const Map = () => {
  return (
    <MapContainer
      center={[49.442626828602904, 32.05069391852951]}
      zoom={20}
      scrollWheelZoom={false}
      className="w-full h-full z-10"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        position={[49.442626828602904, 32.05069391852951]}
        icon={customIcon}
      >
        <Popup className="text-sm">
          <span className="font-semibold text-base">ТОВ ЕЦПНВ ПТ</span>
          <br />
          <br />
          18002, м. Черкаси,
          <br />
          вул. Святотроїцька, 102/1, офіс: 3, 5
          <br />
          <br /> Пн-Пт: 09:00-18:00,
          <br /> Сб-Нд: вихідний.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
