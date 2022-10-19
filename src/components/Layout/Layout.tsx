import Header from "@components/Header";
import React from "react";
import styles from './Layout.module.scss'

type LayoutProps = {
    children: React.ReactNode
}

const Layout = (props: LayoutProps) => {
    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                <Header />
                {props.children}
            </div>
        </div>
      )
};

export default Layout;