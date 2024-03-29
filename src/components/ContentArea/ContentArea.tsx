import React from "react";
import styles from './ContentArea.module.scss'
import { Typography } from "@src/index";
import { TypographyMargin, TypographyType } from "@types";

const ContentArea = () => {
    return (
        <div className={styles.content}>
            <Typography variant={TypographyType.H2} margin={TypographyMargin.LARGE}>Page title</Typography>
            <Typography variant={TypographyType.PARAGRAPH} margin={TypographyMargin.EXTRALARGE}>
                Phasellus quam turpis, feugiat sit amet ornare in, hendrerit in lectus. Praesent semper mod quis eget mi. Etiam eu ante risus. Aliquam erat volutpat. Aliquam luctus et mattis lectus sit amet pulvinar. Nam turpis nisi consequat etiam.
            </Typography>

            <div className={styles.bottom}>
                <Typography variant={TypographyType.H3} margin={TypographyMargin.LARGE}>Subheading</Typography>
                <Typography variant={TypographyType.PARAGRAPH}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac quam risus, at tempus justo. Sed dictum rutrum massa eu volutpat. Quisque vitae hendrerit sem. Pellentesque lorem felis, ultricies a bibendum id, bibendum sit amet nisl. Mauris et lorem quam. Maecenas rutrum imperdiet vulputate. Nulla quis nibh ipsum, sed egestas justo. Morbi ut ante mattis orci convallis tempor. Etiam a lacus a lacus pharetra porttitor quis accumsan odio. Sed vel euismod nisi. Etiam convallis rhoncus dui quis euismod. Maecenas lorem tellus, congue et condimentum ac, ullamcorper non sapien. Donec sagittis massa et leo semper a scelerisque metus faucibus. Morbi congue mattis mi. Phasellus sed nisl vitae risus tristique volutpat. Cras rutrum commodo luctus.
                    <br/>
                    Phasellus odio risus, faucibus et viverra vitae, eleifend ac purus. Praesent mattis, enim quis hendrerit porttitor, sapien tortor viverra magna, sit amet rhoncus nisl lacus nec arcu. Suspendisse laoreet metus ut metus imperdiet interdum aliquam justo tincidunt. Mauris dolor urna, fringilla vel malesuada ac, dignissim eu mi. Praesent mollis massa ac nulla pretium pretium. Maecenas tortor mauris, consectetur pellentesque dapibus eget, tincidunt vitae arcu. Vestibulum purus augue, tincidunt sit amet iaculis id, porta eu purus.
                </Typography>
            </div>
        </div>
      )
};

export default ContentArea;