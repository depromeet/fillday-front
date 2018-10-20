import * as React from 'react';
import RelativeDays from './relative-days';
import HalfYearLawns from './halfyear-lawns';
// 메인 페이지의 실제 내용 표시부 
export default class MainBody extends React.Component {
    public render() {
        return (
            <div
            className="main-body">
                <RelativeDays />
                <HalfYearLawns />
            </div>
        );
    }
}