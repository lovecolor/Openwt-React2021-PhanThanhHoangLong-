class MyDate {
    year: number
    month: number
    day: number
    MONTHS: String[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    DAYS: String[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    DAYS_IN_MONTHS: number[] = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    isLeapYear(year: number): boolean {
        return (year % 4 === 0 && year % 100 != 0) || year % 400 === 0
    }
    isValidDate(year: number, month: number, day: number): boolean {
        if (year < 1 || year > 9999) return false
        if (month < 1 || month > 12) return false
        let maxDayInCurrentMonth = this.DAYS_IN_MONTHS[month - 1]
        if (month === 2 && this.isLeapYear(year)) maxDayInCurrentMonth++

        if (day < 1 || day > maxDayInCurrentMonth) return false
        return true
    }
    getDayOfWeek(year: number, month: number, day: number): number {
        const tableCentury: number[] = [6, 4, 2, 0]
        const tableMonth = [0, 3, 3, 6, 1, 4, 6, 2, 5, 0, 3, 5]
        let numOfTableMonth = tableMonth[month - 1]
        if (month === 1 && this.isLeapYear(year)) numOfTableMonth = 6
        if (month === 2 && this.isLeapYear(year)) numOfTableMonth = 2
        return (tableCentury[Math.floor(year / 100) % 4] + year % 100 + Math.floor(year % 100 / 4) + numOfTableMonth + day) % 7
    }
    constructor(year: number, month: number, day: number) {
        this.year = year
        this.month = month
        this.day = day
    }
    setDate(year: number, month: number, day: number): void {
        this.year = year
        this.month = month
        this.day = day
    }
    getYear(): number {
        return this.year
    }
    getMonth(): number {
        return this.month
    }
    getDay(): number {
        return this.day
    }
    setYear(year: number): void {
        this.year = year
    }
    setMonth(month: number): void {
        this.month = month
    }
    setDay(day: number): void {
        this.day = day
    }
    toString(): String {
        return `${this.DAYS[this.getDayOfWeek(this.year, this.month, this.day)]} ${this.day} ${this.MONTHS[this.month - 1]} ${this.year}`
    }
    nextDay(): MyDate {
        this.day++
        let maxDayInCurrentMonth = this.DAYS_IN_MONTHS[this.month - 1]
        if (this.month === 2 && this.isLeapYear(this.year)) maxDayInCurrentMonth++
        if (this.day > maxDayInCurrentMonth) {
            this.day = 1
            this.month++;
        }
        if (this.month > 12) {
            this.month = 1
            this.year++
        }
        return this
    }
    nextMonth(): MyDate {
        this.month++
        if (this.month > 12) {
            this.year++
            this.month = 1
        }
        let maxDayInCurrentMonth = this.DAYS_IN_MONTHS[this.month - 1]
        if (this.month === 2 && this.isLeapYear(this.year)) maxDayInCurrentMonth++
        if (this.day > maxDayInCurrentMonth) {
            this.day = maxDayInCurrentMonth
        }
        return this
    }
    nextYear(): MyDate {
        this.year++
        if (this.month === 2 && this.isLeapYear(this.year) && this.day === 29) this.day--
        return this
    }
    previousDay(): MyDate {
        this.day--
        if (this.day === 0) {
            this.month--
            if (this.month < 1) {
                this.month = 12
                this.year--
            }
            let maxDayInCurrentMonth = this.DAYS_IN_MONTHS[this.month - 1]
            if (this.month === 2 && this.isLeapYear(this.year)) maxDayInCurrentMonth++
            this.day = maxDayInCurrentMonth
        }
        return this
    }
    previousMonth(): MyDate {
        this.month--
        if (this.month === 0) {
            this.month = 12
            this.year--
            let maxDayInCurrentMonth = this.DAYS_IN_MONTHS[this.month - 1]
            if (this.month === 2 && this.isLeapYear(this.year)) maxDayInCurrentMonth++
            if (this.day > maxDayInCurrentMonth) this.day = maxDayInCurrentMonth
        }
        return this
    }
    previousYear(): MyDate {
        this.year--
        let maxDayInCurrentMonth = this.DAYS_IN_MONTHS[this.month - 1]
        if (this.month === 2 && this.isLeapYear(this.year)) maxDayInCurrentMonth++
        if(this.day>maxDayInCurrentMonth) this.day=maxDayInCurrentMonth
        return this
    }

}
const date:MyDate=new MyDate(2012,2,17)
console.log(date.toString())