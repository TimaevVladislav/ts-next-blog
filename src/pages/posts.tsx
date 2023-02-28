import Navigation from "@/pages/components/Navigation"
import {IPosts} from "@/pages/models/model"
import Link from "next/link"

export default function Posts({ posts }: any) {



    return(
        <Navigation title="Posts page">
            <h1>Posts</h1>
            <ul>
                {posts.map((post: IPosts)=> (
                    <li key={post.id}>
                        <Link href={{pathname: `/post/[id]`, query: { ...post }}} as={`/post/${post.id}`}>
                            {post.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </Navigation>
    )
}

Posts.getInitialProps = async () => {
    const response = await fetch("http://localhost:4200/posts")
    const posts = await response.json()

    return { posts }
}