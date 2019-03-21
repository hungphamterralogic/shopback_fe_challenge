import React, { useEffect, useState } from 'react';
import injectSheet from 'react-jss';
import { CategoriesAndStores as CategoriesAndStoresApi } from '../../services';
import Loading from '../loading';
import ErrorPage from '../errorPage';
import TabBar from '../../components/tabBar';
import StoreList from '../../components/storeList';
import style from './style';

const CategoriesAndStores = props => {
  const { classes, initStores, initCategories } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchCategoriesAndStores = async () => {
    setIsError(false);
    setIsLoading(true);
    try {
      const categoriesAndStoresRawData = await CategoriesAndStoresApi.getAll();
      const { stores, categories: _categories } = categoriesAndStoresRawData.data;
      initStores(stores);
      initCategories(_categories);
    } catch (err) {
      setIsError(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchCategoriesAndStores();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          {isError ? (
            <ErrorPage />
          ) : (
            <div className={classes.wrapper}>
              <TabBar />
              <StoreList />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default injectSheet(style)(CategoriesAndStores);
