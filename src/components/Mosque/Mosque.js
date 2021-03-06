import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import PageHead from "../PageHead/PageHead";

const Mosque = () => {
  const position = [51.505, -0.09];
  return (
    <div className="">
      <PageHead />
      <MapContainer className="absolute top-0" center={position} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Mosque;
