import * as React from 'react';
import CalandarImg from "./resource/img/cal.png"
import PageTitle from '../setting/PageTitle';
import { PageSubTitle } from './RecordStyle';
import PageEditButton from './PageEditButton';

class RecordPageTitle extends React.Component {
    render() {
        const date = new Date();
        const dateSting = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
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

        return (
            <div>
                <PageTitle title="기록 작성" />
                <PageSubTitle>하루를 채워보세요</PageSubTitle>
                <PageSubTitle style={style}>
                    <b>오늘 : </b>
                    <span>{dateSting}</span>
                </PageSubTitle>
            </div>
        );
    }
}

export default RecordPageTitle;