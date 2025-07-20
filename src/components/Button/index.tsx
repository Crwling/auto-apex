import { FC } from 'react';
import clsx from 'clsx';

import styles from './button.module.scss';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  // Your additional props here, for example:
  variant?: 'black' | 'white' | 'blue';
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps>= ({ className, children, variant, ...rest }: ButtonProps) => {
  return (
    <button className={clsx(styles.button, className, styles[variant || ""])} {...rest}>
      {children}
    </button>
  )
}

export default Button;
