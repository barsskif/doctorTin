import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import styles from './RequestForm.module.css';
import rectangle1 from '../../../../assets/rectangle-1.svg';
import rectangle2 from '../../../../assets/rectangle-2.svg';
import rectangle3 from '../../../../assets/rectangle-3.svg';
import rectangle4 from '../../../../assets/rectangle-4.svg';
import background from '../../../../assets/group.svg';
import phoneImage from '../../../../assets/i-phone-12-pro-1.svg';
import ellipse from '../../../../assets/ellipse-25.svg';
const initFormState = {
    name: '',
    phone: '',
};
export const RequestForm = () => {
    const [formState, setFormState] = useState(initFormState);
    const handleChange = (e, key) => {
        const value = e.target.value;
        setFormState(prev => (Object.assign(Object.assign({}, prev), { [key]: value })));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormState(initFormState);
    };
    return (_jsx(_Fragment, { children: _jsxs("div", { className: styles.app, style: { backgroundImage: `url(${background})` }, children: [_jsx("img", { src: ellipse, className: styles.ellipse, alt: "ellipse background" }), _jsxs("div", { className: styles.headerSection, children: [_jsx("h1", { className: styles.title, children: "\u041E\u0446\u0435\u043D\u043A\u0430 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u0438 \u0440\u0435\u043C\u043E\u043D\u0442\u0430 \u043F\u043E \u0444\u043E\u0442\u043E" }), _jsxs("p", { className: styles.description, children: ["\u041E\u0442\u043F\u0440\u0430\u0432\u044C\u0442\u0435 \u0444\u043E\u0442\u043E \u043F\u043E\u0432\u0440\u0435\u0436\u0434\u0435\u043D\u043D\u043E\u0439 \u0434\u0435\u0442\u0430\u043B\u0438 \u043D\u0430\u043C \u0447\u0435\u0440\u0435\u0437 WhatsApp \u043D\u0430 \u043D\u043E\u043C\u0435\u0440 \u0438\u043B\u0438 \u043D\u0430 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0443\u044E \u043F\u043E\u0447\u0442\u0443 ", _jsx("a", { href: "mailto:D.Nesterov@mail.ru", className: styles.linkMail, children: "D.Nesterov@mail.ru" }), " \u0438 \u043D\u0430\u0448\u0438 \u043C\u0430\u0441\u0442\u0435\u0440\u0430 \u043E\u0446\u0435\u043D\u044F\u0442 \u043F\u0440\u0438\u043C\u0435\u0440\u043D\u0443\u044E \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0440\u0435\u043C\u043E\u043D\u0442\u0430"] }), _jsx("a", { className: styles.phoneNumber, href: 'tel:+79624400580', children: "+7 (962) 440-05-80" })] }), _jsx("img", { src: phoneImage, className: styles.phoneImage, alt: "Phone" }), _jsxs("div", { className: styles.contactForm, children: [_jsxs("div", { className: styles.formGroup, children: [_jsx("label", { className: styles.label, children: "\u0418\u043C\u044F" }), _jsx("input", { type: "text", className: styles.input, style: { backgroundImage: `url(${rectangle1})` }, onChange: (event) => handleChange(event, 'name'), value: formState.name })] }), _jsxs("div", { className: styles.formGroup, children: [_jsx("label", { className: styles.label, children: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D" }), _jsx("input", { type: "text", className: styles.input, style: { backgroundImage: `url(${rectangle2})` }, onChange: (event) => handleChange(event, 'phone'), value: formState.phone })] }), _jsxs("div", { className: styles.buttonGroup, children: [_jsx("button", { className: styles.button, style: { backgroundImage: `url(${rectangle3})` }, children: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0444\u043E\u0442\u043E" }), _jsx("button", { className: styles.button, style: { backgroundImage: `url(${rectangle4})` }, onClick: handleSubmit, children: "\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443" })] })] })] }) }));
};
//# sourceMappingURL=index.js.map