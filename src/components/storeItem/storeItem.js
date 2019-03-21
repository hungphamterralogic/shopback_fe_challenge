import React from 'react';
import injectSheet from 'react-jss';
import c from 'classnames';
import { isMobile } from '../../utils/detectDevice';
import style from './style';

const StoreItem = props => {
  const {
    classes,
    item: { logoUrl, displayText, id },
    selectStore
  } = props;

  const handleClickStoreItem = () => selectStore(id);

  return (
    <div
      className={c(
        classes.storeItem,
        isMobile() ? classes.storeItemMobile : classes.storeItemDesktop
      )}
      onClick={handleClickStoreItem}
    >
      <img className={classes.icon} alt="icon" src={logoUrl} />
      <span className={classes.name}>{displayText}</span>
    </div>
  );
};

export default injectSheet(style)(StoreItem);
