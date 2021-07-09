import "./home.css"
import Featuredinfo from "../../components/featuredinfo/Featuredinfo"
import Chart from "../../components/chart/Chart"
import {userData} from "../../DummyData"
import WidgetSm from "../../components/widgetSm/WidgetSm"
import WidgetLg from "../../components/widgetLg/WidgetLg"

export default function Home() {
    return (
        <div className="home">
            <Featuredinfo/>
            <Chart data={userData} title="User Analytics" dataKey="Active User"/>
            <div className="homeWidgets">
                <WidgetSm/>
                <WidgetLg/>
            </div>
        </div>
    )
}
