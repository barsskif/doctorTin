import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
const _jsxFileName = "/Users/andrey/Desktop/projects/doctorTin/src/client/Context.tsx";
import React, { useContext, useState } from "react";
const defaultVal = {
    name: "",
    setName: () => { },
};
const context = React.createContext(defaultVal);
const { Provider } = context;
export const ContextWrapper = ({ children }) => {
    const [name, setName] = useState(defaultVal.name);
    return _jsxDEV(Provider, { value: { name, setName }, children: children }, void 0, false, { fileName: _jsxFileName, lineNumber: 19, columnNumber: 9 }, this);
};
export const useAppContext = () => useContext(context);
//# sourceMappingURL=Context.js.map