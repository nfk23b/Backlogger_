import React from "react";
import styles from './WelcomeBanner.module.scss'

const WelcomeBanner = () => {
    return (
        <div className={styles.banner}>
            <div className={styles.text}>
                <h2>Hi. This is Backlogger</h2>
                <p>Here you can store games you want to complete eventually</p>
            </div>
            <div className={styles.buttons}>
                
            </div>
        </div>
      )
};

export default WelcomeBanner;