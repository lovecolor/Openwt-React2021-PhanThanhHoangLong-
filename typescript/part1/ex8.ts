class Time {
    hour: number
    minute: number
    second: number
    constructor(hour: number, minute: number, second: number) {
        this.hour = hour
        this.minute = minute
        this.second = second
    }
    getHour(): number {
        return this.hour
    }
    getMinute(): number {
        return this.minute
    }
    getSecond(): number {
        return this.second
    }
    setHour(hour: number): void {
        this.hour = hour
    }
    setMinute(minute: number): void {
        this.minute = minute
    }
    setSecond(second: number): void {
        this.second = second
    }
    toString(): String {
        return `${this.hour < 10? 0:""}${this.hour}:${this.minute < 10 ?0:""}${this.minute}:${this.second < 10 ? 0:""}${this.second}`
    }
    nextSecond():Time{
        this.second++
        if(this.second===60){
            this.second=0
            this.minute++;
        }
        if(this.minute===60)
        {
            this.minute=0
            this.hour++
        }
        if(this.hour===24){
            this.hour=0
        }
        return this
    }
    previousSecond():Time{
        this.second--
        if(this.second===-1){
            this.second=59
            this.minute--
        }
        if(this.minute===-1)
        {
            this.minute=59
            this.hour--
        }
        if(this.hour===-1){
            this.hour=23
        }
        return this
    }
    
}
const time=new Time(23,59,59)
console.log(time.nextSecond().toString())
console.log(time.previousSecond().toString())