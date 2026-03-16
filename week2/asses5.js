
// ASSIGNMENT 5: 
// -------------
// Bank Transaction Analyzer

// You are building a bank statement summary.

// Test data:
const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];

// Tasks:
//     1. filter() all credit transactions
const re1=transactions.filter(obj=>obj.type=="credit")
console.log(re1)
//     2. map() to extract only transaction amounts
const re2=transactions.map(obj=>obj.amount)
console.log(re2)
//     3. reduce() to calculate final account balance
const balance=transactions.reduce((acc,m)=>m.type=="credit"?acc+m.amount:acc-m.amount,0)
console.log(balance)
//     4. find() the first debit transaction
const f=transactions.find(obj=>obj.type=="debit")
console.log(f)
//     5. findIndex() of transaction with amount 10000
const fi=transactions.findIndex(obj=>obj.amount==10000)
console.log(fi)