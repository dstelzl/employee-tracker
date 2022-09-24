const { queryDepts, queryRoles, queryNewRole, queryEmps, queryNewEmp, queryNewDept } = require("./queries");

const viewAllDept = async () => {
  const deptInfo = await queryDepts();
  return deptInfo[0];
};
const viewAllRoles = async () => {
  const rolesInfo = await queryRoles();
  return rolesInfo[0];
};
const viewAllEmps = async () => {
    const empsInfo = await queryEmps();
    return empsInfo[0];
  };

  const addDept = async (deptInfo) => {
    //const deptInfo = await queryDepts();
    queryNewDept(deptInfo)
  };

const addRole = async (roleInfo) => {
//   const deptInfo = await queryDepts();
queryNewRole(roleInfo)
};
const addEmp = async (empInfo) => {
    //const deptInfo = await queryDepts();
    queryNewEmp(empInfo)
  };
  const updateEmp = async () => {
    const deptInfo = await queryDepts();
  };

module.exports = { viewAllDept, viewAllRoles, addRole, viewAllEmps, addEmp, addDept };
