import React, { FC } from "react";

type Props = {
  children: React.ReactNode,
};

const Button: React.FC<Props> = ({ children }) => {
  return (
    <button>
      {children}
    </button>
  )
}

export default Button;