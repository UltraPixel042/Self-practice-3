const today1 = new Date()
console.log(today1) //2025-11-19T02:30:53.178Z
 
//2. input parameter -  number of millisecond
const now = new Date(Date.now()) //Date.now() - return millisecond of current datetime
console.log(now) //2025-11-19T02:32:25.426Z
 
//3. input parameter -  date string
const myDate1 = new Date("2025-05-02T17:15:35.100")
console.log(myDate1) //2025-05-02T10:15:35.100Z
const myDate2 = new Date("2025-05-02T17:15:35.100z")
console.log(myDate2) //2025-05-02T17:15:35.100Z
 
//4. input parameter - year, monthIndex (0-11), day, hh,mm,ss, ms
const myDate3 = new Date(2025, 1, 2, 18, 15, 0, 150)
console.log(myDate3) //2025-02-02T11:15:00.150Z

console.log(now.toString())
console.log(now.toISOString())
console.log(now.toLocaleString())
console.log("------------------------------")
console.log(now.toLocaleString("en-US", {
    dateStyle:"long",
    timeStyle: "long"
}))
console.log(now)
console.log("------------------------------")
console.log(now.toLocaleString("chi-CH", {
    dateStyle:"long",
    timeStyle: "long",
    timeZone: "Asia/Bangkok"
}))
console.log(now)


//Date Format
//1. toString()
console.log(myDate3.toString()) //Sun Feb 02 2025 18:15:00 GMT+0700 (Indochina Time)
//2. toISOString()
console.log(myDate3.toISOString()) //2025-02-02T11:15:00.150Z
 
//3. toLocaleString()
console.log(myDate3.toLocaleString()) //2/2/2025, 6:15:00 PM
console.log(
  myDate3.toLocaleString("th-TH", {
    dateStyle: "short",
    timeStyle: "short",
    timeZone: "Asia/Bangkok",
  })
) //2/2/68 18:15
//4. Intl.DateTimeFormat()
const formatter = Intl.DateTimeFormat("en-US", {
  dateStyle: "short",
  timeStyle: "short",
  timeZone: "Asia/Bangkok",
})
console.log(formatter.format(myDate3)) //2/2/25, 6:15 PM
 
//resolvedOption()
const userPreference = Intl.DateTimeFormat().resolvedOptions()
console.log(userPreference.timeZone) //Asia/Bangkok
console.log(userPreference.locale) //en-US
 