const db = require('../helpers/database');


//get a single location by its id  
exports.getById = async function getById (id) {
  let query = "SELECT * FROM locations WHERE id = ? ";
  let values = [id];
  let data = await db.run_query(query, values);
  return data;
}


//list all the location in the database
exports.getAll = async function getAll () {
    let query = "SELECT * FROM locations;";
    let data = await db.run_query(query);
    return data;
  }
  
  //create a new location in the database
  exports.add = async function add (body) {
    let query = "INSERT INTO locations SET ?";
    let data = await db.run_query(query, body);
    return data;
  }

   //update an location in the database
   exports.update = async function update(body) {
    let query = "UPDATE locations SET ?";
    let data = await db.run_query(query, body);
    return data;
  }


  
//get a single users by its id  
exports.deleteById = async function deleteById (id) {
  let query = "DELETE * FROM users WHERE id = ?";
  let values = [id];
  let data = await db.run_query(query, values);
  return data;
}





  