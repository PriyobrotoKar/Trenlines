"use client";
import React, { ReactNode } from "react";
import { useLenis } from "@/lib/lenis";
import { useJournalModal } from "@/providers/JournalModalProvider";
import lenis from "lenis";

const NavLink = ({ children, id }: { id: string; children: ReactNode }) => {
  const { closed, setClosed } = useJournalModal();
  return (
    <li
      className="cursor-pointer"
      onClick={() => {
        const prevState = closed;
        setClosed(true);
        lenis?.scrollTo(id, { onComplete: () => setClosed(prevState) });
      }}
    >
      {children}
    </li>
  );
};

export default NavLink;
