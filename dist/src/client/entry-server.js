import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
const _jsxFileName = "/Users/andrey/Desktop/projects/doctorTin/src/client/entry-server.tsx";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { App } from "./App";
import { createTheme, MantineProvider } from "@mantine/core";
import "./index.css";
const theme = createTheme({});
export function render(url) {
    return ReactDOMServer.renderToString(_jsxDEV(MantineProvider, { theme: theme, children: _jsxDEV(StaticRouter, { location: url, children: _jsxDEV(App, {}, void 0, false, { fileName: _jsxFileName, lineNumber: 15, columnNumber: 9 }, this) }, void 0, false, { fileName: _jsxFileName, lineNumber: 14, columnNumber: 7 }, this) }, void 0, false, { fileName: _jsxFileName, lineNumber: 12, columnNumber: 40 }, this));
}
//# sourceMappingURL=entry-server.js.map