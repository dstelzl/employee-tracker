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
// const promptEmp = async (roleInfo) => {
//   const roleChoices = roleInfo.map((dept) => {
//     return {
//       name: role.title,
//       value: role.id,
//     };
//   });

//   const empQuestions = [
//     {
//       type: "input",
//       name: "first_name",
//       message: "What is your new employee's first name?",
//     },
//     {
//       type: "input",
//       name: "last_name",
//       message: "What is your new employee's last name?",
//     },
//     {
//       type: "list",
//       name: "role_id",
//       message: "What is the role of your new employee?",
//       choices: roleChoices,
//     },
//   ];
//   const answer = await prompt(empQuestions);
//   return answer;
// };
module.exports = { promptMenu, promptRole };

// [{name:"engineering", value:2}]
