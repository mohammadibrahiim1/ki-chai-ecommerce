"use client";
import { useState } from "react";
import {
  createStyles,
  Header,
  Container,
  Group,
  Burger,
  Paper,
  Transition,
  rem,
  Autocomplete,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import {
  IconBuildingStore,
  IconHeartFilled,
  IconSearch,
  IconShoppingCart,
} from "@tabler/icons-react";
import { CgProfile } from "react-icons/cg";
// import { FaCartShopping } from "react-icons/fa";
// import { MantineLogo } from "@mantine/ds";

const HEADER_HEIGHT = rem(60);

const useStyles = createStyles((theme) => ({
  root: {
    position: "relative",
    zIndex: 1,
  },

  dropdown: {
    position: "absolute",
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: "hidden",

    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
    width: "80%",
    margin: "auto",
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  search: {
    width: "50%",
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    [theme.fn.smallerThan("sm")]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },
  brand: {
    display: "block",
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    [theme.fn.smallerThan("sm")]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    "&, &:hover": {
      // backgroundColor: theme.fn.variant({
      //   variant: "light",
      //   color: theme.primaryColor,
      // }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
    },
  },
}));

const links = [
  { link: "/checkout", label: "Checkout" },
  { link: "/shop", label: "Shop" },
  { link: "/profile", label: <CgProfile className="h-6 w-6" /> },
  { link: "/myOrders", label: <IconHeartFilled className="h-6 w-6" /> },
  { link: "/cart", label: <IconShoppingCart className="h-6 w-6" /> },
];

export function Headeer() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={cx(classes.link, {
        [classes.linkActive]: active === link.link,
      })}
      onClick={(event) => {
        // event.preventDefault();
        setActive(link.link);
        close();
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <Header height={HEADER_HEIGHT} className={classes.root}>
      <div className={classes.header}>
        <Link href="/" className={classes.brand}>
          <span> KI Chai</span>
        </Link>

        <Autocomplete
          className={classes.search}
          placeholder="Search"
          icon={<IconSearch size="1rem" stroke={1.5} />}
          data={[
            "React",
            "Angular",
            "Vue",
            "Next.js",
            "Riot.js",
            "Svelte",
            "Blitz.js",
          ]}
        />

        <Group spacing={5} className={classes.links}>
          {items}
        </Group>
        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="sm"
        />
        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
            </Paper>
          )}
        </Transition>
      </div>
    </Header>
  );
}
