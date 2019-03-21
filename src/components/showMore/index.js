/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import injectSheet from 'react-jss';
import { isMobile } from '../../utils/detectDevice';
import style from './style';

const ShowMore = props => {
  const { classes } = props;
  const usingMobile = isMobile();
  return (
    <div className={usingMobile ? classes.showMoreMobile : classes.showMoreDesktop}>
      <div className={usingMobile ? classes.textBoxMobile : classes.textBoxDesktop}>
        {usingMobile ? 'All Stores' : 'view all popular stores'}
      </div>
    </div>
  );
};

export default injectSheet(style)(ShowMore);
