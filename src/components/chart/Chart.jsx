import "./chart.css"
import { LineChart, Line, XAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Chart({title,data,dataKey}) {
    
    return (
        <div className="chart">
           <h3 className="chartTitle">{title}</h3>
        <ResponsiveContainer width="100%" aspect={4/1}>
        <LineChart data={data}>
            <XAxis dataKey="name" stroke="#5550bd"/>
            <Line type="monotoe" dataKey={dataKey} stroke="#5550bd"/>
            <Tooltip/>
            <Legend/>
        </LineChart>
        </ResponsiveContainer>
        </div>
    )
}
