import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const StrokeDigit = ({ digit, strokeWidth = 2, fontSize = 64 }) => {
    const numDigits = String(digit).length;
    const width = numDigits * (fontSize * 0.6);
    return (_jsxs("svg", { width: width, height: fontSize, viewBox: `0 0 ${width} ${fontSize}`, fill: "none", stroke: "#fff", strokeWidth: strokeWidth, children: [_jsx("defs", { children: _jsxs("filter", { id: "shadow", x: "-50%", y: "-50%", width: "200%", height: "200%", children: [_jsx("feGaussianBlur", { stdDeviation: "2", in: "SourceAlpha" }), _jsx("feOffset", { dx: "0", dy: "4", result: "offsetblur" }), _jsx("feComponentTransfer", { children: _jsx("feFuncA", { type: "linear", slope: "0.47" }) }), _jsxs("feMerge", { children: [_jsx("feMergeNode", {}), _jsx("feMergeNode", { in: "SourceGraphic" })] }), _jsx("feComposite", { operator: "over", in2: "SourceAlpha" })] }) }), _jsx("text", { x: width / 2, y: fontSize / 2 + strokeWidth, textAnchor: "middle", dominantBaseline: "middle", fontSize: fontSize, filter: "url(#shadow)", children: String(digit) })] }));
};
//# sourceMappingURL=index.js.map