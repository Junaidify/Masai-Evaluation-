const employees = [
  { name: "Alice", age: 30, salary: 50000, department: "HR" },
  { name: "Bob", age: 35, salary: 60000, department: "Finance" },
  { name: "Charlie", age: 28, salary: 55000, department: "HR" },
  { name: "David", age: 40, salary: 70000, department: "IT" },
  { name: "Eve", age: 32, salary: 65000, department: "Finance" },
];

function groupByDepartment(employees) {
  let HR = [];
  let Finance = [];
  let IT = [];

  for (let employee in employees) {
    if (employees[employee].department == "HR") {
      HR.push(employees[employee]);
    } else if (employees[employee].department == "IT") {
      IT.push(employees[employee]);
    } else {
      Finance.push(employees[employee]);
    }
  }

  console.log("HR: ");
  console.log(HR);
  console.log("Finance:");
  console.log(Finance);

  console.log("IT: ");
  console.log(IT);
}

groupByDepartment(employees);
