import React from "react"
import styles from "./Button.module.scss"

const Button = ({ width, height, title }) => {
    return (
        <button
            className={styles.button}
            style={{ minWidth: width, minHeight: height }}
        >
            <span>{title}</span>
        </button>
    )
}

export default Button
