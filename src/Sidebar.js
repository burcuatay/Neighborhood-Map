import React, { Component } from 'react'

class Sidebar extends Component {

    render(){

        const list = this.props.resortList.map(i=>(
            <li className= "hotelName" 
                tabIndex="0" key={i.id} 
                onClick={()=> this.props.markerClick(i.id)} 
                onKeyPress={()=> this.props.markerClick(i.id)}
                role="button"
                aria-label={i.name}>
            {i.name}
            </li>
         ))

        return(
        <aside className="sidebar">

         <ul className= "resortList">
            {list}
         </ul>
        </aside>
        )
    }


}

export default Sidebar;