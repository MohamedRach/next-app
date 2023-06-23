const GetUser = async (userId: string): Promise<User> => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    if (!res.ok) throw new Error("Invalid User")
    return res.json();
}
 
export default GetUser; 