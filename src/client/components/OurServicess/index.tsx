import { Box } from "@mantine/core";

import classes from "./OurServicess.module.css";
import { InteractiveGallery } from "../InteractiveGallery";

export const OurServicess = () => {
  return (
    <Box className={classes.outServicessWrapper}>
      <h2
        style={{
          margin: 0,
        }}
      >
        НАШИ УСЛУГИ
      </h2>
      <h3
        style={{
          maxWidth: "400px",
          textAlign: "center",
          margin: 0,
        }}
      >
        Покраска и кузовной ремонт автомобилей в Нижнем Новгороде
      </h3>

      <InteractiveGallery />
    </Box>
  );
};
