import { type FC } from "react";
import { InputProps } from "src/types";

export const Input: FC<InputProps> = ({ name, placeholder, onChange }) => (
  <input
    type="text"
    name={name}
    placeholder={placeholder}
    onChange={onChange}
    className="border-blue border-2 rounded w-max py-2 px-4 outline-none"
  />
);
