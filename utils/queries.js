const db = require('./config/connection')

function queryDepts(){
    db.query('SELECT * from departments'). then(data => data)
}

module.exports = {queryDepts}