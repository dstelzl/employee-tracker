const db = require('../config/connection')

function queryDepts(){
    return db.promise().query('SELECT * from department;')
}
function queryRoles(){
    return db.promise().query('SELECT * from role;')
}
function queryNewRole(roleInfo){
    return db.promise().query('INSERT INTO role SET ?', roleInfo)
}
module.exports = {queryDepts, queryRoles, queryNewRole}