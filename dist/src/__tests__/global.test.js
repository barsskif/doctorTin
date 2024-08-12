import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
const _jsxFileName = "/Users/andrey/Desktop/projects/doctorTin/src/__tests__/global.test.tsx";
import { render } from "@testing-library/react";
import { Footer } from "../client/components/Footer";
import { Header } from "../client/components/Header";
import Main from "../client/pages/Main";
import { MantineProvider } from "@mantine/core";
import { describe, expect, test, beforeAll, vi } from 'vitest';
// Имитация для window.matchMedia
beforeAll(() => {
    globalThis.matchMedia = globalThis.matchMedia || function () {
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
        const { container } = render(_jsxDEV(MantineProvider, { children: _jsxDEV(Header, {}, void 0, false, { fileName: _jsxFileName, lineNumber: 27, columnNumber: 15 }, this) }, void 0, false, { fileName: _jsxFileName, lineNumber: 25, columnNumber: 36 }, this));
        expect(container).toBeTruthy();
    });
    test("Footer компонент отрисовывается корректно", () => {
        const { container } = render(_jsxDEV(MantineProvider, { children: _jsxDEV(Footer, {}, void 0, false, { fileName: _jsxFileName, lineNumber: 36, columnNumber: 9 }, this) }, void 0, false, { fileName: _jsxFileName, lineNumber: 34, columnNumber: 34 }, this));
        expect(container).toBeTruthy();
    });
    test("Main компонент отрисовывается корректно", () => {
        const { container } = render(_jsxDEV(MantineProvider, { children: _jsxDEV(Main, {}, void 0, false, { fileName: _jsxFileName, lineNumber: 45, columnNumber: 9 }, this) }, void 0, false, { fileName: _jsxFileName, lineNumber: 43, columnNumber: 34 }, this));
        expect(container).toBeTruthy();
    });
});
//# sourceMappingURL=global.test.js.map