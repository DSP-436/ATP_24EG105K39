// write a function that receives thre number args and return the big number
function bigOf3(a,b,c){
    if(a>b&&a>c){
        console.log(`${a} is greater`)
    }
    else if(b>a&&b>c){
        console.log(`${b} is greater`)
    }
    else{
        console.log(`${c} is greater`) 
    } 
}
console.log("Largest of three numbers=",bigOf3(1,2,3))