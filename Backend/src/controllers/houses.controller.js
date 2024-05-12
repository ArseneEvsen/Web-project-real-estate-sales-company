const QUERY = require('../data_access/houses.query');
const database = require('../config/mysql.config');

function getAllHouses(req, res) {
    // Call the database here
    database.query(QUERY.SELECT_HOUSES, (err, result)=> {
        if(err)
        {
            return console.log(err);
        }
        res.send(result);
    })
    
}

module.exports = {
    getAllHouses: getAllHouses
}