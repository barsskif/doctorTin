import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Main from "./pages/Main";
import { ContextWrapper } from "./Context";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
export const App = () => {
    return (_jsxs(ContextWrapper, { children: [_jsx(Header, {}), _jsx(Main, {}), _jsx(Footer, {})] }));
};
export default App;
//# sourceMappingURL=App.js.map