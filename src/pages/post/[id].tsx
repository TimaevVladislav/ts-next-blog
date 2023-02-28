import {useState, useEffect} from "react"
import Navigation from "@/pages/components/Navigation"
import {useRouter} from "next/router"

export default function Post({ post: serverPost }: any) {
    const [post, setPost] = useState(serverPost)
    const router = useRouter()

    useEffect(() => {
        async function load() {
            const response = await fetch(`http://localhost:4200/posts/${router.query.id}`)
            const data = await response.json()

            setPost(data)
        }

        if (!serverPost) {
            load()
        }
    }, [])

    if (!post) {
        return (
            <Navigation title="Loading">
                <p>Loading...</p>
            </Navigation>
        )
    }

    return (
        <Navigation title={`${post.title}`}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </Navigation>
    )
}


Post.getInitialProps = async ({ query, req }: any) => {

    if (!req) {
        return { post: null }
    }

    const response = await fetch(`http://localhost:4200/posts/${query.id}`)
    const post = await response.json()

    return { post }
}