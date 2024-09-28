import { Box, Text } from "@mantine/core";

import { StrokeDigit } from "../../components/StrokeDigit";
import About from "../../assets/aboutBg.png";

import { ABOUT_TEXT, CARDS } from "./constants";

import classes from "./AboutBlock.module.css";

export const AboutBlock = () => {
  return (
    <Box className={classes.aboutWrapper}>
      <img src={About} className={classes.aboutImage} />
      <Box className={classes.boxContent}>
        {CARDS.map(({ number, text }) => (
          <Box key={number} className={classes.card}>
            <StrokeDigit digit={number} />
            <Text classNames={{ root: classes.cardText }}>{text}</Text>
          </Box>
        ))}
      </Box>

      <Box className={`${classes.boxContent} ${classes.videoBlock}`}>
        <div
          style={{
            display: "flex",
            width: "746px",
            height: "319px",
            background: "black",
          }}
        />
        <Box className={classes.aboutTextBlock}>
          <Text
            styles={{
              root: {
                fontSize: "1.2 rem",
                fontWeight: "bold",
              },
            }}
          >
            О нас за 60 секунд
          </Text>
          <Text className={classes.aboutTextBlockDescroption} styles={{ root: { fontSize: "0.875rem" } }}>
            {ABOUT_TEXT}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
