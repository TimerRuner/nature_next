import React from "react"
import styles from "./HeaderButton.module.scss"

const HeaderButton = ({ title }) => {
    return (
        <button className={styles.headerButton}>
            <span>{title}</span>
        </button>
    )
}

export default HeaderButton
