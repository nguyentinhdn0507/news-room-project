import React from 'react'
import {  Button } from "@mui/material";
export const ButtonComponent = ({text,size,color}) => {
  return (
    <Button
    variant="contained"
    color={color}
    size={size}
    sx={{
      height: '100%', 
    }}
  >
    {text}
  </Button>
  )
}