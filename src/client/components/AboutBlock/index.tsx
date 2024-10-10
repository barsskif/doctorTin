import { Box, Text } from "@mantine/core";

import { StrokeDigit } from "../../components/StrokeDigit";
import About from "../../assets/aboutBg.png";

import { ABOUT_TEXT, CARDS } from "./constants";

import classes from "./AboutBlock.module.css";

const videoUrl = "https://video-waw2-1.xx.fbcdn.net/v/t42.9040-2/65841339_3216078945072612_5577287184458711040_n.mp4?_nc_cat=104&ccb=1-7&_nc_sid=55d0d3&efg=eyJybHIiOjQ2MCwicmxhIjo1MTIsInZlbmNvZGVfdGFnIjoic3ZlX3NkIiwidmlkZW9faWQiOjEzMjYzNTM1NjA4NDc1MTB9&_nc_e2o=1326353560847510&_nc_ohc=rBknicihPJQQ7kNvgHAnJpO&rl=460&vabr=256&_nc_ht=video-waw2-1.xx&_nc_gid=ALenXDLxDmlwvwnP6a4agpx&oh=00_AYDNQwUf1aup89NAfbhhKFzQLcrYsIe4VZQLJAsjS88Mpw&oe=6707E15C"

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
        <video  style={{
            display: "flex",
            width: "746px",
            height: "350px",
            background: "black",
          }}
          src={videoUrl}
          controls
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
