import React, { useState, useRef } from "react"
import styles from "./LoginForm.module.scss"
import Button from "../../UI/Button/Button"
import Image from "next/image"

import { generateUrl } from "../../../utils/generateId"
import { red_leaf, purple_leaf } from "../../../helpers/imgSrc"
import useParallax from "../../../hooks/useParallax"

const LoginForm = () => {
    const formRef = useRef()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [redLeafX, redLeafY] = useParallax(formRef, 10)
    const [purpleLeafX, purpleLeafY] = useParallax(formRef, 13)
    return (
        <div className={styles.loginForm} ref={formRef}>
            <div
                className={styles.loginForm__redleaf}
                style={{ transform: `rotate(${-80 + redLeafX * redLeafY}deg)` }}
            >
                <Image src={red_leaf} loader={generateUrl} layout="fill" />
            </div>
            <div
                className={styles.loginForm__purpleleaf}
                style={{
                    transform: `rotate(${45 + purpleLeafX * purpleLeafY}deg)`,
                }}
            >
                <Image src={purple_leaf} loader={generateUrl} layout="fill" />
            </div>
            <h2 className={styles.loginForm__title}>Log in</h2>
            <form className={styles.loginForm__form}>
                <div className={styles.loginForm__inputWrapper}>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className={styles.loginForm__input}
                        placeholder="Name"
                    />
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={styles.loginForm__input}
                        placeholder="Email"
                    />
                </div>
                <Button title="Book a demo" width={"100%"} height={48} />
            </form>
        </div>
    )
}

export default LoginForm
