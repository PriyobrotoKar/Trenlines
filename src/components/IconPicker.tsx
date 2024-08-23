import React from "react";
import * as Hugeicons from "hugeicons-react";
import { Icon } from "./Icons";

const IconPicker = () => {
  return (
    <>
      {Object.keys(Hugeicons)
        .slice(1, 10)
        .map((icon) => {
          console.log(icon);
          return <Icon iconName={icon} />;
        })}
    </>
  );
};

export default IconPicker;
