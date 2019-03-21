import React from 'react';
import injectSheet from 'react-jss';
import c from 'classnames';
import TabItem from '../tabItem';
import { isMobile } from '../../utils/detectDevice';
import style from './style';

const TabBar = props => {
  const { categories, classes } = props;

  return (
    <div className={c(classes.tabBar, isMobile() ? classes.tabBarMobile : classes.tabBarDestop)}>
      {categories.map(({ name, iconUrl, id }) => (
        <TabItem key={id} name={name} iconUrl={iconUrl} id={id} />
      ))}
    </div>
  );
};

export default injectSheet(style)(TabBar);
