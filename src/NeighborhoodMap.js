import React, { Component } from 'react'
import Map from './Map.js'
import Sidebar from './Sidebar.js'
import resortsArray from './ResortsArray.js'


class NeighborhoodMap extends Component{

state = {
  resortList: resortsArray,
  chosenResort: null,
  query: null,
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

render(){

return(
<div className="container">
      <div className="title-box">
        <h1>Find best hotels in Istanbul!</h1>
      </div>
      <div className="contents">

        <div id="sidebar">
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
          />
        </div>
      </div>
</div>

)
}
}

export default NeighborhoodMap