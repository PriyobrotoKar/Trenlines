import Card from "@/components/admin/Card";
import React from "react";

const page = () => {
  return (
    <>
      {[...Array(4)].map((_, i) => (
        <Card.Question
          key={i}
          title={"Question " + (i + 1)}
          description="Enter product info"
        />
      ))}
    </>
  );
};

export default page;
