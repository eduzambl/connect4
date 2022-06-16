import cn from "classnames";
import React, { PropsWithChildren } from "react";

export const Button = ({
  secondary = false,
  children,
  ...props
}: PropsWithChildren<
  {
    secondary?: boolean;
  } & React.ButtonHTMLAttributes<HTMLButtonElement>
>) => {
  const classes = cn("Game-Button", {
    "Game-Button--secondary": secondary,
  });
  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
};
