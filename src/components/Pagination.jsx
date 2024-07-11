import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { PaginationItem } from '@mui/material';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import PropTypes from 'prop-types';

export const PaginationComponent = (props) => {
  const { currentPage, onPageChange } = props;
  const handleChange = (event, value) => {
    onPageChange(value);
  };

  return (
    <Stack spacing={2}>
      <Pagination
        page={currentPage}
        count={3}
        shape="rounded"
        boundaryCount={1}
        variant="outlined"
        onChange={handleChange}
        renderItem={(item) => (
          <PaginationItem
            {...item}
            sx={{
              '&.Mui-selected': {
                backgroundColor: 'red',
                color: 'white',
              },
            }}
            slots={{ previous: KeyboardDoubleArrowLeftIcon, next: KeyboardDoubleArrowRightIcon }}
            disableRipple
            disableElevation
          />
        )}
      />
    </Stack>
  );
};




