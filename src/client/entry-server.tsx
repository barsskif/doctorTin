import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { App } from "./App";

import { createTheme, MantineProvider } from "@mantine/core";

import "./index.css";

const theme = createTheme({});

export function render(url: string) {
  return ReactDOMServer.renderToString(
    <MantineProvider theme={theme}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </MantineProvider>,
  );
}
