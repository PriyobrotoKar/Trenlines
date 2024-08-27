"use client";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

const page = () => {
  return (
    <div className="flex justify-center items-center min-h-svh">
      <Button className="text-sm" onClick={() => signIn("google")}>
        Login with google
      </Button>
    </div>
  );
};
export default page;
