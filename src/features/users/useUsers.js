import { getUsers } from "../../service/apiUser";

export async function useUsers(){
    const users = await getUsers();
    if(users)return users;
    return [];
}