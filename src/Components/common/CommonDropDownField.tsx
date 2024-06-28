import React, { ForwardedRef, forwardRef } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  SelectChangeEvent,
} from "@mui/material";

interface CommonDropdownProps {
  label: string;
  value: string | number;
  options: Array<{ value: string | number; label: string }>;
  error?: boolean;
  helperText?: string;
  // Add a definitive type below
  onChange: any;
}

const CommonDropdown = forwardRef(
  (
    { label, value, options, error, onChange, helperText }: CommonDropdownProps,
    ref: ForwardedRef<HTMLSelectElement>,
  ) => {
    return (
      <FormControl variant="filled" error={error} fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select value={value} onChange={onChange} label={label} inputRef={ref}>
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
      </FormControl>
    );
  },
);

export default CommonDropdown;
