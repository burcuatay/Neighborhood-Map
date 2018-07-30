import React, { Component } from 'react'
import Map from './Map.js'

class NeighborhoodMap extends Component{

render(){

return(
<div className="container">
      <div className="title-box">
        <h1>Find must-see locations in Istanbul!</h1>
      </div>
      <div id="map">
      <Map/>
      </div>
</div>

)
}
}

export default NeighborhoodMap