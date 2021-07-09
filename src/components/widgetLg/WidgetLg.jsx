import "./widgetLg.css"

export default function WidgetLg() {
    const Button = ({ type }) => {
        return <button className={"widgetLgButton " + type}>{type}</button>
    }
    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Latest Transactions</h3>
            <table className="widgetLgTable">
                <tbody className="widgetLgTableBody">
                    <tr className="widgetLgTr">
                        <th className="widgetLgTh">Customer</th>
                        <th className="widgetLgTh">Date</th>
                        <th className="widgetLgTh">Amount</th>
                        <th className="widgetLgTh">Status</th>
                    </tr>
                    <tr className="widgetLgTr">
                        <td className="widgetLgUser">
                            <img className="widgetLgImg" src="http://picsum.photos/100" alt="" />
                            <span className="widgetLgName">Ho Minh Nhat</span>
                        </td>
                        <td className="widgetLgDate">2 Jun 2021</td>
                        <td className="widgetLgAmount">$121.00</td>
                        <td className="widgetLgStatus">
                            <Button type="Approved"/>
                        </td>
                    </tr>
                </tbody> 
            </table>
            <table className="widgetLgTable">
                <tbody className="widgetLgTableBody">
                    <tr className="widgetLgTr">
                        <th className="widgetLgTh">Customer</th>
                        <th className="widgetLgTh">Date</th>
                        <th className="widgetLgTh">Amount</th>
                        <th className="widgetLgTh">Status</th>
                    </tr>
                    <tr className="widgetLgTr">
                        <td className="widgetLgUser">
                            <img className="widgetLgImg" src="http://picsum.photos/100" alt="" />
                            <span className="widgetLgName">Ho Minh Nhat</span>
                        </td>
                        <td className="widgetLgDate">2 Jun 2021</td>
                        <td className="widgetLgAmount">$121.00</td>
                        <td className="widgetLgStatus">
                            <Button type="Declined"/>
                        </td>
                    </tr>
                </tbody> 
            </table>
            <table className="widgetLgTable">
                <tbody >
                    <tr className="widgetLgTr">
                        <th className="widgetLgTh">Customer</th>
                        <th className="widgetLgTh">Date</th>
                        <th className="widgetLgTh">Amount</th>
                        <th className="widgetLgTh">Status</th>
                    </tr>
                    <tr className="widgetLgTr">
                        <td className="widgetLgUser">
                            <img className="widgetLgImg" src="http://picsum.photos/100" alt="" />
                            <span className="widgetLgName">Ho Minh Nhat</span>
                        </td>
                        <td className="widgetLgDate">2 Jun 2021</td>
                        <td className="widgetLgAmount">$121.00</td>
                        <td className="widgetLgStatus">
                            <Button type="Approved"/>
                        </td>
                    </tr>
                </tbody> 
            </table>
            <table className="widgetLgTable">
                <tbody className="widgetLgTableBody">
                    <tr className="widgetLgTr">
                        <th className="widgetLgTh">Customer</th>
                        <th className="widgetLgTh">Date</th>
                        <th className="widgetLgTh">Amount</th>
                        <th className="widgetLgTh">Status</th>
                    </tr>
                    <tr className="widgetLgTr">
                        <td className="widgetLgUser">
                            <img className="widgetLgImg" src="http://picsum.photos/100" alt="" />
                            <span className="widgetLgName">Ho Minh Nhat</span>
                        </td>
                        <td className="widgetLgDate">2 Jun 2021</td>
                        <td className="widgetLgAmount">$121.00</td>
                        <td className="widgetLgStatus">
                            <Button type="Declined"/>
                        </td>
                    </tr>
                </tbody> 
            </table>
            <table className="widgetLgTable">
                <tbody className="widgetLgTableBody">
                    <tr className="widgetLgTr">
                        <th className="widgetLgTh">Customer</th>
                        <th className="widgetLgTh">Date</th>
                        <th className="widgetLgTh">Amount</th>
                        <th className="widgetLgTh">Status</th>
                    </tr>
                    <tr className="widgetLgTr">
                        <td className="widgetLgUser">
                            <img className="widgetLgImg" src="http://picsum.photos/100" alt="" />
                            <span className="widgetLgName">Ho Minh Nhat</span>
                        </td>
                        <td className="widgetLgDate">2 Jun 2021</td>
                        <td className="widgetLgAmount">$121.00</td>
                        <td className="widgetLgStatus">
                            <Button type="Pending"/>
                        </td>
                    </tr>
                </tbody> 
            </table>
            <table className="widgetLgTable">
                <tbody className="widgetLgTableBody">
                    <tr className="widgetLgTr">
                        <th className="widgetLgTh">Customer</th>
                        <th className="widgetLgTh">Date</th>
                        <th className="widgetLgTh">Amount</th>
                        <th className="widgetLgTh">Status</th>
                    </tr>
                    <tr className="widgetLgTr">
                        <td className="widgetLgUser">
                            <img className="widgetLgImg" src="http://picsum.photos/100" alt="" />
                            <span className="widgetLgName">Ho Minh Nhat</span>
                        </td>
                        <td className="widgetLgDate">2 Jun 2021</td>
                        <td className="widgetLgAmount">$121.00</td>
                        <td className="widgetLgStatus">
                            <Button type="Pending"/>
                        </td>
                    </tr>
                </tbody> 
            </table>
        </div>
    )
}
