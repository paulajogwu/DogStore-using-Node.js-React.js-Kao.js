const db = require('../helpers/database');


//get a single user by its id  
exports.getById = async function getById (id) {
  let query = "SELECT * FROM users WHERE id = ?";
  let values = [id];
  let data = await db.run_query(query, values);
  return data;
}

exports.logins = async function logins (email) {
  let query = "SELECT role FROM users WHERE email = ? ";
  let values = [email];
  let data = await db.run_query(query, values);
  return data;
}


//list all the users in the database
exports.getAll = async function getAll () {
   
    let query = "SELECT * FROM users";
    let data = await db.run_query(query);
    return data;
  }


  //list all the users where role is user in the database
exports.getRole = async function getRole () {
   let role ="user"
  let query = "SELECT * FROM users WHERE role = ?";
  let values = [role];
  let data = await db.run_query(query,values);
  return data;
}

  
  //create a new users in the database
  exports.add = async function add (body) {
    let query = "INSERT INTO users SET ?";
    let data = await db.run_query(query, body);
    return data;
  }

   //update  users Role in the database
   exports.update = async function update(body,id) {
    let query = "UPDATE users SET  ? WHERE id =?";
    let data = await db.run_query(query, [body,id]);
    return data;
  }

 
  
//get a single users by its id  
exports.deleteById = async function deleteById (id) {
  let query = "DELETE * FROM users WHERE id = ?";
  let values = [id];
  let data = await db.run_query(query, values);
  return data;
}

//get a single user by the (unique) findByEmail
exports.findByEmail = async function findByEmail(email) {
  const query = "SELECT * FROM users WHERE email = ?;";
  const user = await db.run_query(query, email);
  return user;
}



  