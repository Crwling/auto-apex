import React from "react";
import clsx from "clsx";
import styles from "./input.module.scss";
import ValidationErrorIcon from "../../../public/assets/validationErrorIcon";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  as?: 'input' | 'textarea';
  error?: string;
}

const Input: React.FC<InputProps> = ({ as = 'input', error, ...props }) => {
  return (
    <>
      {as === 'textarea' ? (
        <textarea
          className={clsx(styles.input, styles.textarea, { [styles.error]: !!error })}
          {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          className={clsx(styles.input, { [styles.error]: !!error })}
          {...props}
        />
      )}
      {error && <span className={styles.errorText}><ValidationErrorIcon/>{error}</span>}
    </>
  );
};

export default Input;
