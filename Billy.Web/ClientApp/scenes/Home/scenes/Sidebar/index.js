import React from 'React';
import Logo from '../../components/General/logo'
import SidebarInfo from '../Sidebar/components/sidebarInfo'
import SidebarPhoto from '../Sidebar/components/sidebarPhoto'

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