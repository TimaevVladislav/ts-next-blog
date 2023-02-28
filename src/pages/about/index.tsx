import Router from "next/router"
import Navigation from "@/pages/components/Navigation"

interface ITitle { title: string }

export default function Index({ title }: ITitle) {

    const linkClickHandler = () => {
        Router.push("/")
    }

    return (
        <Navigation title="About page">
            <h1>{title}</h1>

            <button className="btn" onClick={linkClickHandler}>Go back to home</button>
            <button className="btn" onClick={() => Router.push("/posts")}>Go to posts</button>
        </Navigation>
    )
}

Index.getInitialProps = async () => {
    const response = await fetch(`http://localhost:4200/about`)
    const data = await response.json()

    return { title: data.title }
}