
import UsersTable from "../features/users/UsersTable";
function Users(){
  

    return (
        <>
            <div className="hidden h-full flex-1 flex-col space-y-4 px-2 md:flex">
                <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold tracking-tight">
                    Users
                </h2>
                </div>
                <UsersTable></UsersTable>
            </div>
        </>
    )
}

export default Users;