import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, Stack, TextField } from "@mui/material";
import React from "react";

import { TableFilterProps } from "./paginated-table.types";

export const TableFilter: React.FC<TableFilterProps> = ({
  showSearch = true,
  searchTerm = "",
  handleSearchChange,
}) => {
  return (
    <Stack direction={"row"} spacing={3} alignItems="center">
      {showSearch && (
        <TextField
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearchChange}
          sx={{
            margin: 0,
            "& .MuiOutlinedInput-root": {
              margin: 0,
            },
          }}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            },
          }}
        />
      )}
    </Stack>
  );
};
