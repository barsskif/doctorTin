import { ReactElement } from "react";

import { Box } from "@mantine/core";

import { InteractiveGallery } from "../InteractiveGallery";

import classes from "./OurServicess.module.css";

export const OurServicess = (): ReactElement => {
  return (
    <Box className={classes.outServicessWrapper}>
      <h2
        style={{
          margin: 0,
          textTransform: "uppercase",
        }}
      >
        наши услуги
      </h2>
      <h3
        style={{
          maxWidth: "400px",
          textAlign: "center",
          margin: 0,
        }}
      >
        Покраска и кузовной ремонт автомобилей в Ставрополе.
      </h3>

      <InteractiveGallery />
    </Box>
  );
};
