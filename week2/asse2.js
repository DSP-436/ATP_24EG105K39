
// ASSIGNMENT 2:
// -------------
// Student Performance Dashboard

// You are working on a college result analysis system.

// Test Data:
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

// Tasks:
//1. filter() students who passed (marks ≥ 40)
const re1=students.filter(obj=>obj.marks>=40)
console.log(re1)
//2. map() to add a grade field
//≥90 → A
//≥75 → B
//≥60 → C
//else → D
const grade=students.map(obj=>obj.marks>=90?'A':obj.marks>=75?'B':obj.marks>=75?'C':'D')
console.log(grade)
//    3. reduce() to calculate average marks
const avg=students.reduce((acc,m)=>acc+m.marks/students.length,0)
console.log(avg)
//    4. find() the student who scored 92
const f=students.find(obj=>obj.marks==92)
console.log(f)
//    5. findIndex() of student "Kiran"
const fi=students.findIndex(obj=>obj.name=='Kiran')
console.log(fi)