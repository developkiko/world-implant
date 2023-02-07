import React, {ChangeEventHandler, FC, HTMLInputTypeAttribute, InputHTMLAttributes} from "react";

import styles from "./Input.module.scss";
import classNames from "classnames";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  type?: HTMLInputTypeAttribute;
  dark?: boolean;
  name: string;
  value?: string;
  required?: boolean;
  event?: ChangeEventHandler;
}

const Input: FC<Props> = ({
  type = "text",
  title,
  name,
  value,
  dark = false,
  required = false,
  event,
  ...props
}) => {
  return (
    <label className={styles.input}>
      <h5>{title}</h5>
      <input
        className={classNames({
          [styles.dark]: dark
        })}
        type={type}
        name={name}
        value={value}
        required={required}
        onChange={event}
        {...props}
      />
    </label>
  );
};

export default Input;
