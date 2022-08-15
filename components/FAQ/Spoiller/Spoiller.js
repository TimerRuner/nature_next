import React from "react"
import styles from "./Spoiller.module.scss"

const Spoiller = ({ title, text, id }) => {
    return (
        <div className={styles.spoiller}>
            <input type="checkbox" id={id} />
            <label htmlFor={id}>
                <div className={styles.spoiller__title}>{title}</div>
                <div className={styles.spoiller__crossWrapper}>
                    <span className={styles.spoiller__cross}></span>
                </div>
            </label>

            <div className={styles.spoiller__content}>
                <div className={styles.spoiller__row}>
                    <div className={styles.spoiller__text}>{text}</div>
                </div>
            </div>
        </div>
    )
}

export default Spoiller
