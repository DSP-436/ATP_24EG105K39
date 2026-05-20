// write a function that receives an array&search element as args and returns the index of that 
// search element in the array.it should return "not found" when search element not found.
function search(arr,s){
    let i=0
    while(i<arr.length){
        if(arr[i]==s){
            return i
        }
        else{
            i++
            if(i==arr.length){
                return "not found"
            }
        }
    }
}
let marks=[1,2,3,4]
let result=search(marks,2)
console.log(result)