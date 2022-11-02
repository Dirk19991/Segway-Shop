import classes from './PackingList.module.css';
import YouTube from 'react-youtube';
import packingList from '../../assets/images/packingList.png';

function PackingList() {
  const opts = {
    height: '280',
    width: '480',
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.packingList}>
        <div className={classes.video}>
          <div className={classes.header}>PACKING LIST</div>
          <YouTube videoId='LB50NTuMYdU' opts={opts} />
        </div>
        <div className={classes.image}>
          <img src={packingList} alt='packingList' />
        </div>
      </div>
    </div>
  );
}
export default PackingList;
