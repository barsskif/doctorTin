import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
const _jsxFileName = "/Users/andrey/Desktop/projects/doctorTin/src/client/entry-client.tsx";
import { createTheme, MantineProvider } from "@mantine/core";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import "./index.css";
import "@mantine/core/styles.css";
const container = document.getElementById("root");
const theme = createTheme({});
const FullApp = () => (_jsxDEV(MantineProvider, { theme: theme, children: _jsxDEV(BrowserRouter, { children: _jsxDEV(App, {}, void 0, false, { fileName: _jsxFileName, lineNumber: 17, columnNumber: 7 }, this) }, void 0, false, { fileName: _jsxFileName, lineNumber: 16, columnNumber: 5 }, this) }, void 0, false, { fileName: _jsxFileName, lineNumber: 14, columnNumber: 24 }, this));
if (import.meta.hot || !(container === null || container === void 0 ? void 0 : container.innerText)) {
    const root = createRoot(container);
    root.render(_jsxDEV(FullApp, {}, void 0, false, { fileName: _jsxFileName, lineNumber: 24, columnNumber: 15 }, this));
}
else {
    hydrateRoot(container, _jsxDEV(FullApp, {}, void 0, false, { fileName: _jsxFileName, lineNumber: 26, columnNumber: 26 }, this));
}
//# sourceMappingURL=entry-client.js.map