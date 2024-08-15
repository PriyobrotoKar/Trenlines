import Card from "@/components/admin/Card";
import React from "react";

const page = () => {
  return (
    <>
      <Card.ImageUpload title="Hero Image" description="Size Limit:1.5mb" />
      <Card.CallToAction />
    </>
  );
};

export default page;
