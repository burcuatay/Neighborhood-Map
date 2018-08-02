import React, { Component } from 'react'
import Map from './Map.js'
import Sidebar from './Sidebar.js'
import resortsArray from './ResortsArray.js'


class NeighborhoodMap extends Component{

state = {
  resortList: resortsArray,
  chosenResort: null,
  query: '',
  activeResort: null,
}

filterResults(query){
  this.setState({query});
  const { resortList } = this.state
  const filteredResults = resortsArray.filter(i=> i.name.includes(query));
  this.setState({resortList: filteredResults})
}

markerClick(activeResort){
  this.setState({activeResort});
  console.log(activeResort)
}

openResorts(){
  var open = document.getElementById("sidebar")
  open.classList.toggle("visible")
}


render(){

return(
<div className="container">
      <div className="title-box">
        <div>Find best hotels in Istanbul!</div>
      </div>
      <div className="contents">
        <div id="sidebar">
          <a href="#" className="closebtn" onClick={()=>this.openResorts()}>&#9776;</a>
          <input type="text" value={this.state.query} onChange={(event)=> this.filterResults(event.target.value)} />

          <Sidebar
          resortList={this.state.resortList}
          activeResort={this.state.activeResort}
          markerClick = {this.markerClick.bind(this)}
          />
        </div>

        <div id="map">
          <Map
          resortList={this.state.resortList}
          activeResort={this.state.activeResort}
          markerClick = {this.markerClick.bind(this)}
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyB92lneaZL30eo0_Uoglb2mMBeKBYdvRz8"
          loadingElement={<div style={{ height: '100%' }} />}
          containerElement={<div style={{ height: '400px' }} />}
          mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
      </div>
</div>

)
}
}

export default NeighborhoodMap