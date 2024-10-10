import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Box, Button, Text } from "@mantine/core";
import { CustomInput } from "../components/CustomInput";
import { AboutBlock } from "../components/AboutBlock";
import { OurServicess } from "../components/OurServicess";
import classes from "./Main.module.css";
import { RequestForm } from "../components/RequestForm";
import { FormSection } from "../components/FormSection";
import { useState } from "react";
const initFormState = {
    name: '',
    phone: '',
};
const Main = () => {
    const [formState, setFormState] = useState(initFormState);
    const handleChange = (e, key) => {
        const value = e.target.value;
        setFormState(prev => (Object.assign(Object.assign({}, prev), { [key]: value })));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormState(initFormState);
    };
    return (_jsxs(_Fragment, { children: [_jsx(Box, { className: classes.rootWrapper, children: _jsxs(Box, { className: classes.boxContent, children: [_jsxs(Box, { style: {
                                width: "295px",
                                height: "213px",
                                fontSize: "20px",
                                fontWeight: "bold",
                                lineHeight: "40px",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                            }, children: [_jsx("span", { style: {
                                        padding: "5px",
                                    }, children: "\u0420\u0435\u043C\u043E\u043D\u0442 \u0434\u0435\u0448\u0435\u0432\u043B\u0435" }), _jsxs("div", { style: {
                                        display: "flex",
                                        alignItems: "center",
                                    }, children: [_jsx("span", { style: {
                                                transform: "scaleX(-1)",
                                                writingMode: "vertical-lr",
                                                fontSize: "24px",
                                            }, children: "\u0410\u041D" }), _jsx("span", { style: {
                                                fontSize: "60px",
                                            }, children: "45%" })] }), _jsx("span", { style: {
                                        padding: "5px",
                                    }, children: "\u043E\u0444\u0438\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0434\u0438\u043B\u0435\u0440\u0430" })] }), _jsxs(Box, { component: "form", className: classes.formWrapper, children: [_jsx(Text, { className: classes.formTitle, children: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043E\u043A\u0440\u0430\u0441\u043A\u0443 3\u0435\u0439 \u0434\u0435\u0442\u0430\u043B\u0438 \u0432 \u043F\u043E\u0434\u0430\u0440\u043E\u043A" }), _jsx(CustomInput, { placeholder: "\u0438\u043C\u044F", cb: (event) => handleChange(event, 'name'), value: formState.name }), _jsx(CustomInput, { placeholder: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D", cb: (event) => handleChange(event, 'phone'), value: formState.phone }), _jsx(Button, { color: "#900000", style: {
                                        width: 199,
                                        margin: "0 auto",
                                        height: "46px",
                                    }, onClick: handleSubmit, children: "\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443" })] })] }) }), _jsx(AboutBlock, {}), _jsx(OurServicess, {}), _jsx(RequestForm, {}), _jsx(FormSection, {})] }));
};
export default Main;
//# sourceMappingURL=Main.js.map