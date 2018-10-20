export default class DateUtil {
    private date : Date;
    constructor (arg?: DateUtil) {
        if (arg) {
            this.date = new Date(arg.getTime());
        } else {
            this.date = new Date();
        }
    }
    public travelDay(days: number) {
        this.date.setDate(this.date.getDate() + days);
    }
    public travelMonth(months: number) {
        this.date.setMonth(this.date.getMonth() + months);
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
    public getTime() : number {
        return this.date.getTime();
    }
}