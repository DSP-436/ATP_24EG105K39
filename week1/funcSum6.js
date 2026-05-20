// write a function that receives an array as arg and return their sum
function sum(arr){
    let sum=0
    for(let i=0;i<arr.length;i++){
        sum+=arr[i]
    }
    return sum
}
result=sum([1,2,2,3])
console.log("array sum=",result)    