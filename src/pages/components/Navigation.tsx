import Link from "next/link"

export default function Navigation() {
    return (
        <nav className="light-blue lighten-1" role="navigation">
            <div className="nav-wrapper container">
                <a id="logo-container" href="#" className="brand-logo">Logo</a>
                <ul className="right hide-on-med-and-down">
                    <li>
                        <Link href="/about">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/posts">
                            Posts
                        </Link>
                    </li>
                </ul>
                <ul id="nav-mobile" className="sidenav">
                    <li>
                        <li>
                            <Link href="/about">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/posts">
                                Posts
                            </Link>
                        </li>
                    </li>
                </ul>
                <a href="#" data-target="nav-mobile" className="sidenav-trigger">
                    <i className="material-icons">menu</i>
                </a>
            </div>
        </nav>
    )
}