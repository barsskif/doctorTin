import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box } from "@mantine/core";
import VkIconSvg from "../../assets/VkIconSvg.svg?react";
import classes from "./HeaderMegaMenu.module.css";
export const Header = () => {
    return (_jsxs("header", { className: classes.wrapperRoot, children: [_jsxs(Box, { className: classes.wrapperBox, children: [_jsx("span", { style: {
                            fontWeight: "bold",
                            textTransform: "uppercase",
                        }, children: "\u0414\u043E\u043A\u0442\u043E\u0440 \u0436\u0435\u0441\u0442\u044C" }), _jsx("span", { children: _jsx("a", { href: "mailto:D.Nesterov@mail.ru", className: classes.linkMail, children: "\u0415mail: D.Nesterov@mail.ru" }) })] }), _jsx(Box, { children: _jsx(VkIconSvg, {}) }), _jsxs(Box, { className: classes.wrapperBox, style: { textAlign: "right" }, children: [_jsx("span", { children: _jsx("a", { href: 'tel:+79624400580', className: classes.phoneNumber, children: "+7 (962) 440-05-80" }) }), _jsx("span", { children: "\u0433.\u0421\u0442\u0430\u0432\u0440\u043E\u043F\u043E\u043B\u044C, \u0443\u043B.\u0428\u043F\u0430\u043A\u043E\u0432\u0441\u043A\u0430\u044F, 97" })] })] }));
};
//# sourceMappingURL=index.js.map