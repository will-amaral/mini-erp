import React from 'react';
import { Link } from 'react-router-dom';

function ProductItem(props) {
  const { name, id } = props;
  return (
    <div>
      <h3>{name}</h3>
      <Link to={`/produto/${id}`}>Ver mais</Link>
    </div>
  );
}

export default ProductItem;
