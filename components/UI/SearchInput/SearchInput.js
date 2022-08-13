import React, { useState } from "react"
import Button from "../Button/Button"
import styles from "./SearchInput.module.scss"

const SearchInput = () => {
    const [value, setValue] = useState("")
    return (
        <label htmlFor="search" className={styles.searchInput}>
            <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                id="search"
                placeholder="Find the place to help"
            />
            <Button title="search" width={122} height={48} />
        </label>
    )
}

export default SearchInput
