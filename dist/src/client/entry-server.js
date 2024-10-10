import { jsx as _jsx } from "react/jsx-runtime";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { App } from "./App";
import { createTheme, MantineProvider } from "@mantine/core";
import "./index.css";
const theme = createTheme({});
export function render(url) {
    return ReactDOMServer.renderToString(_jsx(MantineProvider, { theme: theme, children: _jsx(StaticRouter, { location: url, children: _jsx(App, {}) }) }));
}
//# sourceMappingURL=entry-server.js.map