import UserDetail from '../features/users/UserDetail'

function User(){
    return (
        <>
            <div className="hidden h-full flex-1 flex-col space-y-4 px-2 md:flex">
                <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold tracking-tight">
                    User Detail
                </h2>
                </div>
                <UserDetail></UserDetail>   
            </div>
        </>
    )
}

export default User;