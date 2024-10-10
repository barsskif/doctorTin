import { jsx as _jsx } from "react/jsx-runtime";
import { createTheme, MantineProvider } from "@mantine/core";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import "./index.css";
import "@mantine/core/styles.css";
const container = document.getElementById("root");
const theme = createTheme({});
const FullApp = () => (_jsx(MantineProvider, { theme: theme, children: _jsx(BrowserRouter, { children: _jsx(App, {}) }) }));
if (import.meta.hot || !(container === null || container === void 0 ? void 0 : container.innerText)) {
    const root = createRoot(container);
    root.render(_jsx(FullApp, {}));
}
else {
    hydrateRoot(container, _jsx(FullApp, {}));
}
//# sourceMappingURL=entry-client.js.map