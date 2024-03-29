import segway from '../../../assets/icons/segway.svg';
import owner from '../../../assets/images/owner.png';
import classes from './Logo.module.css';
import { Link as RouterLink } from 'react-router-dom';

function Logo() {
  return (
    <div className={classes.wrapper}>
      <div id="home" className={classes.logo}>
        <RouterLink className={classes.routerLink} to="/">
          <div>
            <img className={classes.image} src={segway} alt="segway" />
          </div>
        </RouterLink>
        <div className={classes.owner}>
          <div>
            <img src={owner} alt="owner" />
          </div>
          <div className={classes.ownerTextWrapper}>
            <div className={classes.header}>JOHN SMITH</div>
            <div className={classes.text}>
              <a href="mailto:email@example.com">
                ask the director <br></br>a question
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Logo;
