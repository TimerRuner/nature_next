import react from "react"
import styles from "./Members.module.scss"
import Image from "next/image"
import { head } from "../../../helpers/imgSrc"
import { generateUrl } from "../../../helpers/generateUrl"

const Members = ({ count, bg }) => {
    return (
        <div
            className={styles.members}
            style={{ backgroundImage: `url('${bg}')` }}
        >
            <div className={styles.members__icon}>
                <Image
                    src={head}
                    loader={generateUrl}
                    width={48}
                    height={56}
                    layout="fill"
                />
            </div>
            <div className={styles.members__content}>
                <h3>Members</h3>
                <div className={styles.members__count}>{count}</div>
            </div>
        </div>
    )
}

export default Members
