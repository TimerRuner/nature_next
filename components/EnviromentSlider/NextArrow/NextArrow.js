import React from "react"
import styles from "./NextArrow.module.scss"
import Image from "next/image"
import { next_arrow } from "../../../helpers/imgSrc"
import { generateUrl } from "../../../helpers/generateUrl"

const NextArrow = ({ onClick }) => {
    return (
        <div className={styles.nextArrow} onClick={onClick}>
            <Image src={next_arrow} loader={generateUrl} layout="fill" />
        </div>
    )
}

export default NextArrow
