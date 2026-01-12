import React from "react";
import MuiSwitch from "@mui/material/Switch";

interface SwitchProps {
  checked?: boolean;
  onChange?(event: React.ChangeEvent<HTMLInputElement>, checked: boolean): void;
}

export const Switch = ({ checked, onChange }: SwitchProps) => {
  return (
    <MuiSwitch
      checked={checked}
      onChange={onChange}
      sx={{
        "& .MuiSwitch-switchBase.Mui-checked": {
          color: "#ff6b6b",
          "&:hover": {
            backgroundColor: "rgba(255, 107, 107, 0.08)",
          },
        },
        "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
          backgroundColor: "#ff6b6b",
        },
      }}
    />
  );
};
