import React from "react";
import { TextField } from "@mui/material";

const SearchBar = ({ value, onChange }) => {
  return (
    <TextField
      label="Search"
      value={value}
      onChange={onChange}
      fullWidth
      margin="normal"
      variant="outlined"
    />
  );
};

export default SearchBar;