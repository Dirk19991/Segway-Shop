import segway from '../../assets/icons/segway.svg';
import owner from '../../assets/images/owner.png';
import classes from './Logo.module.css';
import { Link as RouterLink } from 'react-router-dom';
import { isMobile } from 'react-device-detect';

function Logo() {
  return (
    <div
      style={isMobile ? { marginTop: '48px' } : {}}
      className={classes.wrapper}
    >
      <div className={classes.logo}>
        <RouterLink className={classes.routerLink} to='/'>
          <div>
            <img src={segway} alt='segway' />
          </div>
        </RouterLink>
        <div className={classes.owner}>
          <div>
            <img src={owner} alt='owner' />
          </div>
          <div className={classes.ownerTextWrapper}>
            <div className={classes.header}>JOHN SMITH</div>
            <div className={classes.text}>
              <a href='mailto:email@example.com'>
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
