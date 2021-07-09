import "./topbar.css"
import {Notifications,Language,Settings } from '@material-ui/icons';

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo" >BlueNight</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconsContainer">
                        <Notifications/>
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconsContainer">
                        <Language/>
                        <span className="topIconBadge">3</span>
                    </div>
                    <div className="topbarIconsContainer">
                        <Settings/>
                    </div>
                    <img className="topAvatar" src="http://picsum.photos/40" alt="" />
                </div>
            </div>
        </div>
    )
}
