import bigImage from './../../../assets/images/bigImage.png';
import mediumImage from './../../../assets/images/mediumImage.png';
import classes from './BigImage.module.css';
import React from 'react';
import { useMediaQuery } from 'react-responsive';

function BigImage() {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <div className={classes.wrapper}>
      <div className={classes.bigImage}>
        <img src={isMobile ? mediumImage : bigImage} alt='bigImage' />
      </div>
    </div>
  );
}
export default BigImage;
