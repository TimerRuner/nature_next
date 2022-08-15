import React from "react"
import styles from "./FAQ.module.scss"
import Button from "../UI/Button/Button"
import Container from "../Container/Container"

const FAQ = () => {
    return (
        <Container>
            <div className={styles.faq}>
                <div className={styles.faq__desc}>
                    <h2>Ready to Get started?</h2>
                    <p>
                        When pattern is mentioned in interior design, it is easy
                        to asso- ciate it with a geometric patterned wallpaper
                        or colourful prints on interior fabrics.
                    </p>
                    <Button title="Contact us" width={166} height={48} />
                </div>
                <div className={styles.faq__spoillers}>
                    <div className={styles.spoiller}>
                        <input type="checkbox" id="spoiller1" />
                        <label htmlFor="spoiller1">
                            <div className={styles.spoiller__title}>
                                What can I do to protect our planet?
                            </div>
                            <div className={styles.spoiller__crossWrapper}>
                                <span className={styles.spoiller__cross}></span>
                            </div>
                        </label>

                        <div className={styles.spoiller__content}>
                            <div className={styles.spoiller__row}>
                                <div className={styles.spoiller__text}>
                                    Not to make an open fire in nature and to
                                    clean up litter; not to pollute open water
                                    bodies; to switch to alternative energy
                                    sources; to reduce the use of non-renewable
                                    resources
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default FAQ
