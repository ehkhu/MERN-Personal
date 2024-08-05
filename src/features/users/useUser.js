import { getUser } from "../../service/apiUser";

export async function useUser(id){
    const user = await getUser(id);
    if(user) return user;
    return {};
}