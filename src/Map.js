import React, { Component } from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const Map = withScriptjs(withGoogleMap((props) => {
    const markers = props.resortList.map(i=>{

        const { lat, lng } = i.location;
        return (
            <Marker position={{ lat, lng}} />
        )
    })
    return (
        <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: -34.397, lng: 150.644 }}
      >
      {markers}
      </GoogleMap>
    )
}))


  
  export default Map;