// You are given an array of objects representing employees in a company. 
// Each object contains the following properties: name, age, and department. 
// Your task is to write a function to calculate the average age of each 
// department's employees. The function should return an object containing 
// the department name and the summation of employees' age in each department.

const employees = [
    { name: 'Alice', age: 30, department: 'Engineering' },
    { name: 'Bob', age: 25, department: 'Marketing' },
    { name: 'Charlie', age: 35, department: 'Engineering' },
    { name: 'David', age: 40, department: 'HR' },
    { name: 'Eve', age: 28, department: 'Marketing' },
    ];
    
    function departmentAges (employees){
      let output = {}
      for (const employee of employees){
        const { department,age } = employee
        console.log(`${department}:${age}`)
        if(!output[department]){
          output[department] = age
        }
        else{
          output[department] += age
        }
      }
      return output
    }
    
    console.log(departmentAges(employees));