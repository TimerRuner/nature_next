import React, { useState } from "react"
import styles from "./Header.module.scss"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/router"

import { logo_flower, logo_text } from "../../helpers/imgSrc"
import Container from "../Container/Container"
import { generateUrl } from "../../helpers/generateUrl"
import HeaderButton from "../UI/HeaderButton/HeaderButton"
import { menuList } from "../../helpers/menuList"

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const { asPath } = useRouter()

    const clickHandler = () => {
        setIsOpen((prev) => !prev)
    }

    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.header__wrapper}>
                    <Link href="/home">
                        <a>
                            <div className={styles.header__logo}>
                                <div className={styles.header__logoFlower}>
                                    <Image
                                        loader={generateUrl}
                                        src={logo_flower}
                                        alt="logo"
                                        width={38}
                                        height={38}
                                        layout="fill"
                                    />
                                </div>
                                <div className={styles.header__logoText}>
                                    <Image
                                        loader={generateUrl}
                                        src={logo_text}
                                        alt="logo"
                                        width={60}
                                        height={16}
                                        layout="fill"
                                    />
                                </div>
                            </div>
                        </a>
                    </Link>
                    <div
                        className={`${styles.header__burger} ${
                            isOpen ? styles._active : ""
                        }`}
                        onClick={clickHandler}
                    >
                        <span></span>
                    </div>
                    <div
                        className={`${styles.header__overlay} ${
                            isOpen ? styles._active : ""
                        }`}
                    >
                        <div className={styles.header__menu}>
                            <ul className={styles.header__list}>
                                {menuList.map((item) => (
                                    <li
                                        key={item.id}
                                        className={`${styles.header__item} ${
                                            item.link == asPath
                                                ? styles._active
                                                : ""
                                        }`}
                                    >
                                        <Link href={item.link}>
                                            {item.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <HeaderButton title="Apply" />
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header
