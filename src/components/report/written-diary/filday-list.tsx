import * as React from 'react';
import { COLOR } from '../../../utils/color';
import TODO from '../imgs/todo.png';
import * as ReactTooltip from 'react-tooltip';
import { Link } from 'react-router-dom';

function ListTitle() {
    return (
        <div className="list-title">
            <div 
            style={{ width: "25px", marginLeft: "60px", }}
            className="list-col-name">
                날짜
            </div>
            <div 
            style={{ width: "38px", marginLeft: "90px", }}
            className="list-col-name">
                성취도
            </div>
            <div 
            style={{ width: '25px', marginLeft: "70px", }}
            className="list-col-name">
                제목
            </div>
            <div 
            style={{ width: '50px', marginLeft: "350px", }}
            className="list-col-name">
                타임라인
            </div>
            <div 
            style={{ width: '30px', marginLeft: "395px", }}
            className="list-col-name">
                한 일
            </div>
        </div>
    );
}

const data = {
    date: new Date(), 
    avgLevel: 3,
    subject: '여기에는 제목이 들어갑니다 길면 짤리죠 이렇게',
    timeline: [
        {
            start: 0,
            end: 3,
            집중도: 2, 
        },
        {
            start: 3,
            end: 7,
            집중도: 1, 
        },
        {
            start: 7,
            end: 10,
            집중도: 4, 
        },
        {
            start: 10,
            end: 17,
            집중도: 5, 
        },
        {
            start: 17,
            end: 24,
            집중도: 0, 
        },
    ], 
    worksDone: 7,
};
interface IListDataProps {
    data: {
        date: Date;
        avgLevel: number;
        subject: string;
        timeline: Array<{
            start: number;
            end: number;
            집중도: number;
        }>;
        worksDone: number;
    };
}

function yymmdd(date: Date): string {
    const mm = date.getMonth() + 1; // getMonth() is zero-based
    const dd = date.getDate();

    return [date.getFullYear() % 100, '.',
            (mm>9 ? '' : '0') + mm, '.',
            (dd>9 ? '' : '0') + dd
            ].join('');
};

function HorizontalBar (props: IListDataProps) {
    return (
        <div className='list-item-bar-container list-item-detail'>
            <div 
            className="list-item-bar">
                {/* react-motion 활용 계획 */}
                {props.data.timeline.map((val, idx, arr) => (
                    <React.Fragment>
                        <div className="chart-bar-horizontal"
                        data-tip={true}
                        data-for={`tooltip-hori-${yymmdd(props.data.date)}-${idx}`}
                        key={`bar-hori-${yymmdd(props.data.date)}-${idx}`}
                        style={{
                            width: `${(val.end - val.start) / 24 * 100}%`, 
                            backgroundColor:val['집중도'] === 0? '#f6f6f6': COLOR[Math.floor(val["집중도"] / 2)]
                        }} 
                        />
                        <ReactTooltip
                        place="bottom"
                        border={true}
                        className={"list-tooltip"}
                        effect='solid'
                        type='light'
                        id={`tooltip-hori-${yymmdd(props.data.date)}-${idx}`}
                        >
                            <div className="list-tooltip-time">
                                09:00 - 14:00
                            </div>
                            <div className="list-tooltip-todo">
                                <li> 미니 프로젝트 서브페이지 작업</li>
                                <li> 미니프로젝트 회의 </li>
                            </div>
                        </ReactTooltip>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}


function ListItem(props: IListDataProps) {
    props.data.date.setDate(props.data.date.getDate() - 1);
    return (
        <Link to={`/fillday/${yymmdd(props.data.date)}`}>
            <div className="report-box-shadow list-item-box">
                <div 
                style={{ width: "55px" }}
                className="list-item-detail">
                    {/* 60px */}
                    {yymmdd(props.data.date)}
                </div>
                <div 
                className="list-item-detail list-item-level">
                    {/* 점 - 8px, 간격 3px */}
                    <div className="list-item-dot"
                    style={{backgroundColor:"#d90b3e"}}/>
                    <div>
                        Best
                    </div>
                </div>
                <div 
                title={props.data.subject}
                className="list-item-detail list-item-subject">
                    <div style={{overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap'}}>
                        {props.data.subject}
                    </div>
                </div>
                <HorizontalBar data={props.data}/>
                <div 
                className="list-item-detail list-item-done">
                    <img src={TODO} style={{marginRight: "8px" }} /> {props.data.worksDone}
                </div>
            </div>
        </Link>
    )
}
export default class FilldayList extends React.Component {
    public render() {
        return (
            <div>
                <ListTitle />
                <ListItem data={data} />
                <ListItem data={data} />
                <ListItem data={data} />
                <ListItem data={data} />
                {/* <ListItem />
                <ListItem />
                <ListItem />
                <ListItem /> */}
            </div>
        )
    }
}