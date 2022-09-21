const { prompt } = require("inquirer");

const menuQuestion = {
  type: "list",
  name: "menuAns",
  message: "What would you like to do?",
  choices: [
    "View all Departments",
    "View all Roles",
    "View all Employees",
    "Add a Department",
    "Add a Role",
    "Add an Employee",
    "Update an Employee",
    "Exit",
  ],
};
const deptQuestions = [
  {
    type: "input",
    name: "deptName",
    message: "What is your new department name?",
  },
];
//
// const newEmpQuestions=[
//     {type:"input", name:"empFirstName", message:"What is the First Name of your new employee?"},{type:"input", name:"empLastname", message:"What is the Last Name of your new employee?"},{type:"list", name:"empRole", message:"What is the role/position of your new employee?",
//    choices:}, {type:"list", name:"empManager", message:"Who does this employee report to?",
//    choices:}
// ]
// const updateEmpQuestions=[
//     {type:"list", name:"empChoices", message:"Which employee you wish to update?", choices:},
// ]
const promptMenu = async () => {
  return prompt(menuQuestion);
};
const promptRole = async (deptsInfo) => {
  console.log(deptsInfo);
  const deptChoices = deptsInfo.map((dept) => {
    return {
      name: dept.name,
      value: dept.id,
    };
  });
  console.log(deptChoices);
  const roleQuestions = [
    {
      type: "input",
      name: "title",
      message: "What is your new role title?",
    },
    {
      type: "input",
      name: "salary",
      message: "What is your new role salary?",
    },
    {
      type: "list",
      name: "department_id",
      message: "What department does your new role belong to?",
      choices: deptChoices,
    },
  ];
  const answer = await prompt(roleQuestions);
  return answer;
};
module.exports = { promptMenu, promptRole };

// [{name:"engineering", value:2}]
