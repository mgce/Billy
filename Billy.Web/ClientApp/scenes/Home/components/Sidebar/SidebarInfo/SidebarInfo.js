import React from 'React';

const SidebarInfo = ({header, info}) => {
    return(
        <div className="sidebar-info">
            <div className="header">
                {header}
            </div>
            <div className="info">
                {info}
            </div>
        </div>
    )
}

export default SidebarInfo;