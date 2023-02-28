import Navigation from "@/pages/components/Navigation"
import {useEffect, useState} from "react"
import {IPosts} from "@/pages/models/model"
import Link from "next/link"

export default function Posts({ posts: serverPosts }: any) {
    const [posts, setPosts] = useState(serverPosts)

    useEffect(() => {
        async function load() {
            const response = await fetch(`http://localhost:4200/posts`)
            const data = await response.json()

            setPosts(data)
        }

        if (!serverPosts) {
            load()
        }
    }, [])

    if (!posts) {
        return (
            <Navigation title="Loading">
                <p>Loading...</p>
            </Navigation>
        )
    }

    return (
        <Navigation title="Posts page">
            <h1>Posts</h1>
            <ul>
                {posts.map((post: IPosts)=> (
                    <li key={post.id}>
                        <Link href={{pathname: `/post/[id]`}} as={`/post/${post.id}`}>
                            {post.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </Navigation>
    )
}

Posts.getInitialProps = async ({ req}: any) => {

    if (!req) {
        return { posts: null }
    }

    const response = await fetch(`http://localhost:4200/posts`)
    const posts = await response.json()

    return { posts }
}