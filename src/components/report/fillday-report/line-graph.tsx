import * as React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip
} from 'recharts';

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

interface IReportProps {
  date: Date,
  reports: any
}
export default class LineGraph extends React.Component<IReportProps, any> {
  public render() {
    const data: Array<{name: string, "집중도": number}> = [];
    const weekStart = new Date(this.props.date);
    weekStart.setDate(weekStart.getDate() - 6);
    for(let i = 0 ;i < 7;i++) {
      data.push({
        name: `${weekStart.getMonth() + 1}.${weekStart.getDate()}`,
        "집중도": (Math.floor(Math.random() * 6)),
      })
      weekStart.setDate(weekStart.getDate() + 1);
    }
    weekStart.setDate(weekStart.getDate() - 7);
    return (
      <div className="weekly-line-graph">
        <div className="report-subtitle">
          주간 필위크
          <div className="report-selected-date">
            {weekStart.toLocaleDateString(undefined, {
              day: 'numeric',
              month: 'long',
              weekday: 'long',
              year: 'numeric',
            })}
            {"  ~  "}
            {this.props.date.toLocaleDateString(undefined,{
              day: 'numeric',
              month: 'long',
              weekday: 'long',
              year: 'numeric',
            })}
          </div>
        </div>
        <div className="report-line-graph">
          <LineChart 
          style={{marginTop: '24px',}}
          width={745} height={200} data={data}>
            <XAxis 
            padding={{left: 16, right:16}} tickMargin={16} tickLine={false}
            dataKey="name" />
            <YAxis 
            padding={{top: 0, bottom:0}} tickMargin={20}
            axisLine={false} orientation="right"
            tickLine={false}
            tick={<YaxisTick />}
            ticks={[0,1,2,3,4,5]}
            domain={[0,5]} />
            <CartesianGrid 
            vertical={false}
            strokeDasharray="3 3"/>
            <Line type="monotone" stroke="#d90b3e" dataKey="집중도" 
            strokeWidth={2}
            dot={{strokeDasharray:'none'}}
            animationDuration={1500}
            strokeDasharray="5 2"/>
            <Tooltip />
          </LineChart>
        </div>
      </div>
    )
  }
}