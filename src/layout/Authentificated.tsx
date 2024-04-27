import { ReactNode } from "react";

type AuthentificatedType = {
  children: ReactNode;
};

export default function Authentificated({ children }: AuthentificatedType) {
  const userAuthenficated = true;

  return (
    <div>
      <header>Header</header>
      {userAuthenficated && children}
    </div>
  );
}
