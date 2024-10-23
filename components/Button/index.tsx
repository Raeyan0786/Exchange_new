import React, { ButtonHTMLAttributes } from 'react';
import cn from '@/tailwindcss-config';


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  label: string;
  name?: string;
  error?: any;
  buttonClassName?: string;
  labelClassName?: string;
  onClick?: (e) => void;
  disabled?: boolean;
  leftArrow?: boolean;
}

const classes = {
  // root: 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded outline-0',
  root: 'bg-light_yellow hover:bg-dark_green px-[2rem] py-[0.5rem] cursor-pointer transition ease-in-out duration-300 rounded-[6rem] text-white'
};

export const Button: React.FC<ButtonProps> = (
  {
    className,
    label,
    name,
    error,
    buttonClassName,
    labelClassName,
    disabled = false,
    children,
    onClick,
    leftArrow,
    ...rest
  }
) => {
  const rootClassName = cn(classes.root, className);
  return (
    <button
      className={rootClassName}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {label}
    </button>
  );
};
