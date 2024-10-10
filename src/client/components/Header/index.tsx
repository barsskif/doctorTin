import { Box } from "@mantine/core";

import VkIconSvg from "../../assets/VkIconSvg.svg?react";
import classes from "./HeaderMegaMenu.module.css";

export const Header = () => {
  return (
    <header className={classes.wrapperRoot}>
      <Box className={classes.wrapperBox}>
        <span
          style={{
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
        >
          Доктор жесть
        </span>
        <span><a href="mailto:D.Nesterov@mail.ru" className={classes.linkMail}>Еmail: D.Nesterov@mail.ru</a></span>
      </Box>
      <Box>
        <VkIconSvg />
      </Box>
      <Box className={classes.wrapperBox} style={{ textAlign: "right" }}>
        <span><a href='tel:+79624400580' className={classes.phoneNumber}>+7 (962) 440-05-80</a></span>
        <span>г.Ставрополь, ул.Шпаковская, 97</span>
      </Box>
    </header>
  );
};
