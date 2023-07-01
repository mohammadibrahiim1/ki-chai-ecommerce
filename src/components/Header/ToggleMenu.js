import { Button, Menu, createStyles, rem } from "@mantine/core";
import { IconExternalLink } from "@tabler/icons-react";
const useStyles = createStyles({
  button: {
    color: "black",
    backgroundColor: "white",
    border: "1px solid black",
    "&:hover": {
      backgroundColor: "white",
    },
  },
  toggleMenu: {
    width: "295px",
  },
});

export const ToggleMenu = () => {
  const { classes } = useStyles();
  return (
    <div>
      <Menu
        className={classes.toggleMenu}
        trigger="hover"
        openDelay={100}
        closeDelay={400}
        width={295}
      >
        <Menu.Target>
          <Button className={classes.button}>All Category</Button>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Item component="a" href="https://mantine.dev">
            Mantine website
          </Menu.Item>

          <Menu.Item
            icon={<IconExternalLink size={rem(14)} />}
            component="a"
            href="https://mantine.dev"
            target="_blank"
          >
            External link
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </div>
  );
};
