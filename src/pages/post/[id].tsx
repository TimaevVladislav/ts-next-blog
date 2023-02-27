import {useRouter} from "next/router"
import Navigation from "@/pages/components/Navigation"

export default function Post() {
    const router = useRouter()

    return (
        <Navigation>
            <h1>Post {router.query.id}</h1>
        </Navigation>
    )
}