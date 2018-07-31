import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import resortsArray from './ResortsArray.js'


class Map extends Component {
    static defaultProps = {
      center: {
        lat: 41.00,
        lng: 28.97
      },
      zoom: 12
    };
  
    render() {
        const markers = resortsArray.map(i=>(
            <div className="marker" lat={i.location.lat} lng={i.location.lng}  />
           ))
        return (
        <div style={{ height: '100vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyB92lneaZL30eo0_Uoglb2mMBeKBYdvRz8' }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            {markers}
          </GoogleMapReact>
        </div>
      );
    }
  }
  
  export default Map;