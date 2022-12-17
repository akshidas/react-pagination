import React from "react";

import {
  Box,
  Pagination as MuiPagination,
  PaginationProps,
} from "@mui/material";

const Pagination = (props: PaginationProps) => {
  return (
    <Box
      sx={{
        marginTop: "2rem",
        float: "right",
      }}
    >
      <MuiPagination {...props} variant="outlined" color="primary" />
    </Box>
  );
};

export default Pagination;
