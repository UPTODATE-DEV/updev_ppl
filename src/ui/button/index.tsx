import { ComponentPropsWithoutRef, type ReactNode } from "react";
import { Link, LinkProps } from "react-router-dom";

import styles from "./button.module.css";

type BaseType = {
  children: ReactNode;
  isGradient?: boolean;
};

type ButtonProps = BaseType &
  ComponentPropsWithoutRef<"button"> & { to?: never };

type ButtonLinkProps = BaseType & LinkProps & { to: string };

function isRouterLink(
  props: ButtonProps | ButtonLinkProps
): props is ButtonLinkProps {
  return "to" in props;
}

export default function Button(props: ButtonProps | ButtonLinkProps) {
  if (isRouterLink(props)) {
    const { children, isGradient, ...otherProps } = props;

    return (
      <Link
        {...otherProps}
        className={`${styles.btn} ${isGradient && styles.gradient}`}
      >
        {children}
      </Link>
    );
  }

  const { children, isGradient, ...otherProps } = props;

  return (
    <button
      {...otherProps}
      className={`${styles.btn} ${isGradient && styles.gradient}`}
    >
      {children}
    </button>
  );
}
