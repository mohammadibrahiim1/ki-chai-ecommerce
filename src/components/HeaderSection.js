"use client";
import React from "react";
import { HeaderCarousel } from "./HeaderCarousel";
import { HCard } from "./HCard";
import { createStyles } from "@mantine/core";
import { ToggleMenu } from "./ToggleMenu";

const useStyles = createStyles({
  container: {
    width: "80%",
    margin: "auto",
    display: "flex",
    // gridTemplateColumns: "repeat(2,1fr)",
    justifyContent: "space-evenly",
    alignItems: "start",
    gap: "15px",
  },
});

const HeaderSection = () => {
  const { classes } = useStyles();
  return (
    <div>
      <section>
        <div className={classes.container}>
          <ToggleMenu></ToggleMenu>
          <HeaderCarousel></HeaderCarousel>
          <HCard></HCard>
        </div>
      </section>
    </div>
  );
};

export default HeaderSection;
