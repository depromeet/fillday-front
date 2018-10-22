import * as React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

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

const RADIAN = Math.PI / 180;    
function LevelLabel(props: any) {
    const radius = props.innerRadius + (props.outerRadius - props.innerRadius) * 0.5;
    const x  = props.cx + radius * Math.cos(-props.midAngle * RADIAN);
    const y = props.cy  + radius * Math.sin(-props.midAngle * RADIAN);
    return (
        <text className='report-circle-avg-text' x={61.5} y={52.5} fill="#495057"
        textAnchor='end' dominantBaseline="central">
            {props.value}
        </text>
    );
}
export default class CircleGraph extends React.Component {
  public render() {
      
    const data = [{name: 'Nothing', value: 1}, {name: 'Bad', value: 1},
                    {name: 'Not bad', value: 1}, {name: 'Soso', value: 1},
                    {name: 'Good', value: 1}, {name: "Best", value:1}];
                    
    const COLORS = ['#dee2e6', '#d90b3e'];

    const innerCircle = [{name: '등급', value: 3}];
    
    return (
        <div className="weekly-circle-graph">
            {/* 원형 그래프 */}
            <div 
            style={{
                marginBottom: "40px"
            }}
            className="report-subtitle">
                채운 색 등급
            </div>
            <div 
            style={{
                marginBottom: "20px"
            }}
            className="report-circle">
                <PieChart width={110} height={95}>
                    <Pie 
                        dataKey="value"
                        nameKey="name"
                        cy={50}
                        data={data}
                        startAngle={225}
                        endAngle={-45}
                        innerRadius={45}
                        outerRadius={55}
                        fill="#8884d8"
                        paddingAngle={5}
                        animationDuration={1500}
                    >
                        {
                            data.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]} />)
                        }
                    </Pie>
                    <Pie 
                        animationDuration={1500}
                        dataKey="value"
                        nameKey="name"
                        cy={50}
                        data={innerCircle}
                        outerRadius={32}
                        startAngle={270}
                        endAngle={-90}
                        fill="#d90b3e"
                        opacity={0.5}
                        strokeWidth={0}
                        labelLine={false}
                        label={LevelLabel}
                    />
                </PieChart>
            </div>
            <div className="circle-comment-title">
                Soso
            </div>
            <div className="circle-comment">
                뭐, 나쁘지는 않군! <br/>
                전주보다 13% 상승했어
            </div>
        </div>
    )
  }
}