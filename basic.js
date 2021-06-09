//1
const dayOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday ",
  "Thursday",
  "Friday",
  "Saturday",
];
const today = new Date();
let hour=today.getHours()
const isAM=hour<12;
hour=hour%12
const day=dayOfWeek[today.getDay()]

let minute=today.getMinutes()
minute=minute<10?`0${minute}`:minute
let second=today.getSeconds()
second=second<10?`0${second}`:second
console.log(`Today is : ${day}`);
console.log(`Current time is : ${hour} ${isAM?"AM":"PM"} : ${minute} : ${second}`);
