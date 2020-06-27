import mock from './config';

mock.onGet('/api/product/1').reply(200, {
  details: {
    id: '1',
    title: 'Bolsa',
    price: 'R$ 2,00',
    description: 'Uma bolsa amarela',
  },
});

mock.onGet('/api/product/2').reply(200, {
  details: {
    id: '2',
    title: 'Relógio',
    price: 'R$ 1,00',
    description: 'Um relógio digital',
  },
});
