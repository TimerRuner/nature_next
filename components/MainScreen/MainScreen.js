import React, { useEffect, useRef, useState } from "react"
import Container from "../Container/Container"
import styles from "./MainScreen.module.scss"
import Image from "next/image"

import { generateUrl } from "../../helpers/generateUrl"
import {
    green_leaf,
    main_text,
    orange_leaf,
    purple_leaf,
    red_leaf,
} from "../../helpers/imgSrc"
import { parot_bg } from "../../helpers/imgSrc"
import SearchInput from "../UI/SearchInput/SearchInput"
import userParallax from "../../hooks/useParallax"
import Members from "./Members/Members"
import { members } from "../../helpers/imgSrc"

const MainScreen = () => {
    const parallaxRef = useRef()
    const [xRed, yRed] = userParallax(parallaxRef, 9)
    const [xPurple, yPurple] = userParallax(parallaxRef, 5)
    const [xOrange, yOrange] = userParallax(parallaxRef, 7)

    return (
        <div className={styles.mainpage} ref={parallaxRef}>
            <Container>
                <div className={styles.mainpage__wrapper}>
                    <div className={styles.row}>
                        <div className={styles.column}>
                            <div className={styles.mainpage__poster}>
                                <Image
                                    src={main_text}
                                    loader={generateUrl}
                                    width={543}
                                    height={293}
                                    layout="fill"
                                />
                            </div>
                            <p className={styles.mainpage__desc}>
                                The scale of the challenges facing our planet
                                can seem daunting, but we can all do something.
                            </p>
                            <SearchInput />
                        </div>
                        <div className={`${styles.column} ${styles.graphic}`}>
                            <div className={styles.mainpage__parrotbgWrapper}>
                                <div
                                    className={styles.mainpage__redleaf}
                                    style={{
                                        transform: `translate(${xRed}px, ${yRed}px)  rotate(90deg)`,
                                    }}
                                >
                                    <Image
                                        src={red_leaf}
                                        loader={generateUrl}
                                        width={24}
                                        height={47}
                                        layout="fill"
                                    />
                                </div>
                                <div
                                    className={styles.mainpage__purpleleaf}
                                    style={{
                                        transform: `translate(${xPurple}px, ${yPurple}px)  `,
                                    }}
                                >
                                    <Image
                                        src={purple_leaf}
                                        loader={generateUrl}
                                        width={51}
                                        height={129}
                                        layout="fill"
                                    />
                                </div>
                                <div
                                    className={styles.mainpage__orangeleaf}
                                    style={{
                                        transform: `translate(${xOrange}px, ${yOrange}px) rotate(-45deg)`,
                                    }}
                                >
                                    <Image
                                        src={orange_leaf}
                                        loader={generateUrl}
                                        width={25}
                                        height={52}
                                        layout="fill"
                                    />
                                </div>
                                <div
                                    className={
                                        styles.mainpage__purpleleaf_small
                                    }
                                >
                                    <Image
                                        src={purple_leaf}
                                        loader={generateUrl}
                                        width={23}
                                        height={49}
                                        layout="fill"
                                    />
                                </div>
                                <div
                                    className={`${styles.mainpage__greenleaf} .snakes`}
                                >
                                    <Image
                                        src={green_leaf}
                                        loader={generateUrl}
                                        width={17}
                                        height={35}
                                        layout="fill"
                                    />
                                </div>
                                <div className={styles.mainpage__parrotbg}>
                                    <Image
                                        src={parot_bg}
                                        loader={generateUrl}
                                        width={357}
                                        height={494}
                                        layout="fill"
                                    />
                                </div>
                            </div>
                            <Members count={"29 128"} bg={members} />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default MainScreen
