import { ChangeEvent } from "react";
import classes from "./CustomInput.module.css";
interface ICustomInputProps {
  placeholder: string;
  type?: string;
  cb: (e: ChangeEvent<HTMLInputElement>) => void
  value: string
}

export const CustomInput = ({ placeholder, type = "text", cb, value}: ICustomInputProps) => {
  return <input type={type} className={classes.input} placeholder={placeholder} onChange={cb} value={value} />;
};
