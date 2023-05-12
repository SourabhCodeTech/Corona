import React from 'react'
import './Footer.css'
import './Covid.css'
// headt all images in this file to use.
import linkedin from './image/linkedin.png'
import github from './image/github2.png'
import twitter from './image/twitter.png'
import dev from './image/dev.png'
import facebook from './image/fb.png'
import insta from './image/insta.png'

function Footer() {
    return (
        <>
            <section id="foo">
                <div className="item-foo">

<br />
                    <span> &copy; May, 2023 </span>
                    <h5>     Created By : Roli Gautam
                    </h5>
<br />
                    <ul className="social">
                        <li>
                            <a  className="footer-img" href="https://www.linkedin.com/in/roli-gautam4/" ><img src={linkedin} alt="LINKEDIN" /></a>
                        </li>
                        <li>
                            <a className="footer-img"  href="https://github.com/RoliGautam" ><img src={github} alt="GITHUB" className="border-img" /></a>
                        </li>
                        <li>
                            <a className="footer-img"  href="https://twitter.com/RoliGautam3?s=08" ><img src={twitter} alt="TWITTER" /></a>
                        </li>

                        <li>
                            <a className="footer-img"  href="https://dev.to/roligautam" ><img src={dev} alt="DEV" className="border-img" /></a>
                        </li>
                        <li>
                            <a  className="footer-img" href="https://www.facebook.com/roli.gautam.5473" ><img src={facebook} alt="FACEBOOK" /></a>
                        </li>
                        <li>
                            <a className="footer-img"  href="https://www.instagram.com/roligautam.10.07/" ><img src={insta} alt="INSTAGRAM" /></a>
                        </li>
                        

                    </ul>


                </div>

            </section>
        </>
    )
}
export default Footer
