import React, { Component } from 'react'
import Devision from '../../Api/Division.json'
import  './SideNav.css'

export class SideNav extends Component {
    render() {
        return (
            <div className="SideNav">
                <label><p>Please select Division</p></label>
               <br/>
             
                <select >
                {Devision.Division.map((e, i) => 
               <option value={e.value} >{e.label}</option>
            // <Select key={i} label={e.label} value={e.value} />
                 )}
                 </select>
               
                <label><p>Please select Organization</p></label>
                <select>
                {Devision.Division.map((e, i) => 
                 <option value={e.value}  >{e.label}</option>
            // <Select key={i} label={e.label} value={e.value} />
                 )}
  </select>
                <label><p>Please select ServiceGroup(Optional)</p></label>
                <select>
                {Devision.Division.map((e, i) => 
                 <option value={e.value}  >{e.label}</option>
            // <Select key={i} label={e.label} value={e.value} />
                 )}
  </select>
            </div>
        )
    }
}

export default SideNav
