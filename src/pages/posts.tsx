import {useState, useEffect} from "react"
import Navigation from "@/pages/components/Navigation"
import {IPosts} from "@/pages/models/model"

export default function Posts() {
    const [posts, setPosts] = useState<IPosts[]>([])

    useEffect(() => {
       async function load() {
         const response = await fetch("http://localhost:4200/posts")
         const json = await response.json()

         setPosts(json)
       }

       load()
    }, [])

    return(
        <Navigation title="Posts page">
            <h1>Posts</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        {post.body}
                    </li>
                ))}
            </ul>
        </Navigation>
    )
}