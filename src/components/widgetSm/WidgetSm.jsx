import "./widgetSm.css"
import {Visibility} from '@material-ui/icons';
export default function WidgetSm() {
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                
                <li className="widgetSmListItem">
                <img className="widgetSmImg" src="http://picsum.photos/80" alt="" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Ho Minh Nhat</span>
                        <span className="widgetSmUserTitle">BE-Developer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetIcon"/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                <img className="widgetSmImg" src="http://picsum.photos/80" alt="" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Le Huynh Buu</span>
                        <span className="widgetSmUserTitle">FE-Developer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetIcon"/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                <img className="widgetSmImg" src="http://picsum.photos/80" alt="" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Tran Anh Duc</span>
                        <span className="widgetSmUserTitle">BE-Developer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetIcon"/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                <img className="widgetSmImg" src="http://picsum.photos/80" alt="" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Le Van Hoa</span>
                        <span className="widgetSmUserTitle">Developer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetIcon"/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                <img className="widgetSmImg" src="http://picsum.photos/80" alt="" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Doremon</span>
                        <span className="widgetSmUserTitle">BE-Developer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetIcon"/>
                        Display
                    </button>
                </li>
            </ul>
        </div>
    )
}
