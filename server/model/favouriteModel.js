const db = require('../helpers/database');

//add a new like record
exports.like = async function like (user_id,dog_id) {
  console.log('details', user_id,dog_id)
  let query = "INSERT INTO favourite SET dog_id=?, user_id=? ON DUPLICATE KEY UPDATE  dog_id=dog_id ";  // fail silently if the like is already there 

  let result = await db.run_query(query, [dog_id,user_id]);
  return result;
}
  
//remove a like record
exports.dislike = async function dislike (dog_id, user_id) {
  let query = "DELETE FROM favourite WHERE dog_id=? AND user_id=?; ";
  let result = await db.run_query(query, [dog_id, user_id]);
  return result;
}
  
//count the likes for dog
exports.count = async function count (dog_id) {
  let query = "SELECT count(1) as likes FROM favourite WHERE dog_id=?;";
  let result = await db.run_query(query, [dog_id]);
  return result[0].likes;
}

//user favourite dogs by  likes 
exports.favouriteDog = async function favouriteDog (user_id) {
  let query = "SELECT dog_id FROM favourite WHERE user_id=?;";
  let result = await db.run_query(query, [user_id]);
  return result;
}
