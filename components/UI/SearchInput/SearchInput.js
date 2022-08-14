import React, { useState } from "react"
import Button from "../Button/Button"
import styles from "./SearchInput.module.scss"
import { location } from "../../../helpers/imgSrc"

const SearchInput = () => {
    const [value, setValue] = useState("")
    return (
        <label htmlFor="search" className={styles.searchInput}>
            <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                id="search"
                placeholder="Find the place to help"
                style={{
                    backgroundImage: `url('${process.env.LOCAL_URL}${location}')`,
                }}
            />
            <Button title="search" width={122} height={48} />
        </label>
    )
}

export default SearchInput
