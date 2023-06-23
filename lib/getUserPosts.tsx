const GetUserPosts = async (userId: string): Promise<Post[]> => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId${userId}`)
    if (!res.ok) throw new Error("Invalid User")
    return res.json();
}
 
export default GetUserPosts; 