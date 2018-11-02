import * as React from 'react';
import CalandarImg from "./resource/img/cal.png";
import {TitleCal} from'./resource/img/title_cal.png';
import PageTitle from '../setting/PageTitle';
import { PageSubTitle } from './RecordStyle';
import PageEditButton from './PageEditButton';
import { SetDateFormatting } from './Util';
import NaviButton from './NaviButton';
import {Link} from 'react-router-dom';

class RecordPageTitle extends React.Component {
    render() {
        const { date, isToday, getRequest, isEditMode } = this.props;
        const style = {
            float: "right",
            backgroundImage: `url(${CalandarImg})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "3px 1px",
            paddingLeft: "24px",
            color: "#565656",
            position: "relative",
            top: "58px"
        }
        if (isToday && isEditMode) {
            return (
                <div>
                    <PageTitle title="기록 작성" />
                    <PageSubTitle>하루를 채워보세요</PageSubTitle>
                    <PageSubTitle style={style}>
                        <b>오늘 : </b>
                        <span>{date}</span>
                    </PageSubTitle>
                </div>
            );
        }
        const targetDate = new Date(date);
        
        targetDate.setDate(targetDate.getDate()-1)
        const prevDate = SetDateFormatting(targetDate);
        
        targetDate.setDate(targetDate.getDate()+ 2)
        const nextDate = SetDateFormatting(targetDate);
        return (
            <div>
                <PageSubTitle  color='#262626'>
                    <NaviButton isLeft onClick={() => {
                        console.log(prevDate)
                        getRequest(prevDate);
                    }}/>
                    {prevDate}
                </PageSubTitle>
                <PageTitle title={date} imgUrl width/>
                <PageSubTitle color='#262626'>
                    {nextDate}
                    <NaviButton onClick={() => {
                        getRequest(nextDate);
                    }}/>
                </PageSubTitle>
            </div>
        );
    }
}

export default RecordPageTitle;