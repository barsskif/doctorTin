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
          Центр кузовного ремонта автомобилей <br /> «Доктор Жесть»
        </span>
        <span><a href="mailto:D.Nesterov@mail.ru" className={classes.linkMail}>Еmail: D.Nesterov@mail.ru</a></span>
      </Box>
      <Box>
        <VkIconSvg />
      </Box>
      <Box className={classes.wrapperBox} style={{ textAlign: "right" }}>
        <span><a href='tel:+79624400580' className={classes.phoneNumber}>+7 (962) 441-00-51</a></span>
        <span>г.Ставрополь, ул.Шпаковская, 97</span>
      </Box>
    </header>
  );
};
