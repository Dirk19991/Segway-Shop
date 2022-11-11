import classes from './Footer.module.css';
import segway from '../../assets/icons/segway.svg';

function Footer() {
  return (
    <div className={classes.wrapper}>
      <div id='contacts' className={classes.footer}>
        <div className={classes.logo}>
          <img src={segway} alt='segway' />
        </div>
        <div className={classes.contacts}>
          <div>+1 (888) 888-88-88</div>
          <div>2637 Fairfax Ave Culver City, CA 90232</div>
          <div>Segway California © 2017</div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
