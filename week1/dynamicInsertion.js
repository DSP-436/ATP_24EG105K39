let arr=[1,2,3,4]
//dynamic insertion
//they always edit the original array
  //start
    console.log(arr.push(5))
    console.log(arr)
  //end
    console.log(arr.unshift(-1,0))
    console.log(arr)
  //inserting in between (index based insertion)
    arr.splice(2,0,3)
    console.log(arr)
  //
    let removedElement=arr.shift()
    console.log(removedElement)
    console.log(arr)

  //
      arr.pop()
      console.log(arr)
  //
    arr.splice(2,2)
    console.log(arr)