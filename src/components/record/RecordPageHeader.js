import * as React from 'react';
import EditButtonGroups from './EditButtonGroups';

export default class RecordPageHeader extends React.Component {
    getCurrnetDate() {
        const today = new Date()
        return [today.getFullYear(), today.getMonth() + 1, today.getDate()].join('.');
    }
    
    render() {
        const style = {
            pageHead : {
                width: "100%",
                height: "55px",
                display :"table",
                margin: "20px 0"
            },
            pageTitle: {
                display:"table-cell",
                verticalAlign: "middle",
                width: "180px",
                height: "39px",
                fontFamily: "NanumMyeongjoOTF",
                fontSize: "40px",
                fontWeight: "bold",
                color: "#961e1e",
            },
            date: {
                display:"table-cell",
                verticalAlign: "middle",
            }
        }

        const date = this.props.date ? this.props.date :  this.getCurrnetDate()
        return (
            <div style={style.pageHead}>
                <div style={style.pageTitle}>
                    기록작성
                </div>
                <div style={style.date}>
                    {date}
                </div>
                <EditButtonGroups/>
            </div>
        );
    }
}
