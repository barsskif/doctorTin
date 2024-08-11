import classes from "./CustomInput.module.css";
interface ICustomInputProps {
  placeholder: string;
  type?: string;
}

export const CustomInput = ({ placeholder, type = "text" }: ICustomInputProps) => {
  return <input type={type} className={classes.input} placeholder={placeholder} />;
};
