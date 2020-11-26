import request from 'src/utils/fetch';

export const getSetting = () => request.get('/mobile-builder/v1/settings');

export const fetchCountries = () => request.get('/wc/v3/data/countries');
