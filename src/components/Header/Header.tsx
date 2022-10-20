import Link from "next/link";
import React from "react";
import styles from './Header.module.scss'

const Header = () => {
    return (
        <div className={styles.header}>
            <Link href='/'>
                <a className={styles.logo}>Backlogger</a>
            </Link>
        </div>
    )
};

export default Header;