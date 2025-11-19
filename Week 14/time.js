const openTime = new Date("2025-11-16T12:00:00")
const aTime = new Date("2025-11-16T12:00:00")
const closeTime = new Date("2025-11-20T12:00:00")
const myBookingTime = new Date("2025-11-20T11:59:00")

//using >, <, >=, <= with date onject (Convert to millisecton automatically before comparing)
if(openTime < closeTime) console.log("Opentime comes before closetime")
else console.log("Opentime comes after closetime")
document.body.innerText = openTime

if(openTime == openTime) console.log("Both opentime is the same")
    else console.log("Opentime is not the same as openTime")

if(openTime == aTime) console.log("Both opentime is the same")
    else console.log("Opentime is not the same as aTime")
    // Both opentime is the same
    // Opentime is not the same as aTime


if(openTime === openTime) console.log("Both opentime is the same")
    else console.log("Opentime is not the same as openTime")

if(openTime === aTime) console.log("Both opentime is the same")
    else console.log("Opentime is not the same as aTime")
    // Both opentime is the same
    // Opentime is not the same as aTime
    
//When you want to compare both date objects are the same, using getTime() function
if(openTime.getTime() === aTime.getTime())
    console.log("Both openTime and a aTime are the same")