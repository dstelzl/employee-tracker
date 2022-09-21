const { queryDepts, queryRoles, queryNewRole } = require("./queries");

const viewAllDept = async () => {
  const deptInfo = await queryDepts();
  return deptInfo[0];
};
const viewAllRoles = async () => {
  const rolesInfo = await queryRoles();
  return rolesInfo[0];
};
const viewAllEmps = async () => {
    const EmpsInfo = await queryEmps();
    return empsInfo[0];
  };

  const addDept = async () => {
    const deptInfo = await queryDepts();
  };

const addRole = async (roleInfo) => {
//   const deptInfo = await queryDepts();
queryNewRole(roleInfo)
};
const addEmp = async () => {
    const deptInfo = await queryDepts();
  };
  const updateEmp = async () => {
    const deptInfo = await queryDepts();
  };

module.exports = { viewAllDept, viewAllRoles, addRole };
