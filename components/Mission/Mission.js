import React, { useRef } from "react"
import Container from "../Container/Container"
import styles from "./Mission.module.scss"
import Image from "next/image"

import useParallax from "../../hooks/useParallax"
import { generateUrl } from "../../helpers/generateUrl"
import {
    revenue,
    user,
    graphic,
    circle_bg,
    green_leaf,
    red_leaf,
    orange_leaf,
    purple_leaf,
} from "../../helpers/imgSrc"

const Mission = () => {
    const missionRef = useRef()
    const [greenX, greenY] = useParallax(missionRef, 10)
    const [redsmallX, redsmallY] = useParallax(missionRef, 5)
    const [orangeBigX, orangeBigY] = useParallax(missionRef, 12)
    const [purpleX, purpleY] = useParallax(missionRef, 13)
    const [redBigX, redBigY] = useParallax(missionRef, 9)
    const [orangeSmallX, orangeSmallY] = useParallax(missionRef, 5)
    return (
        <Container>
            <div className={styles.mission} ref={missionRef}>
                <div
                    className={styles.mission__greenLeaf}
                    style={{
                        transform: `translate(${greenX}px, ${greenY}px)`,
                    }}
                >
                    <Image
                        loader={generateUrl}
                        src={green_leaf}
                        alt="logo"
                        layout="fill"
                    />
                </div>
                <div
                    className={styles.mission__redLeaf_small}
                    style={{
                        transform: `translate(${redsmallX}px, ${redsmallY}px)`,
                    }}
                >
                    <Image
                        loader={generateUrl}
                        src={red_leaf}
                        alt="logo"
                        layout="fill"
                    />
                </div>
                <div
                    className={styles.mission__orangeLeaf_big}
                    style={{
                        transform: `translate(${orangeBigX}px, ${orangeBigY}px)`,
                    }}
                >
                    <Image
                        loader={generateUrl}
                        src={orange_leaf}
                        alt="logo"
                        layout="fill"
                    />
                </div>
                <div
                    className={styles.mission__purpleLeaf}
                    style={{
                        transform: `translate(${purpleX}px, ${purpleY}px)`,
                    }}
                >
                    <Image
                        loader={generateUrl}
                        src={purple_leaf}
                        alt="logo"
                        layout="fill"
                    />
                </div>
                <div
                    className={styles.mission__orangeLeaf_small}
                    style={{
                        transform: `translate(${orangeSmallX}px, ${orangeSmallY}px) rotate(-45deg)`,
                    }}
                >
                    <Image
                        loader={generateUrl}
                        src={orange_leaf}
                        alt="logo"
                        layout="fill"
                    />
                </div>
                <div
                    className={styles.mission__redLeaf_big}
                    style={{
                        transform: `translate(${redBigX}px, ${redBigY}px)`,
                    }}
                >
                    <Image
                        loader={generateUrl}
                        src={red_leaf}
                        alt="logo"
                        layout="fill"
                    />
                </div>
                <div className={styles.mission__content}>
                    <div className={styles.mission__greenInner}>
                        <Image
                            loader={generateUrl}
                            src={green_leaf}
                            alt="logo"
                            layout="fill"
                        />
                    </div>
                    <div className={styles.mission__redInner}>
                        <Image
                            loader={generateUrl}
                            src={red_leaf}
                            alt="logo"
                            layout="fill"
                        />
                    </div>
                    <div className={styles.mission__orangeInner}>
                        <Image
                            loader={generateUrl}
                            src={orange_leaf}
                            alt="logo"
                            layout="fill"
                        />
                    </div>
                    <div className={styles.mission__purpleInner}>
                        <Image
                            loader={generateUrl}
                            src={purple_leaf}
                            alt="logo"
                            layout="fill"
                        />
                    </div>

                    <div className={styles.mission__bg}>
                        <Image
                            loader={generateUrl}
                            src={circle_bg}
                            alt="logo"
                            layout="fill"
                        />
                    </div>
                    <h2 className={styles.mission__title}>
                        The scale of the challenges facing our planet can seem
                        daunting, but we can all do something.
                    </h2>

                    <div className={styles.mission__listWrapper}>
                        <ul className={styles.mission__list}>
                            <li className={styles.mission__item}>
                                <div className={styles.mission__icon}>
                                    <Image
                                        loader={generateUrl}
                                        src={user}
                                        alt="logo"
                                        width={42}
                                        height={42}
                                        layout="responsive"
                                    />
                                </div>
                                <p className={styles.mission__desc}>
                                    Assets value COMPOSer
                                </p>
                            </li>
                            <li className={styles.mission__item}>
                                <div className={styles.mission__icon}>
                                    <Image
                                        loader={generateUrl}
                                        src={graphic}
                                        alt="logo"
                                        width={40}
                                        height={40}
                                        layout="responsive"
                                    />
                                </div>

                                <p className={styles.mission__desc}>
                                    Assets value COMPOSer
                                </p>
                            </li>
                            <li className={styles.mission__item}>
                                <div className={styles.mission__icon}>
                                    <Image
                                        loader={generateUrl}
                                        src={revenue}
                                        alt="logo"
                                        width={32}
                                        height={40}
                                        layout="responsive"
                                    />
                                </div>

                                <p className={styles.mission__desc}>
                                    Assets value COMPOSer
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Mission
