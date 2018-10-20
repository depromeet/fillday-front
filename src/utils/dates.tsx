export default class DateUtil {
    private date : Date;
    constructor () {
        this.date = new Date();
    }
    public yesterday() {
        this.date.setDate(this.date.getDate() - 1);
    }
    public toString() : string {
        return this.date.toLocaleDateString(undefined, {
            day: 'numeric',
            month: 'long',
            weekday: 'long',
            year: 'numeric',
        })
    }
    public getDay() : number {
        return this.date.getDate();
    }
    public getWeekday() : string {
        return this.date.toLocaleDateString(undefined, {
            weekday: 'long',
        });
    }
    public getYear() : number {
        return this.date.getFullYear();
    }
    public getMonth() : string {
        return this.date.toLocaleDateString(undefined, {
            month: 'long',
        });
    }
}