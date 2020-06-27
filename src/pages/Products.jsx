import React from 'react';

import ProductItem from '../components/ProductItem';

function Products() {
  return (
    <div>
      <ProductItem name='Bolsa' id='1' price='R$2,00' />
      <ProductItem name='Relógio' id='2' price='R$1,00' />
    </div>
  );
}

export default Products;
