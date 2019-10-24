import React from "react"
import styles from "../styles/devcanvas.module.scss"

const Hybrid = ({ design, developemnt, collaborative, adaptive, lovesToLearn, bigPictureThinker }) => (
  <div className={styles.pageWrap}>
    <section>
        <h3>I need some room to breathe!</h3>
        <div className={styles.sec3}>
            <div className={styles.solidBox}></div>
            <div className={styles.solidBox}></div>
            <div className={styles.solidBox}></div>
            <div className={styles.solidBox}></div>
            <div className={styles.solidBox}></div>
        </div>
    </section>
  </div>
)

export default Hybrid;
