import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import api from '../utils/api';
import ProductDetails from '../components/ProductDetails';
import LoadingIndicator from '../components/LoadingIndicator';

function ProductPage() {
  const { id } = useParams();
  const [details, setDetails] = useState();

  useEffect(() => {
    const fetch = async () => {
      const { data } = await api.get(`/api/product/${id}`);
      console.log(data.details);
      setDetails(data.details);
    };
    fetch();
  }, [id]);

  if (!details) return <LoadingIndicator />;

  return <ProductDetails details={details} />;
}

export default ProductPage;
