import React from 'react';
import cn from 'classnames';
import styles from './CheckBox.module.scss';
import { CheckBoxProps } from './CheckBox.props';

export const CheckBox = ({ isChecked, setIsChecked }: CheckBoxProps) => (
  <div
    className={cn(styles.checkBox, { [styles.check]: isChecked })}
    onClick={() => setIsChecked(!isChecked)}
  >
    <span />
  </div>
);
