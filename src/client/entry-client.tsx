import React from "react";
import { createTheme, MantineProvider } from "@mantine/core";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";

import "./index.css";
import "@mantine/core/styles.css";

const container = document.getElementById("root");

const theme = createTheme({});

const FullApp = () => (
  <MantineProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MantineProvider>
);

if (import.meta.hot || !container?.innerText) {
  const root = createRoot(container!);
  root.render(<FullApp />);
} else {
  hydrateRoot(container!, <FullApp />);
}
