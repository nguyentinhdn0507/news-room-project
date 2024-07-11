import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';

export const TextArea = ({ label, value, onChange, rows, ...props }) => {
  return (
    <TextField
      multiline
      rows={rows}
      variant="outlined"
      fullWidth
      {...props}
    />
  );
};