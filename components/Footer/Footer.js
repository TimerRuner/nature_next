import React from "react"
import styles from "./Footer.module.scss"
import Image from "next/image"
import Container from "../Container/Container"

import { facebook, linkedin, twitter } from "../../helpers/imgSrc"
import { generateUrl } from "../../helpers/generateUrl"
import Link from "next/link"

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Container>
                <div className={styles.footer__wrapper}>
                    <div
                        className={`${styles.footer__column} ${styles.footer__cont}`}
                    >
                        <h2
                            className={`${styles.footer__header} ${styles.footer__contacts}`}
                        >
                            Contacts
                        </h2>
                        <div className={styles.footer__content}>
                            2019 Rootz Foundation.
                            <br /> All rights reserved
                        </div>
                    </div>
                    <div className={styles.footer__column}>
                        <h2 className={styles.footer__header}>Headquarters</h2>
                        <div className={styles.footer__content}>
                            1234 Taliban <br /> Los Angeles,
                            <br /> La 1234567
                            <br /> (123) 456-7890
                        </div>
                    </div>
                    <div className={styles.footer__column}>
                        <h2 className={styles.footer__header}>Social media</h2>
                        <div className={styles.footer__content}>
                            <div className={styles.footer__social}>
                                <div className={styles.footer__socialIcon}>
                                    <Link
                                        href="https://www.linkedin.com/in/vadym-maslovskyi/"
                                        passHref
                                    >
                                        <a target="_blank">
                                            <Image
                                                src={twitter}
                                                layout="fill"
                                                loader={generateUrl}
                                            />
                                        </a>
                                    </Link>
                                </div>
                                <div className={styles.footer__socialIcon}>
                                    <Link
                                        href="https://www.linkedin.com/in/vadym-maslovskyi/"
                                        passHref
                                    >
                                        <a target="_blank">
                                            <Image
                                                src={facebook}
                                                layout="fill"
                                                loader={generateUrl}
                                            />
                                        </a>
                                    </Link>
                                </div>
                                <div className={styles.footer__socialIcon}>
                                    <Link
                                        href="https://www.linkedin.com/in/vadym-maslovskyi/"
                                        passHref
                                    >
                                        <a target="_blank">
                                            <Image
                                                src={linkedin}
                                                layout="fill"
                                                loader={generateUrl}
                                            />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer
