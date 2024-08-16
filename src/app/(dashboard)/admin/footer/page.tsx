import Card from "@/components/admin/Card";
import React from "react";

const page = () => {
  return (
    <>
      <Card.CallToAction />
      {[...Array(4)].map((_, i) => (
        <Card.Link
          key={i}
          title={"Link " + (i + 1)}
          description="Modify Properties"
        />
      ))}
      <Card.LargeText title="Disclaimer" description="Edit disclaimer info" />
      <Card.LargeText title="Copyright" description="Edit copyright info" />
    </>
  );
};

export default page;
