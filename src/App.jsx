import React from 'react';
import { Link } from 'react-router-dom';

import Routes from './Routes';

function App() {
  return (
    <div>
      <h1>My site</h1>
      <Link to='/'>Home</Link>
      <Link to='/sobre'>Sobre</Link>
      <Link to='/produtos'>Produtos</Link>
      <Routes />
    </div>
  );
}

export default App;
