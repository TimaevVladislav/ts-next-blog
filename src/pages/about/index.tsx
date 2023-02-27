import Router from "next/router"

export default function Index() {

    const linkClickHandler = () => {
        Router.push("/")
    }

    return (
        <>
           <h1>About page</h1>

           <button onClick={linkClickHandler}>Go back to home</button>
           <button onClick={() => Router.push("/posts")}>Go to posts</button>
        </>
    )
}