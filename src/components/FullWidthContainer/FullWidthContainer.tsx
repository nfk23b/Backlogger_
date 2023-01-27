import React from "react";
import styles from './FullWidthContainer.module.scss';
import { FullWidthContainerProps } from '@types';

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