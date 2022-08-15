import React from "react"
import styles from "./FAQ.module.scss"
import Button from "../UI/Button/Button"
import Container from "../Container/Container"
import { faqSpoillers } from "../../helpers/faqSpoillers"
import Spoiller from "./Spoiller/Spoiller"

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
                    {faqSpoillers.map(({ id, title, text }) => (
                        <Spoiller key={id} title={title} text={text} id={id} />
                    ))}
                </div>
            </div>
        </Container>
    )
}

export default FAQ
