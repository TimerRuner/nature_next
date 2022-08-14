import React from "react"
import styles from "./PrevArrow.module.scss"
import Image from "next/image"

import { prev_arrow } from "../../../helpers/imgSrc"
import { generateUrl } from "../../../helpers/generateUrl"

const PrevArrow = ({ onClick }) => {
    return (
        <div className={styles.prewArrow} onClick={onClick}>
            <Image src={prev_arrow} loader={generateUrl} layout="fill" />
        </div>
    )
}

export default PrevArrow
