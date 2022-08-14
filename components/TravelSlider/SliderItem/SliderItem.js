import React, { useRef } from "react"
import styles from "./SliderItem.module.scss"
import Image from "next/image"
import { big_mobile, small_mobile } from "../../../helpers/imgSrc"
import { generateUrl } from "../../../helpers/generateUrl"
import useParallax from "../../../hooks/useParallax"

const SliderItem = ({ title, desc, bgColor }) => {
    const slideRef = useRef()
    const [xPrev, yPrev] = useParallax(slideRef, 7)
    const [xBefore, yBefore] = useParallax(slideRef, 10)
    return (
        <div
            ref={slideRef}
            className={styles.sliderItem}
            style={{ backgroundColor: bgColor }}
        >
            <div className={styles.sliderItem__textContent}>
                <h2>{title}</h2>
                <p>{desc}</p>
            </div>
            <div className={styles.sliderItem__images}>
                <div
                    className={styles.sliderItem__imgBefore}
                    style={{
                        transform: `translate(${xPrev}px, 0)`,
                    }}
                >
                    <Image
                        src={big_mobile}
                        loader={generateUrl}
                        width={272}
                        height={432}
                        layout="fill"
                    />
                </div>
                <div
                    className={styles.sliderItem__imgAfter}
                    style={{
                        transform: `translate(${xBefore}px, 0)`,
                    }}
                >
                    <Image
                        src={small_mobile}
                        loader={generateUrl}
                        width={252}
                        height={368}
                        layout="fill"
                    />
                </div>
            </div>
        </div>
    )
}

export default SliderItem
