import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
const _jsxFileName = "/Users/andrey/Desktop/projects/doctorTin/src/client/components/InteractiveGallery/index.tsx";
import React, { useState } from "react";
import NextIcon from "../../assets/NextIcon.svg?react";
import PrevIcon from "../../assets/PrevIcon.svg?react";
import classes from "./InteractiveGallery.module.css";
const CARDS = 10;
const MAX_VISIBILITY = 3;
const Card = ({ title, content, price }) => (_jsxDEV("div", { className: classes.card, children: [_jsxDEV("h2", { children: title }, void 0, false, { fileName: _jsxFileName, lineNumber: 17, columnNumber: 5 }, this), _jsxDEV("p", { style: { textAlign: "center", maxWidth: "300px" }, children: content }, void 0, false, { fileName: _jsxFileName, lineNumber: 18, columnNumber: 5 }, this), _jsxDEV("p", { children: "\u0426\u0435\u043D\u044B" }, void 0, false, { fileName: _jsxFileName, lineNumber: 19, columnNumber: 5 }, this), _jsxDEV("p", { children: ["\u043E\u0442 ", price] }, void 0, true, { fileName: _jsxFileName, lineNumber: 20, columnNumber: 5 }, this)] }, void 0, true, { fileName: _jsxFileName, lineNumber: 15, columnNumber: 57 }, this));
const Carousel = ({ children }) => {
    const [active, setActive] = useState(0);
    const count = React.Children.count(children);
    const handleNext = () => {
        if (active < count - 1) {
            setActive(i => i + 1);
        }
    };
    const handlePrev = () => {
        if (active > 0) {
            setActive(i => i - 1);
        }
    };
    return (_jsxDEV("div", { className: classes.carousel, children: [active > 0 && (_jsxDEV("button", { className: `${classes.nav} ${classes.left}`, onClick: handlePrev, children: _jsxDEV(PrevIcon, {}, void 0, false, { fileName: _jsxFileName, lineNumber: 48, columnNumber: 11 }, this) }, void 0, false, { fileName: _jsxFileName, lineNumber: 46, columnNumber: 23 }, this)), active < count - 1 && (_jsxDEV("button", { className: `${classes.nav} ${classes.right}`, onClick: handleNext, children: _jsxDEV(NextIcon, {}, void 0, false, { fileName: _jsxFileName, lineNumber: 53, columnNumber: 11 }, this) }, void 0, false, { fileName: _jsxFileName, lineNumber: 51, columnNumber: 31 }, this)), React.Children.map(children, (child, i) => (_jsxDEV("div", { className: classes["card-container"], style: {
                    "--active": i === active ? 1 : 0.7,
                    "--offset": (active - i) / 3,
                    "--direction": Math.sign(active - i),
                    "--abs-offset": Math.abs(active - i) / 3,
                    "--z-index": i === active ? -1 : 0,
                    pointerEvents: active === i ? "auto" : "none",
                    opacity: Math.abs(active - i) >= MAX_VISIBILITY ? "0.3" : "1",
                    display: Math.abs(active - i) > MAX_VISIBILITY ? "none" : "block",
                    margin: i !== active ? "10px" : "",
                    marginTop: i !== active ? "-100px" : "",
                }, children: child }, void 0, false, { fileName: _jsxFileName, lineNumber: 56, columnNumber: 52 }, this)))] }, void 0, true, { fileName: _jsxFileName, lineNumber: 44, columnNumber: 11 }, this));
};
export const InteractiveGallery = () => {
    return (_jsxDEV(Carousel, { children: [...new Array(CARDS)].map((_, i) => (_jsxDEV(Card, { title: "\u0423\u0434\u0430\u043B\u0435\u043D\u0438\u0435 \u0432\u043C\u044F\u0442\u0438\u043D", content: "\u0423\u0434\u0430\u043B\u0435\u043D\u0438\u0435 \u0432\u043C\u044F\u0442\u0438\u043D \u0441 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435\u043C \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u0430 \u0431\u0435\u0437 \u043F\u043E\u043A\u0440\u0430\u0441\u043A\u0438 \u043A\u0443\u0437\u043E\u0432\u043D\u043E\u0433\u043E \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430 (\u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u044F pdr)", price: "4000\u0440" }, i, false, { fileName: _jsxFileName, lineNumber: 84, columnNumber: 45 }, this))) }, void 0, false, { fileName: _jsxFileName, lineNumber: 82, columnNumber: 11 }, this));
};
//# sourceMappingURL=index.js.map