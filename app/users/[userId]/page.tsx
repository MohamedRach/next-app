import GetUser from "@/lib/getUser";
import GetUserPosts from "@/lib/getUserPosts";
import { Suspense } from "react";
import UserPosts from "./components/UserPosts";
import getAllUsers from "@/lib/getAllusers";
import type { Metadata } from "next";

import { notFound} from 'next/navigation'


type Params = {
    params : {
        userId: string
    }
}

export async function generateMetadata({params: {userId}}: Params): Promise<Metadata>{
    const userData: Promise<User> = GetUser(userId)
    const user = await userData
    if (!user.name){
        return {
            title: "User Not Found"
        }
    }
    return {
        title: user.name,
        description: `This is the posts of ${user.name}`
    }
}

const UserPage = async ({params: {userId}}: Params) => {
    const userData: Promise<User> = GetUser(userId)
    const UserPostsData: Promise<Post[]> = GetUserPosts(userId)

    //const [user, userPosts] = await Promise.all([userData, UserPostsData])
    const user = await userData

    if(!user.name) return notFound()
    return (
        <>
            <h2>{user.name}</h2>
            <br />
            <Suspense fallback={<h2>Loading...</h2>}>
                <UserPosts promise = {UserPostsData}/>
            </Suspense>
            
        </>
    );
}

export async function generateStaticParams() {
    const usersData: Promise<User[]> = getAllUsers()
    const users = await usersData

    return users.map(user => ({
        userId: user.id.toString()
    }))
}

export default UserPage;