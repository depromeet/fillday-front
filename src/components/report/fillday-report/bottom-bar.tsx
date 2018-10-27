import * as React from 'react';
import { Cell, BarChart, XAxis, Tooltip, Bar, YAxis } from 'recharts';
import { COLOR } from '../../../utils/color';

function YaxisTick(props: any) {
  const rate = {
    0: "", 1: "Bad", 2: "", 
    3: "Soso", 4:"", 5: "Best"};
  
  return (
    <g transform={`translate(${props.x},${props.y})`}>
      <text x={0} y={0} className="line-ytics">
        {rate[props.payload.value]}
      </text>
    </g>
  );
}
interface IBarProps {
  date: Date;
  reports: any;
}
export default class BarGraph extends React.Component<IBarProps, any> {
  public render() {
    const data = [];
    for(let i = 1 ;i <= 24;i++) {
        data.push({
            name: i.toLocaleString(undefined, {
                minimumIntegerDigits: 2
            }), 
            "집중도": (Math.floor(Math.random() * 4))
        })
    }
    return (
      <div className="report-box-shadow daily-dist">
        <div className="report-subtitle">
          하루 필데이 
          <div className="report-selected-date">
            {this.props.date.toLocaleDateString(undefined,{
              day: 'numeric',
              month: 'long',
              weekday: 'long',
              year: 'numeric',
            })}
          </div>
        </div>
        <div className="daily-bar-graph">
            <BarChart 
            margin={{left:0, right:0}}
            data={data}
            width={460} height={160}>
                <XAxis   
                padding={{left:16, right:0}}
                dataKey="name"
                tickLine={false}
                axisLine={false}
                ticks={["01", "12", "24"]}
                />
                <YAxis
                dataKey="집중도"
                width={0}
                domain={[0,5]} 
                tickLine={false}
                axisLine={false}
                tick={<YaxisTick />}
                />
                <Tooltip />
                <Bar dataKey="집중도" 
                animationDuration={1500}
                >
                    {
                        data.map((entry, index) => {
                            return (
                                <Cell 
                                fill={COLOR[Math.floor(entry["집중도"])]}
                                key={`bar-${index}`} />
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