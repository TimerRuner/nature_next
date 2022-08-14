import React from "react"
import styles from "./SliderItem.module.scss"
import Image from "next/image"

import { generateUrl } from "../../../helpers/generateUrl"
import { slidebg } from "../../../helpers/imgSrc"

const SliderItem = ({ cover, title, desc }) => {
    return (
        <div className={styles.sliderItem}>
            <div className={styles.sliderItem__hoverbg}>
                <Image src={slidebg} loader={generateUrl} layout="fill" />
            </div>
            <div className={styles.sliderItem__coverbg}>
                <Image src={cover} loader={generateUrl} layout="fill" />
            </div>
            <div className={styles.sliderItem__content}>
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default SliderItem
