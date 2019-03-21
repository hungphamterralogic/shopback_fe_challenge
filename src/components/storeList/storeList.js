import React from 'react';
import injectSheet from 'react-jss';
import style from './style';
import StoreItem from '../storeItem';
import ShowMore from '../showMore';
import { isMobile } from '../../utils/detectDevice';

const StoreList = props => {
  const { stores, classes } = props;
  const storeList = isMobile() ? stores.slice(0, 8) : stores;

  return (
    <div className={classes.storeList}>
      {storeList.map(store => (
        <StoreItem key={store.id} item={store} />
      ))}
      <ShowMore />
    </div>
  );
};

export default injectSheet(style)(StoreList);
