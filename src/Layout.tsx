import { Header } from "./components/Header/Header";
import { useState } from "react";

type LayoutProps = {
  children: React.ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
