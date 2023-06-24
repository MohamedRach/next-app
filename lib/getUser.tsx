const GetUser = async (userId: string): Promise<User> => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    if (!res.ok) undefined
    return res.json();
}
 
export default GetUser; 