/* eslint-disable no-undef */
import React from 'react';
import injectSheet from 'react-jss';
import c from 'classnames';
import { isMobile } from '../../utils/detectDevice';
import style from './style';

const TabItem = props => {
  const { classes, selectedCategoryId, name, iconUrl, id, selectCategory } = props;
  const handleClickTabItem = () => selectCategory(id);

  return (
    <div
      className={c(classes.tabItem, isMobile() ? classes.tabItemMobile : classes.tabItemDestop, {
        [classes.selected]: selectedCategoryId === id
      })}
      onClick={handleClickTabItem}
    >
      <img className={classes.icon} alt="icon" src={iconUrl} />
      <span className={classes.name}>{name}</span>
    </div>
  );
};

export default injectSheet(style)(TabItem);
