import React, { Component } from 'react'

class Sidebar extends Component {

    render(){

        const list = this.props.resortList.map(i=>(
            <div className= "hotelName" 
                tabindex="0" key={i.id} 
                onClick={()=> this.props.markerClick(i.id)} 
                onKeyPress={()=> this.props.markerClick(i.id)}
                role="button"
                aria-label={i.name}>
            {i.name}
            </div>
         ))

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