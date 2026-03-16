//function
//func are first class objects in js
  //cause
    //it can be stored in variable
    //fun can be passed as argument to a func
    //function can return a function
  //we can also declare a function  after calling in function declaration but not in function expression

//function declaration
function findSum(a,b){
    let sum=a+b
    return sum
}
console.log(findSum(2,'dfs'))

//function expression
  //here we can store function in a variable
  //we can declare func with variable or func name or we can use nameless func

let a=function findSum(a,b){//let a=function (a,b)
    let sum=a+b
    return sum
}
console.log(a(2,'6'))
console.log(a(2,6))


//arrow function(to simplify a func expression)
let test1=(a,b)=> a+b
console.log(test1(2,3))

//func return func

let createGame=function(nameOfPlayer){
  return function(level){
      console.log(`hello ${nameOfPlayer},you are at level ${level}`)
  }
}
createlevel=createGame("ravi")
createlevel(1)
createlevel(2)
createlevel(3)
//callback fun-a fun passed as a func to another func
//we can aslo send a function as argument to another function
let makePayment=function(amount,paymentType){
  console.log(`payment of ${amount} started`)
  paymentType()
}

let UPIpayment=function(){
  console.log("upi payment done")
}

let CardPayment=function(){
  console.log('Card payment done')
}

makePayment(2000,UPIpayment)
//every js function is closure by defaultt
//cause of closure property the variables of outside scope will be maintain 
// temperorily in hrap even the outside function execution is completed
