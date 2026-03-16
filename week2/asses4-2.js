// 2.OTP Countdown Simulator (Console App)
// ------------------------------------   
//Simulate OTP sending flow in Node.js:
//Show “OTP Sent Successfully”
console.log('OTP Sent Successfully')
second=10
//Start 10-second countdown
let intervelId=setInterval(()=>{
    second--
    console.log(`Otp can resend after ${second} secs`);
    if(second==0){
        console.log('Resend OTP')
        clearInterval(intervelId)
    }
    },1000)
// Allow resend only after countdown ends
