// Write your solution in this file!
var employee = {
    name:  "Sam",
    streetaddress: "11 Broadway",
}

function updateEmployeeWithKeyAndValue(employee,key,value){
    var employee1 = {...employee};
        employee1[key]=value;
         return employee1
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    employee[key]=value;
         return employee
}

function destructivelyDeleteFromEmployeeByKey (employee,key) {
        delete employee[key];
        return employee
}

function deleteFromEmployeeByKey (employee,key) {
    var employee3 = {...employee};
        delete employee3[key];
        return employee3
}
  