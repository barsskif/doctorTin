import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import styles from './FormSection.module.css';
import { StrokeDigit } from '../StrokeDigit';
import Car from '../../../../assets/group-17.svg';
const initFormState = {
    name: '',
    phone: '',
};
export const FormSection = () => {
    const [formState, setFormState] = useState(initFormState);
    const handleChange = (e, key) => {
        const value = e.target.value;
        setFormState(prev => (Object.assign(Object.assign({}, prev), { [key]: value })));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormState(initFormState);
    };
    return (_jsx(_Fragment, { children: _jsxs("div", { className: styles.formSection, children: [_jsx("img", { src: Car, className: styles.carImg }), _jsxs("div", { className: styles.content, children: [_jsx("h1", { className: styles.heading, children: "\u041E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u0437\u0430\u044F\u0432\u043A\u0443 \u0443 \u043D\u0430\u0441 \u0438 \u0432\u044B \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u0435:" }), _jsxs("div", { className: styles.features, children: [_jsxs("div", { className: styles.feature, children: [_jsx(StrokeDigit, { digit: '01' }), _jsx("div", { className: styles.featureText, children: "\u041F\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u0443\u044E \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0440\u0435\u043C\u043E\u043D\u0442\u0430" })] }), _jsxs("div", { className: styles.feature, children: [_jsx(StrokeDigit, { digit: '02' }), _jsx("div", { className: styles.featureText, children: "\u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u0437\u0430\u043F\u0438\u0441\u0438 \u043D\u0430 \u0440\u0435\u043C\u043E\u043D\u0442 \u0432 \u0443\u0434\u043E\u0431\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F" })] }), _jsxs("div", { className: styles.feature, children: [_jsx(StrokeDigit, { digit: '03' }), _jsx("div", { className: styles.featureText, children: "\u042D\u043A\u043E\u043D\u043E\u043C\u0438\u044E \u0432\u0440\u0435\u043C\u0435\u043D\u0438 \u0438 \u0434\u0435\u043D\u0435\u0433 \u043D\u0430 \u043F\u043E\u0438\u0441\u043A \u0437\u0430\u043F\u0447\u0430\u0441\u0442\u0435\u0439" })] })] }), _jsxs("form", { className: styles.form, children: [_jsx("div", { className: styles.inputGroup, children: _jsx("input", { type: "text", className: styles.input, placeholder: "\u0418\u043C\u044F", onChange: (event) => handleChange(event, 'name'), value: formState.name }) }), _jsx("div", { className: styles.inputGroup, children: _jsx("input", { type: "text", className: styles.input, placeholder: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D", onChange: (event) => handleChange(event, 'phone'), value: formState.phone }) }), _jsx("button", { type: "submit", className: styles.button, onClick: handleSubmit, children: "\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443" })] })] })] }) }));
};
//# sourceMappingURL=index.js.map