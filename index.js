// Write your solution in this file!
let employee = {
    name:"bobathy",
    streetAddress: "162 bobby lane"
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key]: value
    }
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
     employee[key] = value;
     return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    let employed = {
        ...employee
    }
    delete employed[key];

    return employed
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];

    return employee
}

