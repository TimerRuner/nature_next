import React, { useRef } from "react"
import Container from "../Container/Container"
import styles from "./OurTeam.module.scss"
import Image from "next/image"
import { generateUrl } from "../../helpers/generateUrl"
import { man, girl, boy, wire_bottom, wire_top } from "../../helpers/imgSrc"
import useParallax from "../../hooks/useParallax"

const OurTeam = () => {
    const teamRef = useRef()
    const [wireTopX, wireTopY] = useParallax(teamRef, 9)
    const [wireBottomX, wireBottomY] = useParallax(teamRef, 9)
    return (
        <Container>
            <div className={styles.team} ref={teamRef}>
                <div className={styles.team__desc}>
                    <h2 className={styles.team__title}>Our top team</h2>
                    <p className={styles.team__p}>
                        Learn more about how you can save our planet&apos;s
                        nature.
                    </p>
                </div>

                <div className={styles.team__photosWrapper}>
                    <div
                        className={styles.team__wireTop}
                        style={{
                            transform: `translate(${wireTopX}px, ${wireTopY}px)`,
                        }}
                    >
                        <Image
                            src={wire_top}
                            loader={generateUrl}
                            layout="fill"
                        />
                    </div>
                    <div
                        className={styles.team__wireBottom}
                        style={{
                            transform: `translate(${wireBottomX}px, ${wireBottomY}px)`,
                        }}
                    >
                        <Image
                            src={wire_bottom}
                            loader={generateUrl}
                            layout="fill"
                        />
                    </div>
                    <div className={`${styles.team__photo} ${styles.man}`}>
                        <Image
                            src={man}
                            loader={generateUrl}
                            width={341}
                            height={241}
                            layout="responsive"
                        />
                    </div>
                    <div className={`${styles.team__photo} ${styles.girl}`}>
                        <Image
                            src={girl}
                            loader={generateUrl}
                            width={341}
                            height={241}
                            layout="responsive"
                        />
                    </div>
                    <div className={`${styles.team__photo} ${styles.boy}`}>
                        <Image
                            src={boy}
                            loader={generateUrl}
                            width={276}
                            height={312}
                            layout="responsive"
                        />
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default OurTeam
