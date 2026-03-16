function se(arr,s){
    let i=0
    while(i<arr.length)
        if(arr[i]==s)
            return i
        else{
            i++
            if(i==arr.length)
                return "not found"
        }
}

console.log(se([1,2,3,4],2))