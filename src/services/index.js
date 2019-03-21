import axios from 'axios';

const routeApi =
  `https://gist.githubusercontent.com/poepanda/` +
  `004af517163df9b539628e9d307e5d76/raw/5b8c920a1fb2c871b5b9037672cd4279ad4d1672`;
const CategoriesAndStores = {
  getAll: () => axios.get(`${routeApi}/categories-and-stores.json`)
};

export { CategoriesAndStores };
