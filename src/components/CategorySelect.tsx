import React from "react";
import {
  CircularProgress,
  Typography,
  Autocomplete,
  TextField,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { fetchCategories } from "../api/category/getCategory";
import { Category } from "../interface/category";

interface CategorySelectProps {
  selectedCategoryIds: string[];
  setFieldValue: (field: string, value: string[]) => void;
}

const CategorySelect: React.FC<CategorySelectProps> = ({
  selectedCategoryIds,
  setFieldValue,
}) => {
  const {
    data: categories = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  const handleChange = (c: Category[]) => {
    const selectedIds = c.map((category) => category.id);
    setFieldValue("categoryIds", selectedIds);
  };

  // const handleDelete = (id: string) => {
  //   const updatedSelectedCategoryIds = selectedCategoryIds.filter(
  //     (categoryId) => categoryId !== id
  //   );
  //   console.log("handleDelete", id, updatedSelectedCategoryIds);
  //   setFieldValue("categoryIds", updatedSelectedCategoryIds);
  // };

  if (isLoading) return <CircularProgress size={24} />;
  if (isError)
    return <Typography color="error">Failed to load categories</Typography>;

  return (
    <>
      {/* <Select
        multiple
        value={selectedCategoryIds}
        onChange={handleChange}
        input={<OutlinedInput label="Categories" />}
        renderValue={(selected) => (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
            {selected.map((id) => {
              const name = categories.find((c) => c.id === id)?.name;
              return (
                <Chip
                  key={id}
                  label={name}
                  onDelete={(e) => {
                    e.stopPropagation(); // prevent opening the Select dropdown
                    handleDelete(id);
                  }}
                />
              );
            })}
          </Box>
        )}
      >
        {categories.map((category) => (
          <MenuItem key={category.id} value={category.id}>
            {category.name}
          </MenuItem>
        ))}
      </Select> */}
      <Autocomplete
        multiple
        id="tags-standard"
        options={categories}
        onChange={(_, v) => {
          handleChange(v as Category[]);
        }}
        getOptionLabel={(option) => option?.name ?? ""}
        defaultValue={
          selectedCategoryIds.map((id) =>
            categories.find((c) => c.id === id)
          ) || ""
        }
        renderInput={(params) => <TextField {...params} label="Category" />}
      />
    </>
  );
};

export default CategorySelect;
