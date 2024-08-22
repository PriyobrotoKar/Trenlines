import React, { Dispatch, SetStateAction, useState } from "react";
import { HexColorPicker } from "react-colorful";

const ColorPicker = ({
  color,
  setColor,
}: {
  color: string;
  setColor: Dispatch<SetStateAction<string>>;
}) => {
  return <HexColorPicker color={color} onChange={setColor} />;
};

export default ColorPicker;
