import Card from "@components/Card";
import React from "react";
import styles from './Listing.module.scss'

const Listing = () => {
    return (
        <div className={styles.listing}>
            <Card />
            <Card />
            <Card />
        </div>
      )
};

export default Listing;