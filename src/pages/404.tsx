import Link from "next/link"
import classes from "../styles/Error.module.css"

export default function ErrorPage() {
    return (
        <div className="container">
            <h1 className={classes.error}>Error page</h1>
            <Link href="/">Go back to safety</Link>
        </div>
    )
}