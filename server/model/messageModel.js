const db = require('../helpers/database');


//get a single message by its id  
exports.getMessageByuserId = async function getMessageByuserId (sender_id) {
  let query = "SELECT * FROM message WHERE sender_id = ? ";
  let values = [sender_id];
  let data = await db.run_query(query, values);
  return data;
}


//list all the message in the database
exports.getAllByStaffid = async function getAllByStaffid () {
   
    let query = "SELECT * FROM message WHERE staff_id=?";
    let data = await db.run_query(query);
    return data;
  }
  
  //create a new message in the database
  exports.add = async function add (body) {
    let query = "INSERT INTO message SET ?";
    let data = await db.run_query(query, body);
    return data;
  }

   

 
  






  