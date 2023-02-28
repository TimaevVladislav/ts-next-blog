import {useRouter} from "next/router"
import Navigation from "@/pages/components/Navigation"

export default function Post() {
    const router = useRouter()

    return (
        <Navigation title={"Post"}>
            <h1>Post {router.query.id}</h1>
            <h2>{router.query.title}</h2>
            <p>{router.query.body}</p>
        </Navigation>
    )
}