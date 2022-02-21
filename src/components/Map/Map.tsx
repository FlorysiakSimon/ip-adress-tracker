import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './Map.scss'
import { IpItemType } from '../../App';
import L from 'leaflet';


type Props = {
    item:IpItemType;
    map:Array<number>;
}



const markerIcon = new L.Icon({
    iconUrl: require('./icon-location.png')
});

export const Map:React.FC<Props> = ({item,map}) => {

  console.log(map)

  return (
    <>
    <MapContainer center={map} zoom={13} scrollWheelZoom={false}>
        <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[50.3908, 2.7732]} icon={markerIcon}>
        <Popup>
            {item.location.city}. <br /> {item.location.postalCode}
        </Popup>
        </Marker>
    </MapContainer>
    </>
  )
}
