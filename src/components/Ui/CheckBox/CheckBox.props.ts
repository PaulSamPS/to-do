import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export interface CheckBoxProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  isChecked: boolean;
  setIsChecked: (isChecked: boolean) => void;
}
