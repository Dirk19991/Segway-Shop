import classes from './Categories.module.css';
import KS_E22 from '../../assets/images/scooters/KS_E22.png';
import KS_ES1L from '../../assets/images/scooters/KS_ES1L.png';
import KS_Air_T15 from '../../assets/images/scooters/KS_Air_T15.png';
import KS_F30 from '../../assets/images/scooters/KS_F30.png';
import KS_E45 from '../../assets/images/scooters/KS_E45.png';
import KS_MAX_Black from '../../assets/images/scooters/KS_MAX_Black.png';
import KS_MAX_White from '../../assets/images/scooters/KS_MAX_White.png';
import KS_ES2 from '../../assets/images/scooters/KS_ES2.png';
import KS_ES3 from '../../assets/images/scooters/KS_ES3.png';
import EKS_ZING_E8 from '../../assets/images/scooters/EKS_ZING_E8.png';
import EKS_ZING_E10 from '../../assets/images/scooters/EKS_ZING_E10.png';
import EKS_ZING_E12 from '../../assets/images/scooters/EKS_ZING_E12.png';
import KS_ES4 from '../../assets/images/scooters/KS_ES4.png';
import Accessories from '../../assets/images/scooters/Accessories.png';

function Categories() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.categories}>
        <div className={classes.item}>
          <div>
            <img alt='KS_E22' src={KS_E22}></img>
          </div>
          <div className={classes.itemName}>KS E22</div>
        </div>
        <div className={classes.item}>
          <div>
            <img alt='KS_ES1L' src={KS_ES1L}></img>
          </div>
          <div className={classes.itemName}>KS ES1L</div>
        </div>
        <div className={classes.item}>
          <div>
            <img alt='KS_Air_T15' src={KS_Air_T15}></img>
          </div>
          <div className={classes.itemName}>KS AIR T15</div>
        </div>
        <div className={classes.item}>
          <div>
            <img alt='KS_F30' src={KS_F30}></img>
          </div>
          <div className={classes.itemName}>KS F30</div>
        </div>
        <div className={classes.item}>
          <div>
            <img alt='KS_E45' src={KS_E45}></img>
          </div>
          <div className={classes.itemName}>KS E45</div>
        </div>
        <div className={classes.item}>
          <div>
            <img alt='KS_MAX_Black' src={KS_MAX_Black}></img>
          </div>
          <div className={classes.itemName}>KS MAX</div>
        </div>
        <div className={classes.item}>
          <div className={classes.maxWhite}>
            <img alt='KS_MAX_White' src={KS_MAX_White}></img>
          </div>
          <div className={classes.itemName}>KS MAX</div>
        </div>
        <div className={classes.item}>
          <div>
            <img alt='KS_ES2' src={KS_ES2}></img>
          </div>
          <div className={classes.itemName}>KS ES2</div>
        </div>
        <div className={classes.item}>
          <div>
            <img alt='KS_ES3' src={KS_ES3}></img>
          </div>
          <div className={classes.itemName}>KS ES3</div>
        </div>
        <div className={classes.item}>
          <div>
            <img alt='EKS_ZING_E8' src={EKS_ZING_E8}></img>
          </div>
          <div className={classes.itemName}>EKS ZING E8</div>
        </div>
        <div className={classes.item}>
          <div>
            <img alt='EKS_ZING_E10' src={EKS_ZING_E10}></img>
          </div>
          <div className={classes.itemName}>EKS ZING E10</div>
        </div>
        <div className={classes.item}>
          <div>
            <img alt='EKS_ZING_E12' src={EKS_ZING_E12}></img>
          </div>
          <div className={classes.itemName}>EKS ZING E12</div>
        </div>
        <div className={classes.item}>
          <div>
            <img alt='KS_ES4' src={KS_ES4}></img>
          </div>
          <div className={classes.itemName}>KS ES 4</div>
        </div>
        <div className={classes.item}>
          <div className={classes.accessories}>
            <img alt='Accessories' src={Accessories}></img>
          </div>
          <div className={classes.itemName}>ACCESSORIES</div>
        </div>
      </div>
    </div>
  );
}
export default Categories;
