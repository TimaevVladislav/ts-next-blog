import Link from "next/link"
import {INavigationProps} from "@/pages/models/model"
import Head from "next/head"

export default function Navigation({ children, title }: INavigationProps) {
    return (
       <>
           <Head>
               <title>{title}</title>
           </Head>
           <nav className="light-blue lighten-1" role="navigation">
               <div className="nav-wrapper container">
                   <a id="logo-container" href="#" className="brand-logo">Logo</a>
                   <ul className="right hide-on-med-and-down">
                       <li>
                           <Link href="/">
                               Home
                           </Link>
                       </li>
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
           <main className="container">
               {children}
           </main>
       </>
    )
}