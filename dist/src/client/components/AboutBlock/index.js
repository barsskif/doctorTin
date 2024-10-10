import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Text } from "@mantine/core";
import { StrokeDigit } from "../../components/StrokeDigit";
import About from "../../assets/aboutBg.png";
import { ABOUT_TEXT, CARDS } from "./constants";
import classes from "./AboutBlock.module.css";
const videoUrl = "https://video-waw2-1.xx.fbcdn.net/v/t42.9040-2/65841339_3216078945072612_5577287184458711040_n.mp4?_nc_cat=104&ccb=1-7&_nc_sid=55d0d3&efg=eyJybHIiOjQ2MCwicmxhIjo1MTIsInZlbmNvZGVfdGFnIjoic3ZlX3NkIiwidmlkZW9faWQiOjEzMjYzNTM1NjA4NDc1MTB9&_nc_e2o=1326353560847510&_nc_ohc=rBknicihPJQQ7kNvgHAnJpO&rl=460&vabr=256&_nc_ht=video-waw2-1.xx&_nc_gid=ALenXDLxDmlwvwnP6a4agpx&oh=00_AYDNQwUf1aup89NAfbhhKFzQLcrYsIe4VZQLJAsjS88Mpw&oe=6707E15C";
export const AboutBlock = () => {
    return (_jsxs(Box, { className: classes.aboutWrapper, children: [_jsx("img", { src: About, className: classes.aboutImage }), _jsx(Box, { className: classes.boxContent, children: CARDS.map(({ number, text }) => (_jsxs(Box, { className: classes.card, children: [_jsx(StrokeDigit, { digit: number }), _jsx(Text, { classNames: { root: classes.cardText }, children: text })] }, number))) }), _jsxs(Box, { className: `${classes.boxContent} ${classes.videoBlock}`, children: [_jsx("video", { style: {
                            display: "flex",
                            width: "746px",
                            height: "350px",
                            background: "black",
                        }, src: videoUrl, controls: true }), _jsxs(Box, { className: classes.aboutTextBlock, children: [_jsx(Text, { styles: {
                                    root: {
                                        fontSize: "1.2 rem",
                                        fontWeight: "bold",
                                    },
                                }, children: "\u041E \u043D\u0430\u0441 \u0437\u0430 60 \u0441\u0435\u043A\u0443\u043D\u0434" }), _jsx(Text, { className: classes.aboutTextBlockDescroption, styles: { root: { fontSize: "0.875rem" } }, children: ABOUT_TEXT })] })] })] }));
};
//# sourceMappingURL=index.js.map