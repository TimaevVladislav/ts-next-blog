import Router from "next/router"
import Navigation from "@/pages/components/Navigation"

export default function Index() {

    const linkClickHandler = () => {
        Router.push("/")
    }

    return (
        <Navigation title="About page">
            <h1>About page</h1>

            <button onClick={linkClickHandler}>Go back to home</button>
            <button onClick={() => Router.push("/posts")}>Go to posts</button>
        </Navigation>
    )
}