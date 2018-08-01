import React, { Component } from 'react'

class Sidebar extends Component {

    render(){

        const list = this.props.resortList.map(i=>(
            <div className= "hotelName" onClick={()=> this.props.markerClick(i.id)}>{i.name}</div>))

        return(
        <div className="sidebar">

         <div className= "resortList">
            {list}
         </div>
        </div>
        )
    }


}

export default Sidebar;