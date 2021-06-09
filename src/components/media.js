import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import {
    footer,
    socialContainer,
    socialLinks,
    socialItem,
} from './media.module.css'

const Media = () => {
    return (
        <div>
            <hr className={footer}/>
            <div className={socialContainer}>
                <ul className={socialLinks}>
                    <li className={socialItem}>
                        <a href="mailto:gabe.schoenbach@gmail.com">
                            <StaticImage alt="Email"
                                         src="../images/email_dark.png"
                                         width={40}>
                            </StaticImage>
                        </a>
                    </li>
                    <li className={socialItem}>
                        <a href="https://github.com/gabeschoenbach">
                            <StaticImage alt="GitHub"
                                         src="../images/github_dark.png"
                                         width={40}>
                            </StaticImage>
                        </a>
                    </li>
                    <li className={socialItem}>
                        <a href="https://twitter.com/gabecubed">
                            <StaticImage alt="Twitter"
                                         src="../images/twitter_dark.png"
                                         width={40}>
                            </StaticImage>
                        </a>
                    </li>
                    <li className={socialItem}>
                        <a href="https://instagram.com/gabesquared">
                            <StaticImage alt="Instagram"
                                         src="../images/instagram_dark.png"
                                         width={40}>
                            </StaticImage>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Media