import React from "react";
import styles from './Sidebar.module.scss'
import { List } from 'reactstrap';
import { isMobile } from "@helpers/index";
import { Typography } from "@src/index";
import { TypographyMargin, TypographyType } from "@types";
import { Button } from "reactstrap";

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <Typography variant={TypographyType.H3} margin={TypographyMargin.LARGE}>Subheading</Typography>
            <Typography variant={TypographyType.PARAGRAPH} margin={TypographyMargin.EXTRALARGE}>
                  Phasellus quam turpis, feugiat sit amet ornare in, hendrerit in lectus. Praesent semper mod quis eget mi. Etiam eu ante risus. Aliquam erat volutpat. Aliquam luctus et mattis lectus sit amet pulvinar. Nam turpis nisi consequat etiam.
            </Typography>
            <Button color="primary" block={isMobile()} size="lg">Some button</Button>
            <div className={styles.bottom}>
                <Typography variant={TypographyType.H3} margin={TypographyMargin.LARGE}>Subheading</Typography>

                <List className={styles.list}>
                    <li><a href="#">link1</a></li>
                    <li><a href="#">link2</a></li>
                    <li><a href="#">link3</a></li>
                    <li><a href="#">link4</a></li>
                </List>
            </div>
        </div>
      )
};

export default Sidebar;