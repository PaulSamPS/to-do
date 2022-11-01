import React from 'react';
import cn from 'classnames';
import { ButtonProps } from './Button.props';
import styles from './Button.module.scss';

export const Button = ({ children, className, ...props }: ButtonProps): JSX.Element => (
  <button type='button' className={cn(styles.button, className)} {...props}>
    {children}
  </button>
);
