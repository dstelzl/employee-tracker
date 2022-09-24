const db = require('../config/connection')

function queryDepts(){
    return db.promise().query('SELECT * from department;')
}
function queryRoles(){
    return db.promise().query('SELECT * from role;')
}
function queryEmps(){
    return db.promise().query('SELECT * from employee;')
}
function queryNewRole(roleInfo){
    return db.promise().query('INSERT INTO role SET ?', roleInfo)
}
function queryNewEmp(empInfo){
    return db.promise().query('INSERT INTO role SET ?', empInfo)
}
function queryNewDept(deptInfo){
    return db.promise().query('INSERT INTO role SET ?', deptInfo)
}
module.exports = {queryDepts, queryRoles, queryNewRole, queryEmps, queryNewEmp, queryNewDept}