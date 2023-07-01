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
} from "@mantine/core";
// import {
//   IconUserPlus,
//   IconDiscount2,
//   IconReceipt2,
//   IconCoin,
//   IconArrowUpRight,
//   IconArrowDownRight,
// } from "@tabler/icons-react";

// const useStyles = createStyles((theme) => ({
//   root: {
//     padding: `calc(${theme.spacing.xl} * 1.5)`,
//   },

//   value: {
//     fontSize: rem(24),
//     fontWeight: 700,
//     lineHeight: 1,
//   },

//   diff: {
//     lineHeight: 1,
//     display: "flex",
//     alignItems: "center",
//   },

//   icon: {
//     color:
//       theme.colorScheme === "dark"
//         ? theme.colors.dark[3]
//         : theme.colors.gray[4],
//   },

//   title: {
//     fontWeight: 700,
//     textTransform: "uppercase",
//   },
// }));

// const icons = {
//   user: IconUserPlus,
//   discount: IconDiscount2,
//   receipt: IconReceipt2,
//   coin: IconCoin,
// };
// const data = [
//   {
//     title: "string",
//     icon: "keyof typeof icons",
//     value: "string",
//     diff: "number",
//   },
// ];
export const HCard = () => {
  // const { classes } = useStyles();

  return (
    <div>
      {/* <div className={classes.root}>
        <SimpleGrid
          cols={4}
          breakpoints={[
            { maxWidth: "md", cols: 2 },
            { maxWidth: "xs", cols: 1 },
          ]}
        ></SimpleGrid>
      </div> */}
      <Card
        withBorder
        radius="md"
        padding="xl"
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
        })}
      >
        <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
          Monthly goal
        </Text>
        <Text fz="lg" fw={500}>
          $5.431 / $10.000
        </Text>
        <Progress value={54.31} mt="md" size="lg" radius="xl" />
      </Card>
    </div>
  );
};
