import React from "react"
import Container from "../Container/Container"
import styles from "./GetStarted.module.scss"
import LoginForm from "./LoginForm/LoginForm"

const GetStarted = () => {
    return (
        <Container>
            <div className={styles.getStarted}>
                <div className={styles.getStarted__text}>
                    <h3 className={styles.getStarted__header}>
                        Get started today!
                    </h3>
                    <p className={styles.getStarted__desc}>
                        Learn more about how you can save our planet&apos;s
                        nature. From smart consumption to switching to renewable
                        energy, each of
                    </p>
                </div>
                <LoginForm />
            </div>
        </Container>
    )
}

export default GetStarted
