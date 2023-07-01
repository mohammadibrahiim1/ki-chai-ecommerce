"use client";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel } from "@mantine/carousel";
import { createStyles } from "@mantine/core";
// https://i.ibb.co/vdFtW4S/banner-img-3.png
// https://i.ibb.co/NZvxFYP/banner-img-2.png
// https://i.ibb.co/XzvwKq2/banner-img-1.png

const useStyles = createStyles({
  container: {
    width: "100%",
  },
  carousel_img1: {
    background: "url(https://i.ibb.co/XzvwKq2/banner-img-1.png)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
  carousel_img2: {
    background: "url(https://i.ibb.co/NZvxFYP/banner-img-2.png)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
  carousel_img3: {
    background: "url(https://i.ibb.co/vdFtW4S/banner-img-3.png)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
});

export const HeaderCarousel = () => {
  const { classes } = useStyles();
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  return (
    <Carousel
      className={classes.container}
      // maw={1100}
      // mx="auto"
      withIndicators
      height={360}
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
    >
      <Carousel.Slide className={classes.carousel_img1}>1</Carousel.Slide>
      <Carousel.Slide className={classes.carousel_img2}>1</Carousel.Slide>
      <Carousel.Slide className={classes.carousel_img3}>1</Carousel.Slide>
    </Carousel>
  );
};
