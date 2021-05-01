const db = require('../helpers/database');


//get a single dog by its id  
exports.getById = async function getById(id) {
 
  let query = "SELECT * FROM dog WHERE id = ?";
  let values = [id];
  let data = await db.run_query(query, values);
  
  return data;
}

exports.Search = async function Search(breed) {
 
  let query = "SELECT * FROM dog WHERE breed REGEXP ? ";
  let values = [breed];
  let data = await db.run_query(query, values);
  
  return data;
}


//list all the dog in the database
exports.getAll = async function getAll () {
  
    let query = "SELECT * FROM dog ORDER BY id DESC";
    let data = await db.run_query(query);
   
    return data;
  }

  exports.getFour = async function getFour () {
    //console.log("Good to go")
     let query = "SELECT * FROM dog LIMIT 4";
     let data = await db.run_query(query);
    
     return data;
   }
  
  //create a new dog in the database 
  exports.add = async function add(Details) {
    let query = "INSERT INTO dog SET ?";
    let data = await db.run_query(query, Details);
    return data;
  }

   //update dog in the database
   exports.update = async function update(Details, id) {
    let query = "UPDATE dog SET ? WHERE id = ?";
    let data = await db.run_query(query,[Details, id]);
    return data;
  }


  
//get a single dog by its id  
exports.deleteById = async function deleteById(id) {
  console.log(id)
  let query = "DELETE  FROM dog WHERE id = ?";
  let values = [id];
  let data = await db.run_query(query, values);
  
  return data;
}


  