const {prompt} = require('inquirer');
const {menuQuestion} = require('./utils/questions') 

function menuPrompt(){
prompt(menuQuestion).then(({menuAns})=> {
    console.log(menuAns)
    switch (menuAns) {
        case "View all Departments": 
            viewAllDept()
            break;
        case "View all Roles": 
            //function view all departments
            break;
        case "View all Employees": 
            //function view all departments
            break;
        case "Add a Department": 
            //function view all departments
            break;
        case "Add a Role": 
            //function view all departments
            break;
        case "Add an Employee": 
            //function view all departments
            break;
        case "Update an Employee": 
            //function view all departments
            break;
        default: 
           console.log('Thank You! Have a Nice Day!')
            break;
    

    }
})

}


menuPrompt();