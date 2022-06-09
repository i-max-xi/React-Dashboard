import React, { useState } from 'react';
import './SideBar.css';
import Logo from '../../imgs/logo.png';
import { SideBarData } from '../../Data/Data';
import { UilSignOutAlt} from '@iconscout/react-unicons';

const SideBar = () => {
const [selected, setSelected] = useState(0);

  return (
    <div className='Sidebar'>
        {/* logo */}
        <div className='logo'>
            <img src={Logo} alt="" />
            <span>
                Sh<span>o</span>p
            </span>
        </div>

        {/* menu */}
        <div className="menu">
            {SideBarData.map((item, index) => {
              return (
                <div className= {selected===index?'menuItem active': 'menuItem'}
                key={index}
                onClick={()=> setSelected(index)}>
                  <item.icon />
                  <span>
                    {item.heading}
                  </span>
                </div>
              )
            })}
            
            <div className="menuItem">
            <UilSignOutAlt />
            </div>
        </div>
    </div>
  )
}

export default SideBar;