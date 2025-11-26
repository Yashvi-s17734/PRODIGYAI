"use client";

import { usePathname } from "next/navigation";
import Nav from "./components/nav";
import Sidebar from "./components/Sidebar";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const hideLayout = ["/login", "/signup"].includes(pathname);

  return (
    <>
     
      {!hideLayout && <Nav />}

      <div className="flex">
      
        {!hideLayout && (
          <aside className="w-64 h-screen fixed left-0 top-[60px] bg-black shadow-lg">
            <Sidebar />
          </aside>
        )}

      
        <main className={!hideLayout ? "ml-60 w-full p-6 pt-[70px]" : "w-full"}>
          {children}
        </main>
      </div>
    </>
  );
}
