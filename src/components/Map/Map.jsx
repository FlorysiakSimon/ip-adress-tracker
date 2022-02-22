import React, { useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import './Map.scss'
import { IpItemType } from '../../App';
import L from 'leaflet';


function SetViewOnClick({ coords }) {
    const map = useMap();
    map.setView(coords, map.getZoom());
    return null;
  }
  

const markerIcon = new L.Icon({
    iconUrl: require('./icon-location.png')
});

export const Map = ({position,item}) => {

    if(!position.length){position=[0,0]}

    return (
        <>
            <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position} icon={markerIcon}>
                <Popup>
                    {item.location.city}. <br /> {item.location.postalCode}
                </Popup>
                </Marker>
                <SetViewOnClick
                    coords={position}
                />
            </MapContainer>
        </>
  )
}

export default Map