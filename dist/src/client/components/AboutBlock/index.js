import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
const _jsxFileName = "/Users/andrey/Desktop/projects/doctorTin/src/client/components/AboutBlock/index.tsx";
import { Box, Text } from "@mantine/core";
import { StrokeDigit } from "../../components/StrokeDigit";
import About from "../../assets/aboutBg.png";
import { ABOUT_TEXT, CARDS } from "./constants";
import classes from "./AboutBlock.module.css";
export const AboutBlock = () => {
    return (_jsxDEV(Box, { className: classes.aboutWrapper, children: [_jsxDEV("img", { src: About, className: classes.aboutImage }, void 0, false, { fileName: _jsxFileName, lineNumber: 13, columnNumber: 7 }, this), _jsxDEV(Box, { className: classes.boxContent, children: CARDS.map(({ number, text }) => (_jsxDEV(Box, { className: classes.card, children: [_jsxDEV(StrokeDigit, { digit: number }, void 0, false, { fileName: _jsxFileName, lineNumber: 17, columnNumber: 13 }, this), _jsxDEV(Text, { classNames: { root: classes.cardText }, children: text }, void 0, false, { fileName: _jsxFileName, lineNumber: 18, columnNumber: 13 }, this)] }, number, true, { fileName: _jsxFileName, lineNumber: 15, columnNumber: 43 }, this))) }, void 0, false, { fileName: _jsxFileName, lineNumber: 14, columnNumber: 7 }, this), _jsxDEV(Box, { className: `${classes.boxContent} ${classes.videoBlock}`, children: [_jsxDEV("div", { style: {
                            display: "flex",
                            width: "746px",
                            height: "319px",
                            background: "black",
                        } }, void 0, false, { fileName: _jsxFileName, lineNumber: 24, columnNumber: 9 }, this), _jsxDEV(Box, { className: classes.aboutTextBlock, children: [_jsxDEV(Text, { styles: {
                                    root: {
                                        fontSize: "20px",
                                        fontWeight: "bold",
                                    },
                                }, children: "\u041E \u043D\u0430\u0441 \u0437\u0430 60 \u0441\u0435\u043A\u0443\u043D\u0434" }, void 0, false, { fileName: _jsxFileName, lineNumber: 33, columnNumber: 11 }, this), _jsxDEV(Text, { className: classes.aboutTextBlockDescroption, styles: { root: { fontSize: "13px" } }, children: ABOUT_TEXT }, void 0, false, { fileName: _jsxFileName, lineNumber: 43, columnNumber: 11 }, this)] }, void 0, true, { fileName: _jsxFileName, lineNumber: 32, columnNumber: 9 }, this)] }, void 0, true, { fileName: _jsxFileName, lineNumber: 23, columnNumber: 7 }, this)] }, void 0, true, { fileName: _jsxFileName, lineNumber: 11, columnNumber: 11 }, this));
};
//# sourceMappingURL=index.js.map