import { FC, useMemo } from 'react';
import { MapContainer, Marker, Popup, TileLayer,useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css'; // Re-uses images from ~leaflet package
import * as L from 'leaflet';
import 'leaflet-defaulticon-compatibility';

import { LatLngTuple } from 'leaflet';
import  { Photo } from '../lib/types';
import PhotoMarker from './PhotoMarker';

interface MapProps {
    photos: Photo[]
}

const Map: FC<MapProps> = ({ photos  }) => {
    const startPosition : LatLngTuple = [37.09024, -95.712891];
    let map:any = null;

   
        function markerLanlngToPixel(lanlng){
            return map.latLngToContainerPoint(lanlng);
        }
        function SetMapObject() {
             map = useMap()
            
                    setInterval(()=>{
                        console.log(map.getCenter())
                        console.log(map.latLngToContainerPoint(map.getCenter()))//**** */
               
                    },1112000)
                   
             return null;
           }
           const markers = useMemo(() =>
           photos.map(
           (p: Photo) => (<PhotoMarker markerLanlngToPixel={markerLanlngToPixel} key={p.id} photo={p} />)),
           [photos]);
    return (
        <MapContainer center={startPosition} zoom={4} scrollWheelZoom={true} 
                    style={{height:600, width:800, borderRadius:"2em"}}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
               <SetMapObject />
            {markers}
        </MapContainer>
    )
}

export default Map
