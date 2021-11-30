import * as React from 'react'
import { Link } from 'gatsby'
import { 
    container,
    navBar,
    navLinks,
    navLinkItem,
    navLinkText,
    navLinkActive,
    tag,
    hr,
} from './navigation.module.css'
import cv from '../files/cv.pdf'

const Navigation = ({pageTitle}) => {
    return (
            <main>
                <title>Gabe Schoenbach</title>
                <div className={container}>
                    <p className={tag}>
                        {pageTitle == "about" ? "": <strong>Gabe</strong>}
                        {pageTitle == "about" ? "": " Schoenbach"}
                    </p>
                    <nav className={navBar}>
                        <ul className={navLinks}>
                            <li className={navLinkItem}>
                                <Link 
                                    to="/" 
                                    className={navLinkText}
                                    activeClassName={navLinkActive}
                                >about
                                </Link>
                            </li>
                            <li className={navLinkItem}>
                                <Link 
                                    to="/projects" 
                                    className={navLinkText}
                                    activeClassName={navLinkActive}
                                >projects
                                </Link>
                            </li>
                            <li className={navLinkItem}>
                                <Link 
                                    to="/papers" 
                                    className={navLinkText}
                                    activeClassName={navLinkActive}
                                >papers
                                </Link>
                            </li>
                            <li className={navLinkItem}>
                                <Link 
                                    to="/talks" 
                                    className={navLinkText}
                                    activeClassName={navLinkActive}
                                >talks
                                </Link>
                            </li>
                            <li className={navLinkItem}>
                                <a 
                                    href={cv} 
                                    target="_blank"
                                    rel="noopener noreferral"
                                    className={navLinkText}
                                    activeClassName={navLinkActive}
                                >cv
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <hr/>
            </main>
    )
}

export default Navigation