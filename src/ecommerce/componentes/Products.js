import * as React from 'react';

import Grid from '@mui/material/Grid';
import { makeStyles } from "tss-react/mui";
import Product from './Product';


const Products = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Product />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Product />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Product />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Product />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Product />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Product />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Product />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Product />
        </Grid>
      </Grid>
    </div>
  );
}

const useStyles = makeStyles()((theme) => ({
    root:{
        flexGrow: 1,
        padding: theme.spacing(3),
    }
  }));

export default Products;  