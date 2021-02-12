import React from 'react';
import {Grid} from '@material-ui/core';
import Product from './Product/Product';

const products=[
    { id: 1 , name:' shoes',description:'running shoes', price:'$12', image:'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i4jPhKEFw1NE/v0/150x-1.jpg'},
    { id: 2 , name:' shoes',description:'running shoes', price:'$12', image:'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i4jPhKEFw1NE/v0/150x-1.jpg'},
];

const Products=()=>{

    return (
        <main >
          <Grid container justify="center" spacing={4}>
            {products.map((product) => (
              <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                <Product product={product}  />
              </Grid>
            ))}
          </Grid>
        </main>
      );
} 

export default Products
  