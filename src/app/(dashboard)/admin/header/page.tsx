import Card from "@/components/admin/Card";
import React from "react";

const page = ({ params }: { params: { section: string } }) => {
  return (
    <>
      <Card.ImageUpload
        title="Brand Logo"
        description="Replace with a 1:1 logo mark"
      />
      <Card.CallToAction />
    </>
  );
};

export default page;
