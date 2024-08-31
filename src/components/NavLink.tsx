"use client";
import React, { ReactNode } from "react";
import { useLenis } from "@/lib/lenis";
import { useJournalModal } from "@/providers/JournalModalProvider";

const NavLink = ({ children, id }: { id: string; children: ReactNode }) => {
  const { setClosed } = useJournalModal();
  const lenis = useLenis();
  return (
    <li
      className="cursor-pointer"
      onClick={() => {
        setClosed(true);
        lenis?.scrollTo(id, { onComplete: () => setClosed(false) });
      }}
    >
      {children}
    </li>
  );
};

export default NavLink;
