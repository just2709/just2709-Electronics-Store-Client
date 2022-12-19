import React from "react";
import PropTypes from "prop-types";
import { Box, Rating } from "@mui/material";

useStar.propTypes = {};

function useStar(ratingsAverage, ratingsQuantity) {
  return (
    <div className='flex items-center'>
      <Rating size='small' name='half-rating-read' value={ratingsAverage ?? 0} precision={0.5} max={5} readOnly />
      <Box sx={{ ml: 1, color: "gray" }}>({ratingsQuantity ?? ""})</Box>
    </div>
  );
}

export default useStar;
