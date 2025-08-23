import React from "react";
import "./header.css";

export interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = (): JSX.Element => (
  <header className="bg-white sticky top-0 left-0 w-[100%] h-16 shrink-0"></header>
);

export default Header;
