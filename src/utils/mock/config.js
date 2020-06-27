import AxiosMockAdapter from 'axios-mock-adapter';
import api from '../api';

const mock = new AxiosMockAdapter(api, { delayResponse: 500 });

export default mock;
