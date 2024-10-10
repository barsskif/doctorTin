import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from "react";
import { getCardStyle } from "../../../helpers/getCardStyle";
import NextIcon from "../../assets/NextIcon.svg?react";
import PrevIcon from "../../assets/PrevIcon.svg?react";
import classes from "./InteractiveGallery.module.css";
import { CARDS } from './constants';
const Card = ({ title, content, price }) => (_jsxs("div", { className: classes.card, children: [_jsx("h2", { children: title }), _jsx("p", { style: { textAlign: "center", maxWidth: "300px" }, children: content }), _jsx("p", { children: price && "Цены" }), _jsx("p", { children: price })] }));
const NavigationButton = ({ icon, onClick, className, }) => (_jsx("button", { className: className, onClick: onClick, children: icon }));
const Carousel = ({ children }) => {
    const [active, setActive] = useState(1);
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
    return (_jsxs("div", { className: classes.carousel, children: [active > 0 && (_jsx(NavigationButton, { icon: _jsx(PrevIcon, {}), onClick: handlePrev, className: `${classes.nav} ${classes.left}` })), active < count - 1 && (_jsx(NavigationButton, { icon: _jsx(NextIcon, {}), onClick: handleNext, className: `${classes.nav} ${classes.right}` })), React.Children.map(children, (child, i) => (_jsx("div", { className: classes["card-container"], style: getCardStyle({ isActive: i === active, offset: active - i }), children: child })))] }));
};
export const InteractiveGallery = () => (_jsx(Carousel, { children: CARDS.map(({ content, price, title }, i) => (_jsx(Card, { title: title, content: content, price: price }, i))) }));
//# sourceMappingURL=index.js.map