// Write your solution in this file!
const employee = {
    name:"Curly",
   };
  
   //update Employee
  function updateEmployeeWithKeyAndValue(employee, key, value){
      const newEmployee = {...employee};
      newEmployee[key] = value;
       return newEmployee;
  }

  //update with key and value
  const employees =  updateEmployeeWithKeyAndValue(
    employee,
    "streetAddress",
    "11 Broadway"
  );

  //destructiveupdate
  
   function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    
    employee[key] = value;
     return employee;

   }

   
   const newEmployees = destructivelyUpdateObject(employee, "streetAddress", "12 Broadway");
   
   //delete non-destructively
   function deleteFromEmployeeByKey(employee, key, value){
    const newEmployee = {...employee};
    newEmployee[key] = value;
    delete newEmployee["name"];
     return newEmployee;
}

//delete destructively
function destructivelyDeleteFromEmployeeByKey(employee, key, value){

    employee[key] = value;
    delete employee.name;
    return employee;
}