async function doSomething(hasProblem){
    return new Promise((resolve, reject) => {
        setTimeout(() => hasProblem?reject("Fail Working") : resolve("Fully Complete"), 5000)
    })
}

//1.) using .then() .catch()
// .then() รอให้ทำเสดก่อนแล้วจะให้ทำอะไร
console.log("starting...")

// doSomething(true).then((workingStatus) => {
//     // const workingStatus = doSomething(false)
//     console.log(workingStatus)
//     console.log("ending...")
// }).catch((errorMessage) => {
//     console.log(errorMessage)
// })

// 2.) async-await
async function runWorking() {
    try{
        const workingStatus = await doSomething(false)
        console.log(workingStatus)
        console.log("ending...")
    }catch(error){
        console.log(error)
    }
}

runWorking()