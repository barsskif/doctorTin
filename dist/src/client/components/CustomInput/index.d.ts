import { ChangeEvent } from "react";
interface ICustomInputProps {
    placeholder: string;
    type?: string;
    cb: (e: ChangeEvent<HTMLInputElement>) => void;
    value: string;
}
export declare const CustomInput: ({ placeholder, type, cb, value }: ICustomInputProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map