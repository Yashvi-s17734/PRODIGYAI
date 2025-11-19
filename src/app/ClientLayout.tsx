"use client";

import { usePathname } from "next/navigation";
import Nav from "./components/nav";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  const hideNavbar = ["/login","/signup"].includes(pathName);

  return (
    <div className={hideNavbar ? "" : "pt-[70px]"}>
      {!hideNavbar && <Nav />}
      {children}
    </div>
  );
}
