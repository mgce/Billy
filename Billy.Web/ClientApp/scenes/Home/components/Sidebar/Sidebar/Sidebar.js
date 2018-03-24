import React from 'React';
import {Logo} from 'General'
import SidebarInfo from '../SidebarInfo/SidebarInfo'
import SidebarPhoto from '../SidebarPhoto/SidebarPhoto'

const Sidebar = props =>{
    return(
        <div className="sidebar">
            <Logo />
            <SidebarPhoto />
            <ul>
                <li>
                <SidebarInfo 
                header="15" 
                info="Rachunkow do zaplacenia"/>
                </li>
                <li>
                <SidebarInfo 
                header="949,15zł" 
                info="Pozostało do zapłaty w tym miesiącu"/>
                </li>
                <li>
                <SidebarInfo 
                header="2 549,38 zł" 
                info="Łączna kwota w danym miesiącu"/>
                </li>
            </ul>                              
        </div>
    )
}

export default Sidebar;