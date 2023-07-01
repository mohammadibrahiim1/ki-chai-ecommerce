"use client";
import React from "react";
import {
  createStyles,
  Group,
  Paper,
  SimpleGrid,
  Text,
  rem,
  Card,
  Progress,
  Button,
} from "@mantine/core";
// import {
//   IconUserPlus,
//   IconDiscount2,
//   IconReceipt2,
//   IconCoin,
//   IconArrowUpRight,
//   IconArrowDownRight,
// } from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  value: {
    fontSize: rem(24),
    fontWeight: 700,
    lineHeight: 1,
  },

  diff: {
    lineHeight: 1,
    display: "flex",
    alignItems: "center",
  },

  icon: {
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[3]
        : theme.colors.gray[4],
  },

  card: {
    width: "295px",
    height: "150px",
    borderRadius: "6px",
    backgroundColor: "#E3F0FF",
  },
  card2: {
    width: "295px",
    height: "95px",
    borderRadius: "6px",
    backgroundColor: "#F38332",
    marginTop: "10px",
  },
  card3: {
    width: "295px",
    height: "95px",
    borderRadius: "6px",
    backgroundColor: "#55BDC3",
    marginTop: "10px",
  },

  title: {
    fontWeight: 700,
    textTransform: "uppercase",
  },
  text: {
    width: "140px",
    color: "#FFF",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "normal",
  },

  button: {
    backgroundColor: "#127FFF",
  },
}));

export const HCard = () => {
  const { classes } = useStyles();

  return (
    <div>
      <Card className={classes.card} withBorder radius="md" padding="xl">
        {" "}
        <Text fz="lg" fw={500}>
          Hi, user let’s get stated
        </Text>
        <div>
          <Button fullWidth variant="outline" mt={7}>
            Join Now
          </Button>
          <Button fullWidth variant="outline" mt={7}>
            Sign in
          </Button>
        </div>
      </Card>
      <Card className={classes.card2} withBorder radius="md" >
        {" "}
        <Text className={classes.text}>Get US $10 off with a new supplier</Text>
      </Card>
      <Card className={classes.card3} withBorder radius="md" >
        {" "}
        <Text className={classes.text}>
          Send quotes with supplier preferences
        </Text>
      </Card>
    </div>
  );
};
