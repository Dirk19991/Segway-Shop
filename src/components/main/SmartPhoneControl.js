import classes from './SmartPhoneControl.module.css';
import phone from '../../assets/images/phone.png';
import antiTheft from '../../assets/images/smartphone/antiTheft.svg';
import dashboard from '../../assets/images/smartphone/dashboard.svg';
import firmware from '../../assets/images/smartphone/firmware.svg';
import status from '../../assets/images/smartphone/status.svg';
import settings from '../../assets/images/smartphone/settings.svg';
import training from '../../assets/images/smartphone/training.svg';

function SmartPhoneControl() {
  return (
    <div className={classes.wrapper}>
      <div id='app' className={classes.smartPhoneControl}>
        <div className={classes.header}>Control from your smartphone</div>
        <div className={classes.description}>
          You can easily control your Segway electric scooter with your
          smartphone via Bluetooth. Not being the key to the kickscooter, it
          will give a signal in case of an attempt to steal. Check the current
          speed, data on the status of the device's systems or set the speed
          limit with a few touches.
        </div>
        <div className={classes.description}>
          And the skating training program is indispensable for beginners.
        </div>
        <div className={classes.main}>
          <div className={classes.iconsDownload}>
            <div className={classes.icons}>
              <div className={classes.iconContainer}>
                <div className={classes.icon}>
                  <img
                    className={classes.contentIcon}
                    src={antiTheft}
                    alt='antiTheft'
                  />
                </div>
                <div className={classes.iconDescription}>
                  Anti-theft protection
                </div>
              </div>

              <div className={classes.iconContainer}>
                <div className={classes.icon}>
                  <img
                    className={classes.contentIcon}
                    src={dashboard}
                    alt='dashboard'
                  />
                </div>
                <div className={classes.iconDescription}>Dashboard</div>
              </div>

              <div className={classes.iconContainer}>
                <div className={classes.icon}>
                  <img
                    className={classes.contentIcon}
                    src={firmware}
                    alt='firmware'
                  />
                </div>
                <div className={classes.iconDescription}>Firmware upgrade</div>
              </div>

              <div className={classes.iconContainer}>
                <div className={classes.icon}>
                  <img
                    className={classes.contentIcon}
                    src={status}
                    alt='status'
                  />
                </div>
                <div className={classes.iconDescription}>Device status</div>
              </div>

              <div className={classes.iconContainer}>
                <div className={classes.icon}>
                  <img
                    className={classes.contentIcon}
                    src={settings}
                    alt='settings'
                  />
                </div>
                <div className={classes.iconDescription}>
                  Settings and restrictions
                </div>
              </div>

              <div className={classes.iconContainer}>
                <div className={classes.icon}>
                  <img
                    className={classes.contentIcon}
                    src={training}
                    alt='training'
                  />
                </div>
                <div className={classes.iconDescription}>Training program</div>
              </div>
            </div>
            <div className={classes.download}></div>
          </div>
          <div className={classes.image}>
            <img src={phone} alt='phone' />
          </div>
        </div>
      </div>
    </div>
  );
}
export default SmartPhoneControl;
