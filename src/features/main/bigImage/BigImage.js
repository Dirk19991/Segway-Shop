import bigImage from './../../../assets/images/bigImage.png';
import classes from './BigImage.module.css';

function BigImage() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.bigImage}>
        <img src={bigImage} alt='bigImage' />
      </div>
    </div>
  );
}
export default BigImage;
