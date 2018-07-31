import React, { Component } from 'react'
import resortsArray from './ResortsArray.js'

class Sidebar extends Component {

    render(){

        const list = resortsArray.map(i=>(
            <div className= "hotelName">{i.name}</div>))

        return(
        <div className="sidebar">
            <div className= "filter"> 
            
            </div>


            <div className= "resortList">
            {list}
            </div>
        </div>
        )
    }


}

export default Sidebar;