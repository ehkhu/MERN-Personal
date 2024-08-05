import axios from "../lib/axios";

//Read all
export async function getUsers() {
    const response = await axios.get(
      "/users",
    );
    return response.data;
  }

//find 
export async function getUser(id) {
  const response = await axios.get(
  '/users/'+id,
  );
  return response.data;
}
//Create 

//Update

//Delete
