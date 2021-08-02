import { FC } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css'; // Re-uses images from ~leaflet package
import * as L from 'leaflet';
import 'leaflet-defaulticon-compatibility';

import { LatLngTuple } from 'leaflet';
import  { Photo } from '../lib/types';

interface MapProps {
    photos: Photo[]
}

const Map: FC<MapProps> = ({ photos  }) => {
    const startPosition : LatLngTuple = [37.09024, -95.712891];
    const markers = photos.map((p: Photo, i: number) => (<Marker key={i} position={[p.latitude, p.longitude]}></Marker>
    ))
    console.log(photos);

    return (
        <MapContainer center={startPosition} zoom={4} scrollWheelZoom={true} 
                    style={{height:600, width:800, borderRadius:"2em"}}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {/* <Marker position={startPosition}></Marker> */}
            {markers}
        </MapContainer>
    )
}

export default Map
