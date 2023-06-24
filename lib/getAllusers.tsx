const getAllUsers = async (): Promise<User[]> => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    if (!res.ok) undefined

    return res.json()

}
 
export default getAllUsers;