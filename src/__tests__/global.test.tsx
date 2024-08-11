import React from "react";
import { render } from "@testing-library/react";
import { Footer } from "../client/components/Footer";
import { Header } from "../client/components/Header";
import Main from "../client/pages/Main";
import { MantineProvider } from "@mantine/core";
import { describe, expect, test, beforeAll, vi } from 'vitest';

// Имитация для window.matchMedia
beforeAll(() => {
  globalThis.matchMedia = globalThis.matchMedia || function() {
    return {
      matches: false,
      media: '',
      onchange: null,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    };
  };
});

describe("global tests", () => {
  test("Header компонент отрисовывается корректно", () => {
      const { container } = render(
            <MantineProvider>
              <Header />
            </MantineProvider>
        );
        expect(container).toBeTruthy();
  });

  test("Footer компонент отрисовывается корректно", () => {
    const { container } = render(
      <MantineProvider>
        <Footer />
      </MantineProvider>
  );
  expect(container).toBeTruthy();
  });

  test("Main компонент отрисовывается корректно", () => {
    const { container } = render(
      <MantineProvider>
        <Main />
      </MantineProvider>
    );
    expect(container).toBeTruthy();
  });
});