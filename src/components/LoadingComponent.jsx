import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh', 
  },
}));

const LoadingComponent = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CircularProgress color='error'/>
    </div>
  );
};

export default LoadingComponent;
