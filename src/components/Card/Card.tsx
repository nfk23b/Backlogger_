import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CardItemType } from '@types';
import styles from './Card.module.scss'

import img from './placeholder.jpg';

export interface CardProps {
  data: CardItemType
}

const Card = (props: CardProps) => {
  const {
      data,
      ...others
  } = props;

    return (
        <Link href={`/games/[${data.slug}]`} as={`/games/${data.slug}`}>
          <a className={styles.card}>
            <Image layout='responsive' src={img} />
            <div className={styles.content}>
              <div className={styles.header}>
                <h2 className={styles.title}>{`${data.name}`}</h2>
                <p className={styles.subTitle}>Maybe here as well I think</p>
              </div>
              <p className={styles.description}>Phasellus quam turpis, feugiat sit amet in, hendrerit in lectus. Praesent sed semper amet bibendum tristique fringilla.</p>
            </div>
          </a>
        </Link>
      )
};

export default Card;