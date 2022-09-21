const { promptMenu, promptRole } = require("./utils/questions");
const { viewAllDept, viewAllRoles, addRole } = require("./utils/functions");

function menuPrompt() {
  promptMenu().then(({ menuAns }) => {
    console.log(menuAns);
    switch (menuAns) {
      case "View all Departments":
        viewAllDept().then((depts) => {
          console.table(depts);
          menuPrompt();
        });
        break;
      case "View all Roles":
        viewAllRoles().then((roles) => {
          console.table(roles);
          menuPrompt();
        });
        break;
      case "View all Employees":
        viewAllEmps().then((emps) => {
          console.table(emps);
          menuPrompt();
        });
        break;
      case "Add a Department":
        //function view all departments
        break;
      case "Add a Role":
        viewAllDept().then((deptsInfo) => {
          promptRole(deptsInfo).then((roleInfo) => {
            addRole(roleInfo).then(()=> {
                menuPrompt();
            })
          });
          
        });
        break;
      case "Add an Employee":
        //function view all departments
        break;
      case "Update an Employee":
        //function view all departments
        break;
      default:
        console.log("Thank You! Have a Nice Day!");
        break;
    }
  });
}

menuPrompt();
