import Card from "@components/Card";
import React from "react";
import styles from './Listing.module.scss'
import { CardItemType } from '@types';

export interface ListingProps {
    data: CardItemType[]
}

const Listing = (props: ListingProps) => {
    const {
        data,
        ...others
    } = props;
    
// console.log(data)
    return (
        <div className={styles.listing}>
            {data && data.map((item: CardItemType) => <Card data={item} key={item.slug}/>)}
        </div>
      )
};

export default Listing;