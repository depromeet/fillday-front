import * as React from 'react';
import { Cell, BarChart, XAxis, Tooltip, Bar, YAxis } from 'recharts';

export default class BarGraph extends React.Component {
  public render() {
    const data = [];
    for(let i = 0 ;i < 24;i++) {
        data.push({
            name: i.toLocaleString(undefined, {
                minimumIntegerDigits: 2
            }), 
            "집중도": (Math.floor(Math.random() * 6))
        })
    }
    return (
      <div className="report-box-shadow daily-dist">
        <div className="report-subtitle">
          색 분포도
        </div>
        <div className="daily-bar-graph">
            <BarChart 
            margin={{left:0, right:0}}
            data={data}
            width={460} height={160}>
                <XAxis   
                dataKey="name"
                tickLine={false}
                axisLine={false}
                />
                <YAxis
                width={0}
                domain={[0,5]} 
                tickLine={false}
                axisLine={false}
                tick={false}
                />
                <Tooltip />
                <Bar dataKey="집중도" fill="#000000"
                animationDuration={1500}
                >
                    {
                        data.map((entry, index) => {
                            return (
                                <Cell 
                                opacity={entry["집중도"] * 0.2}
                                key={index} />
                            );
                        })
                    }
                </Bar>
            </BarChart>
        </div>
      </div>
    );
  }
}