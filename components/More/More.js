import React from "react"
import Container from "../Container/Container"
import styles from "./More.module.scss"

import { moreList } from "../../helpers/moreList"
import MoreItem from "./MoreItem/MoreItem"

const More = () => {
    return (
        <Container>
            <div className={styles.more}>
                {moreList.map(({ hash, title, link, img, id, isVideo }) => (
                    <MoreItem
                        key={id}
                        title={title}
                        hash={hash}
                        link={link}
                        img={img}
                        isVideo={isVideo}
                    />
                ))}
            </div>
        </Container>
    )
}

export default More
