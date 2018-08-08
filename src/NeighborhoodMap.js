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
  imgUrl: '',
  mapError: false
}

componentDidCatch(error, info){
  console.log(error, 'errors')
  this.setState({mapError: true})

}

filterResults(query){
  this.setState({query});
  const filteredResults = resortsArray.filter(i=> i.name.includes(query));
  this.setState({resortList: filteredResults})
}

markerClick(activeResort){
  this.setState({activeResort},()=>{
   const clientId = 'YZ5RCASU5XEBZ5VSKKLDPWOR2IJXOKXQFWCJSZJYEHOSH3BO';
   const clientSecret = '4IV5BS3NHMMEFNHW2IIOOKQGSEQNTAOO2BUETW42UK1VBZFZ';
     return fetch(`https://api.foursquare.com/v2/venues/${activeResort}/photos?client_id=${clientId}&client_secret=${clientSecret}&v=20180803`)
     .then(response => response.json())
     .then(res => {
      if (res.meta && res.meta.errorType) {
        throw Error(res.meta.errorDetail)
      }
       const { response } = res;
       if (
         response.photos &&
         response.photos.items &&
         !!response.photos.items.length
       ) {
       const { prefix, suffix } = res.response.photos.items[0]
       const imgUrl = `${prefix}100x100${suffix}`
       this.setState({imgUrl})
     } 
     })
     .catch( error=> alert(error) )
  });
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
        <div role="heading">Find best hotels in Istanbul!</div>
      </div>
      <div className="contents">
        <div id="sidebar">
          <a href="#" className="closebtn" onClick={()=>this.openResorts()}>&#9776;</a>
          <label htmlFor="hotelname">Hotel name:</label>
          <input id="hotelname" type="text" role="textbox" value={this.state.query} onChange={(event)=> this.filterResults(event.target.value)} />

          <Sidebar
          resortList={this.state.resortList}
          activeResort={this.state.activeResort}
          markerClick = {this.markerClick.bind(this)}
          />
        </div>

        <div id="map"role="application">
  {
    !this.state.mapError ? <Map
    resortList={this.state.resortList}
    activeResort={this.state.activeResort}
    markerClick = {this.markerClick.bind(this)}
    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyB92lneaZL30eo0_Uoglb2mMBeKBYdvRz8"
    loadingElement={<div style={{ height: '100%' }} />}
    containerElement={<div style={{ height: '400px' }} />}
    mapElement={<div style={{ height: `100%` }} />}
    imgUrl={this.state.imgUrl}
    />: <div>Map could not be found, please check the initialization method of Google Maps API</div>
  }
        </div>
      </div>
</div>

)
}
}

export default NeighborhoodMap