import React from "react"
import styles from "./MoreItem.module.scss"
import Image from "next/image"

import { generateUrl } from "../../../helpers/generateUrl"
import Link from "next/link"

const MoreItem = ({ hash, title, link, img, isVideo }) => {
    return (
        <div className={styles.moreItem}>
            <div
                className={
                    isVideo
                        ? `${styles.moreItem__img} ${styles.video}`
                        : `${styles.moreItem__img}`
                }
            >
                <Image src={img} layout="fill" loader={generateUrl} />
            </div>
            <div className={styles.moreItem__content}>
                <div className={styles.moreItem__hash}>{hash}</div>
                <h2 className={styles.moreItem__title}>{title}</h2>
                <div className={styles.moreItem__link}>
                    <Link href={link}>
                        <a>see more</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default MoreItem
