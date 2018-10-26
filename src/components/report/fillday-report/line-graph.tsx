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

export default class LineGraph extends React.Component {
  public render() {
    const data = [
      {name: '10.16', "집중도": 0, tester:2},
      {name: '10.17', "집중도": 3, tester:1},
      {name: '10.18', "집중도": 1, tester:0},
      {name: '10.19', "집중도": 4, tester:4},
      {name: '10.20', "집중도": 2, tester:5},
      {name: '10.21', "집중도": 3, tester:1},
      {name: '10.22', "집중도": 5, tester:3},
    ];
    data.map((val, idx, arr) => {
      arr[idx]["집중도"] = Math.floor(Math.random() * 6);
    });
    return (
      <div className="weekly-line-graph">
        <div className="report-subtitle">
          지난 주 변화된 색
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