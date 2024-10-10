import { jsx as _jsx } from "react/jsx-runtime";
import classes from "./CustomInput.module.css";
export const CustomInput = ({ placeholder, type = "text", cb, value }) => {
    return _jsx("input", { type: type, className: classes.input, placeholder: placeholder, onChange: cb, value: value });
};
//# sourceMappingURL=index.js.map