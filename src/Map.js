import React, { Component } from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import { InfoWindow } from "react-google-maps"


const Map = withScriptjs(withGoogleMap((props) => {
    const markers = props.resortList.map(i=>{

        const { lat, lng } = i.location;
        const google = window.google;
        return (
            <Marker 
            position={{lat, lng}} 
            onClick={() => {props.markerClick(i.id)}} 
            animation={ props.activeResort === i.id  && window.google.maps.Animation.DROP}> 
                
                 { props.activeResort === i.id && 
                    <InfoWindow>
                        <div role="tooltip">
                            {i.name}
                            <p>
                            { (props.imgUrl !== '' && props.activeResort === i.id ) ? 
                                <img src={props.imgUrl} alt={i.name}/> : null 
                            }
                            </p>
                        </div>
                    </InfoWindow> }
            </Marker> 
        )
    })
    return (
        <GoogleMap
        defaultZoom={11}
        defaultCenter={{lat: 41.031168, lng: 28.988878 }}
      >
      {markers}
      </GoogleMap>
    )
}))


  
  export default Map;