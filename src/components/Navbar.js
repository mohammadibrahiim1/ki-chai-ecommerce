"use client";
import React from "react";
import { Headeer } from "./Header";
import { CategoryMenu } from "./CategoryMenu";
import { Menu } from "./Menu";
import { createStyles } from "@mantine/core";

const useStyles = createStyles({
  navbar: {
    display: "flex",
    alignItems: "center",
    gap: "25px",
    width: "80%",
    margin: "auto",
  },
});

const Navbar = () => {
  const { classes } = useStyles();
  return (
    <div>
      <Headeer></Headeer>
      <div className={classes.navbar}>
        <CategoryMenu></CategoryMenu>
        <Menu></Menu>
      </div>
    </div>
  );
};

export default Navbar;
