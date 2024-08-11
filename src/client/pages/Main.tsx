import { Box, Button, Text } from "@mantine/core";

import { CustomInput } from "../components/CustomInput";
import { AboutBlock } from "../components/AboutBlock";
import { OurServicess } from "../components/OurServicess";

import classes from "./Main.module.css";

const Main = () => {
  return (
    <>
      <Box className={classes.rootWrapper} >
        <Box className={classes.boxContent}>
          <Box
            style={{
              width: "295px",
              height: "213px",
              fontSize: "20px",
              fontWeight: "bold",
              lineHeight: "40px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                padding: "5px",
              }}
            >
              Ремонт дешевле
            </span>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  transform: "scaleX(-1)",
                  writingMode: "vertical-lr",
                  fontSize: "24px",
                }}
              >
                АН
              </span>
              <span
                style={{
                  fontSize: "60px",
                }}
              >
                45%
              </span>
            </div>
            <span
              style={{
                padding: "5px",
              }}
            >
              официального дилера
            </span>
          </Box>
          <Box component="form" className={classes.formWrapper}>
            <Text className={classes.formTitle}>Получить окраску 3ей детали в подарок</Text>
            <CustomInput placeholder="имя" />
            <CustomInput placeholder="Телефон" />

            <Button
              color="#900000"
              style={{
                width: 199,
                margin: "0 auto",
                height: "46px",
              }}
            >
              Оставить заявку
            </Button>
          </Box>
        </Box>
      </Box>
      <AboutBlock />
      <OurServicess />
    </>
  );
};

export default Main;
