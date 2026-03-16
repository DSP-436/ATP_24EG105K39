// ASSIGNMENT 3:
// -------------
// Employee Payroll Processor
// You are building a salary processing module in a company HR app.
// Test data:
let employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];
// Tasks:
//1. filter() employees from IT department
const itDept=employees.filter(obj=>obj.department=='IT')
console.log(itDept)

//2. map() to add:
//netSalary = salary + 10% bonus
const bonusSal=employees.map(obj=>obj.netSalary=obj.salary+obj.salary/10)
console.log(bonusSal)

// 3. reduce() to calculate total salary payout
const total=employees.reduce((acc,m)=>acc+m.salary/employees.length,0)
console.log(total)

// 4. find() employee with salary 30000
const f=employees.find(obj=>obj.salary==30000)
console.log(f)

//5. findIndex() of employee "Neha"
const fi=employees.findIndex(obj=>obj.name=='Neha')
console.log(fi)