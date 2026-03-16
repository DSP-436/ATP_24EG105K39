// //colllections[pack of data]
//   //array(pack of elements)
//   //onject(pack of properties)
//   //array of objects

// //array(ordered collection)
// let marks=[100,98,87,66]

// //iterate (for-of loop)
// for(let v of marks){
//     console.log(v)
// }


// //object(unordered collection)
// let student={         //student is the erference to this object
//     sno:39,
//     name:'dsp',
//     age:19,
//     course:'B.Tech'
// }
// console.log(student.name)
// console.log(student['sno'])
// //itterate an object(for-in loop)
// for(let v in student){
//     //console.log(student[v])//sno is 100
//     console.log(``)
// }


// //array of objects
// //let emps=[{},{},{}]
// let emps=[
//     {eno:1,name:'hbfdj'},
//     {eno:2,name:'hvdj'}
// ]

// for(let v of emps){
//     console.log(`eno is ${v.eno} and name is ${v.name}`)
// }


//obj can have premitives,non primitives,function and objects i it
let students={
    rno:39,
    firstName:'dsp',
    lastName:'reddy',
    marks:[99,100,89,92],
    address:{
        city:'hyd',
        hno:874,
        state:'telangana'
    },
    getfullname:function(){
        return this.firstName+this.lastName
    },
    getavgmarks:function(){
        let avg=0
        for (let v of this.marks){
            avg=avg+v
            
        }
        return avg/this.marks.length
    }

} 
console.log(students.getavgmarks())