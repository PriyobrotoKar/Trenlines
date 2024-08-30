import React, { Dispatch, SetStateAction, useState } from "react";
import { HexColorPicker } from "react-colorful";
import { Input } from "./ui/input";

const ColorPicker = ({
  color,
  setColor,
}: {
  color: string;
  setColor: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <>
      <HexColorPicker color={color} onChange={setColor} />
      <Input
        type="text"
        placeholder="#ffffff"
        onChange={(e) => setColor(e.target.value)}
        value={color}
        className="mt-2"
      />
    </>
  );
};

export default ColorPicker;
