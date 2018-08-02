import React, { Component } from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import { InfoWindow } from "react-google-maps"


const Map = withScriptjs(withGoogleMap((props) => {
    const markers = props.resortList.map(i=>{

        const { lat, lng } = i.location;
        return (
            <Marker position={{ lat, lng}} /> 
        )
    })
    return (
        <GoogleMap
        defaultZoom={11}
        defaultCenter={{ lat: 41.031168, lng: 28.988878 }}
      >
      {markers}
      </GoogleMap>
    )
}))


  
  export default Map;