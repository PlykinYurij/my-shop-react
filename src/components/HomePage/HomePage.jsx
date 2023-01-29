import React from "react"
import classes from "./HomePage.module.css"
import instagramIcon from "../../images/instagram.png"
import vk from "../../images/vk.png"

const HomePage = () => {
    return (
        <div className={classes.wrapperHomePage}>
            <div className={classes.containerHomaPage}>
                <h1>HomePage</h1>
                <p className={classes.contacts}>Contacts</p>
                <div className={classes.iconsContainer}>
                    <div>
                        <a className={classes.link} href="https://instagram.com/y.p.13">
                            <img className={classes.icon} src={instagramIcon} />
                        </a>
                    </div>
                    <div>
                        <a className={classes.link} href="https://vk.com/id76732624">
                            <img className={classes.icon} src={vk} />
                        </a>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default HomePage