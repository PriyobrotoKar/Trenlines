import Card from "@/components/admin/Card";
import React from "react";

const page = () => {
  return (
    <>
      {[...Array(4)].map((_, i) => (
        <Card.Feature
          key={i}
          title={"Feature " + (i + 1)}
          description="Modify Properties"
        />
      ))}
      <Card.LargeText title="Description" description="Enter product info" />
    </>
  );
};

export default page;
