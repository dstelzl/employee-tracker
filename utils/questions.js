const menuQuestion= {
    type: 'list',
    name: 'menuAns',
    message: "What would you like to do?",
    choices: [
        'View all Departments', 'View all Roles', 'View all Employees',
        'Add a Department', 'Add a Role', 'Add an Employee', 'Update an Employee', 'Exit'
    ]
}



module.exports = {menuQuestion}