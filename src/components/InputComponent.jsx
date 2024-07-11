import React from "react";
import { Box, TextField, Button } from "@mui/material";

export const InputComponent = ({ text, isButton = false, placeholder,multiline=false, rows = 1 }) => {
  return (
    <Box display="flex" alignItems="center" gap={1}>
      <TextField
        multiline ={multiline}
        placeholder={placeholder}
        variant="outlined"
        size="small"
        sx={{ flex: 1 ,
          height: '100%', 
          '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
              borderColor: '#e0e0e0', // Focused border color
            },
          },
        }}
        
        rows={rows}
      />
      {isButton && (
        <Button
          variant="contained"
          color="error"
          size="medium"
          sx={{
            height: '100%', 
          }}
        >
          {text}
        </Button>
      )}
    </Box>
  );
};
