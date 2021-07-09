import "./featuredinfo.css"
import {ArrowDownward,ArrowUpward} from '@material-ui/icons';
export default function Featuredinf() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Revanue</span>
                <div className="featuredMoneyCountainer">
                    <span className="featuredMoney">$2.121</span>
                    <span className="featuredMoneyRate">
                        -11.4% <ArrowDownward className="featuredIcon negative"/>
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyCountainer">
                    <span className="featuredMoney">$2.121</span>
                    <span className="featuredMoneyRate">
                        2.4% <ArrowUpward className="featuredIcon"/>
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Revanue</span>
                <div className="featuredMoneyCountainer">
                    <span className="featuredMoney">$2.121</span>
                    <span className="featuredMoneyRate">
                        -11.4% <ArrowDownward className="featuredIcon negative"/>
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
        </div>
    )
}
