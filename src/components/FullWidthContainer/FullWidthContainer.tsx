import React from "react";
import styles from './FullWidthContainer.module.scss'

type FullWidthContainerProps = {
  children: React.ReactNode
}

const FullWidthContainer = (props: FullWidthContainerProps) => {
    return (
        <div className={styles.root}>
            <div className={styles.content}>
                {props.children}
            </div>
        </div>
      )
};

export default FullWidthContainer;