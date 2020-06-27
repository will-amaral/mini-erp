import React from 'react';

function ProductDetails(props) {
  const { details } = props;
  const { title, price, description, id } = details;
  return (
    <div>
      <h2>{title}</h2>
      <h3>{price}</h3>
      <p>{description}</p>
      <hr />
      <dl>
        <dt>ID:</dt>
        <dd>{id}</dd>
      </dl>
    </div>
  );
}

export default ProductDetails;
