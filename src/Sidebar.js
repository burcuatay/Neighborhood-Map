import React, { Component } from 'react'

class Sidebar extends Component {

    render(){

        const list = this.props.resortList.map(i=>(
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