import * as React from 'react';
import PageTitle from '../setting/PageTitle';
import { PageSubTitle } from './RecordStyle';
import PageEditButton from './PageEditButton';

class RecordPageTitle extends React.Component {
    render() {
        
        return (
            <div>
                <PageTitle title="기록 작성"/>
                <PageSubTitle>하루를 채워보세요</PageSubTitle>
            </div>
        );
    }
}

export default RecordPageTitle;